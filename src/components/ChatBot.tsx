import { useState, useEffect, useRef } from "react";
import { MessageCircle, Send, X } from "lucide-react";

interface Message {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hello! Welcome to Kanhas Veg Restaurant. How can I help you today?",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const WEBHOOK_URL = "https://searchdavidf.app.n8n.cloud/webhook/3a0c35fe-b746-4e1d-b793-de5648c11c80";

  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputMessage,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    const currentMessage = inputMessage;
    setInputMessage("");
    setIsLoading(true);

    try {
      // Add timeout to the fetch request
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 30000); // 30 second timeout

      const response = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          message: currentMessage,
          timestamp: new Date().toISOString(),
          sender: "website_visitor",
        }),
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      console.log("Response status:", response.status);
      console.log("Response headers:", Object.fromEntries(response.headers.entries()));

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const contentType = response.headers.get("content-type");
      if (!contentType || !contentType.includes("application/json")) {
        console.warn("Response is not JSON:", contentType);
        const text = await response.text();
        console.log("Response text:", text);
        throw new Error("Invalid response format");
      }

      let data;
      try {
        const rawText = await response.text();
        console.log("Raw response:", rawText);
        data = JSON.parse(rawText);
      } catch (parseError) {
        console.error("JSON parse error:", parseError);
        throw new Error("Invalid response format from webhook");
      }

      console.log("Parsed data:", data);

      // Handle multiple possible response formats and clean the response
      let botResponseText =
        data.response ||
        data.message ||
        data.reply ||
        data.text ||
        "Thank you for your message! We'll get back to you shortly.";

      // Remove leading = or other control characters that might break the response
      botResponseText = botResponseText.replace(/^[=\x00-\x1F]+/, '').trim();

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: botResponseText,
        sender: "bot",
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Error sending message:", error);

      let errorText =
        "Sorry, there was an error sending your message. Please try again or call us directly at 02 309 4707.";

      if (error instanceof Error) {
        if (error.name === "AbortError") {
          errorText = "Request timed out. Our AI is taking longer than expected. Please try again.";
        } else if (error.message.includes("Failed to fetch")) {
          errorText = "Unable to connect to chat service. Please check your internet connection or try again later.";
        }
      }

      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: errorText,
        sender: "bot",
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Chat Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg z-50 bg-primary text-primary-foreground hover:bg-primary/90 flex items-center justify-center"
        >
          <MessageCircle className="h-6 w-6" />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-96 h-[500px] shadow-2xl z-50 flex flex-col bg-white rounded-lg border">
          <div className="flex flex-row items-center justify-between p-4 pb-4 border-b">
            <h3 className="text-lg font-semibold">Chat with Us</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="h-8 w-8 rounded hover:bg-gray-100 flex items-center justify-center"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <div className="flex-1 flex flex-col p-0 overflow-hidden">
            <div className="flex-1 h-full overflow-y-auto">
              <div className="space-y-4 p-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[80%] rounded-lg px-4 py-2 ${
                        message.sender === "user" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-900"
                      }`}
                    >
                      <p className="text-sm">{message.text}</p>
                      <span className="text-xs opacity-70 mt-1 block">
                        {message.timestamp.toLocaleTimeString([], {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </span>
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="flex justify-start">
                    <div className="bg-gray-100 text-gray-900 rounded-lg px-4 py-2">
                      <p className="text-sm">Typing...</p>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>
            </div>

            <div className="p-4 border-t">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                      e.preventDefault();
                      sendMessage(e);
                    }
                  }}
                  placeholder="Type your message..."
                  disabled={isLoading}
                  className="flex-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  onClick={sendMessage}
                  disabled={isLoading}
                  className="h-10 w-10 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  <Send className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBot;
