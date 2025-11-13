import { Link } from "react-router-dom";
import { Phone, MapPin, Clock, Mail, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import MenuCard from "@/components/MenuCard";
import ChatBot from "@/components/ChatBot";
import heroImage from "@/assets/hero-restaurant.jpg";
import chholeBhature from "@/assets/chole-bhature-real.jpg";
import dalMakhani from "@/assets/dal-makhani.jpg";
import samosa from "@/assets/samosa.jpg";

const Index = () => {
  const featuredDishes = [
    {
      name: "Chhole Bhature",
      description: "Fluffy bhature with spicy, flavorful chhole — a classic North Indian indulgence.",
      price: "AED 15",
      image: chholeBhature,
    },
    {
      name: "Dal Makhani",
      description: "Slow-cooked black lentils in rich buttery tomato gravy with aromatic spices",
      price: "AED 22",
      image: dalMakhani,
    },
    {
      name: "Samosa",
      description: "Crispy golden pastries filled with spiced potatoes and peas, served with chutneys",
      price: "AED 12",
      image: samosa,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <ChatBot />

      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Kanhas Veg Restaurant Interior" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg">
            Authentic North Indian
            <span className="block text-primary">Vegetarian Cuisine</span>
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Experience the rich flavors and aromatic spices of traditional North Indian cooking
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="text-lg">
              <Link to="/menu">View Our Menu</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="text-lg bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-foreground"
            >
              <a href="tel:023094707">
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Dishes */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Our Signature Dishes</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Handcrafted with love using authentic recipes and the finest ingredients
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredDishes.map((dish, index) => (
              <MenuCard key={index} {...dish} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Button size="lg" asChild>
              <Link to="/menu">See Full Menu</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact & Location */}
      <section className="py-16 px-4 bg-secondary/30">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-6 border-border">
              <CardContent className="pt-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  <MapPin className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Location</h3>
                <p className="text-muted-foreground">
                  Musaffah Shabiya 10
                  <br />
                  Near Madina Hyper Market
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 border-border">
              <CardContent className="pt-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  <Phone className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Contact</h3>
                <a href="tel:023094707" className="text-lg text-primary hover:underline block mb-2">
                  02 309 4707
                </a>
                <a href="mailto:contact@kanhasrestaurant.com" className="text-sm text-primary hover:underline flex items-center justify-center gap-1">
                  <Mail className="h-4 w-4" />
                  contact@kanhasrestaurant.com
                </a>
              </CardContent>
            </Card>

            <Card className="text-center p-6 border-border">
              <CardContent className="pt-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  <Clock className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Hours</h3>
                <p className="text-muted-foreground">Daily: 11:00 AM - 11:00 PM</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-accent text-accent-foreground py-8 px-4">
        <div className="container mx-auto text-center">
          <h3 className="text-2xl font-bold mb-2">Kanhas Veg Restaurant</h3>
          <p className="text-accent-foreground/70 mb-4">Authentic North Indian Vegetarian Cuisine</p>
          <a href="https://kanhasrestaurant.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-accent-foreground/80 hover:text-accent-foreground mb-4">
            <Globe className="h-4 w-4" />
            kanhasrestaurant.com
          </a>
          <p className="text-sm text-accent-foreground/60">© 2025 Kanhas Veg Restaurant. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
