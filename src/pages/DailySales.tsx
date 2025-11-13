import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import { cn } from "@/lib/utils";

const formSchema = z.object({
  date: z.date({
    required_error: "Date is required",
  }),
  cashSale: z
    .string()
    .min(0, "Cash Sale is required")
    .refine((val) => !isNaN(Number(val)) && Number(val) >= 0, {
      message: "Must be a valid positive number",
    }),
  bankSale: z.string().refine((val) => !isNaN(Number(val)) && Number(val) >= 0, {
    message: "Must be a valid positive number",
  }),
  teaCounterSale: z
    .string()
    .min(0, "Tea Counter Sale is required")
    .refine((val) => !isNaN(Number(val)) && Number(val) >= 0, {
      message: "Must be a valid positive number",
    }),
  creditSale: z
    .string()
    .min(0, "Credit Sale is required")
    .refine((val) => !isNaN(Number(val)) && Number(val) >= 0, {
      message: "Must be a valid positive number",
    }),
  canteenCashSale: z
    .string()
    .min(0, "Canteen Cash Sale is required")
    .refine((val) => !isNaN(Number(val)) && Number(val) >= 0, {
      message: "Must be a valid positive number",
    }),
  canteenBankSale: z
    .string()
    .min(0, "Canteen Bank Sale is required")
    .refine((val) => !isNaN(Number(val)) && Number(val) >= 0, {
      message: "Must be a valid positive number",
    }),
  totalExpense: z
    .string()
    .min(1, "Total Expense is required")
    .refine((val) => !isNaN(Number(val)) && Number(val) >= 0, {
      message: "Must be a valid positive number",
    }),
  depositToBox: z
    .string()
    .min(0, "Deposit to Box is required")
    .refine((val) => !isNaN(Number(val)) && Number(val) >= 0, {
      message: "Must be a valid positive number",
    }),
  canteenDepositToBox: z
    .string()
    .min(0, "Canteen Deposit to Box is required")
    .refine((val) => !isNaN(Number(val)) && Number(val) >= 0, {
      message: "Must be a valid positive number",
    }),
  closingBalance: z
    .string()
    .min(0, "Closing Balance is required")
    .refine((val) => !isNaN(Number(val)) && Number(val) >= 0, {
      message: "Must be a valid positive number",
    }),
  cashOutDepositBox: z
    .string()
    .min(0, "Cash out Deposit box is required")
    .refine((val) => !isNaN(Number(val)) && Number(val) >= 0, {
      message: "Must be a valid positive number",
    }),
  careemSales: z
    .string()
    .min(0, "Careem Sales is required")
    .refine((val) => !isNaN(Number(val)) && Number(val) >= 0, {
      message: "Must be a valid positive number",
    }),
  noonSales: z
    .string()
    .min(0, "Noon Sales is required")
    .refine((val) => !isNaN(Number(val)) && Number(val) >= 0, {
      message: "Must be a valid positive number",
    }),
  talabatSales: z
    .string()
    .min(0, "Talabat Sales is required")
    .refine((val) => !isNaN(Number(val)) && Number(val) >= 0, {
      message: "Must be a valid positive number",
    }),
});

type FormValues = z.infer<typeof formSchema>;

const DailySales = () => {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      cashSale: "",
      bankSale: "",
      teaCounterSale: "",
      creditSale: "",
      canteenCashSale: "",
      canteenBankSale: "",
      totalExpense: "",
      depositToBox: "",
      canteenDepositToBox: "",
      closingBalance: "",
      cashOutDepositBox: "",
      careemSales: "",
      noonSales: "",
      talabatSales: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    try {
      // Prepare the payload for the webhook
      const payload = {
        date: format(data.date, "yyyy-MM-dd"),
        dateFormatted: format(data.date, "PPP"),
        cashSale: Number(data.cashSale),
        bankSale: Number(data.bankSale),
        teaCounterSale: Number(data.teaCounterSale),
        creditSale: Number(data.creditSale),
        canteenCashSale: Number(data.canteenCashSale),
        canteenBankSale: Number(data.canteenBankSale),
        totalExpense: Number(data.totalExpense),
        depositToBox: Number(data.depositToBox),
        canteenDepositToBox: Number(data.canteenDepositToBox),
        closingBalance: Number(data.closingBalance),
        cashOutDepositBox: Number(data.cashOutDepositBox),
        careemSales: Number(data.careemSales),
        noonSales: Number(data.noonSales),
        talabatSales: Number(data.talabatSales),
        submittedAt: new Date().toISOString(),
      };

      console.log("Submitting to webhook:", payload);

      // Send to n8n webhook
      const response = await fetch("https://searchdavidf.app.n8n.cloud/webhook/cad397b4-ece6-41fa-b107-e50f4afaf125", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(`Webhook returned status ${response.status}`);
      }

      console.log("Webhook response:", await response.text());

      toast.success("Daily sales record submitted successfully!");
      form.reset();
    } catch (error) {
      console.error("Error submitting to webhook:", error);
      toast.error("Failed to submit sales record. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-3 text-foreground">Daily Sales Entry</h1>
            <p className="text-lg text-muted-foreground">Record daily sales and financial transactions</p>
          </div>

          <Card className="border-border">
            <CardHeader>
              <CardTitle className="text-2xl">Sales Information</CardTitle>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  {/* Date Field */}
                  <FormField
                    control={form.control}
                    name="date"
                    render={({ field }) => (
                      <FormItem className="flex flex-col">
                        <FormLabel className="text-base">Date *</FormLabel>
                        <Popover>
                          <PopoverTrigger asChild>
                            <FormControl>
                              <Button
                                variant="outline"
                                className={cn(
                                  "w-full pl-3 text-left font-normal",
                                  !field.value && "text-muted-foreground",
                                )}
                              >
                                {field.value ? format(field.value, "PPP") : <span>Pick a date</span>}
                                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                              </Button>
                            </FormControl>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                              mode="single"
                              selected={field.value}
                              onSelect={field.onChange}
                              disabled={(date) => date > new Date() || date < new Date("2020-01-01")}
                              initialFocus
                              className={cn("p-3 pointer-events-auto")}
                            />
                          </PopoverContent>
                        </Popover>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Cash Sale */}
                    <FormField
                      control={form.control}
                      name="cashSale"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-base">Cash Sale *</FormLabel>
                          <FormControl>
                            <Input
                              type="number"
                              step="0.01"
                              placeholder="Enter amount"
                              {...field}
                              className="text-base"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Bank Sale */}
                    <FormField
                      control={form.control}
                      name="bankSale"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-base">Bank Sale *</FormLabel>
                          <FormControl>
                            <Input
                              type="number"
                              step="0.01"
                              placeholder="Enter amount"
                              {...field}
                              className="text-base"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Tea Counter Sale */}
                    <FormField
                      control={form.control}
                      name="teaCounterSale"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-base">Tea Counter Sale *</FormLabel>
                          <FormControl>
                            <Input
                              type="number"
                              step="0.01"
                              placeholder="Enter amount"
                              {...field}
                              className="text-base"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Credit Sale */}
                    <FormField
                      control={form.control}
                      name="creditSale"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-base">Credit Sale *</FormLabel>
                          <FormControl>
                            <Input
                              type="number"
                              step="0.01"
                              placeholder="Enter amount"
                              {...field}
                              className="text-base"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Canteen Cash Sale */}
                    <FormField
                      control={form.control}
                      name="canteenCashSale"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-base">Canteen Cash Sale *</FormLabel>
                          <FormControl>
                            <Input
                              type="number"
                              step="0.01"
                              placeholder="Enter amount"
                              {...field}
                              className="text-base"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Canteen Bank Sale */}
                    <FormField
                      control={form.control}
                      name="canteenBankSale"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-base">Canteen Bank Sale *</FormLabel>
                          <FormControl>
                            <Input
                              type="number"
                              step="0.01"
                              placeholder="Enter amount"
                              {...field}
                              className="text-base"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Total Expense */}
                    <FormField
                      control={form.control}
                      name="totalExpense"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-base">Total Expense *</FormLabel>
                          <FormControl>
                            <Input
                              type="number"
                              step="0.01"
                              placeholder="Enter amount"
                              {...field}
                              className="text-base"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Deposit to Box */}
                    <FormField
                      control={form.control}
                      name="depositToBox"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-base">Deposit to Box *</FormLabel>
                          <FormControl>
                            <Input
                              type="number"
                              step="0.01"
                              placeholder="Enter amount"
                              {...field}
                              className="text-base"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Canteen Deposit to Box */}
                    <FormField
                      control={form.control}
                      name="canteenDepositToBox"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-base">Canteen Deposit to Box *</FormLabel>
                          <FormControl>
                            <Input
                              type="number"
                              step="0.01"
                              placeholder="Enter amount"
                              {...field}
                              className="text-base"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Closing Balance */}
                    <FormField
                      control={form.control}
                      name="closingBalance"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-base">Closing Balance *</FormLabel>
                          <FormControl>
                            <Input
                              type="number"
                              step="0.01"
                              placeholder="Enter amount"
                              {...field}
                              className="text-base"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Cash out Deposit box */}
                    <FormField
                      control={form.control}
                      name="cashOutDepositBox"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-base">Cash out Deposit Box *</FormLabel>
                          <FormControl>
                            <Input
                              type="number"
                              step="0.01"
                              placeholder="Enter amount"
                              {...field}
                              className="text-base"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Careem Sales */}
                    <FormField
                      control={form.control}
                      name="careemSales"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-base">Careem Sales *</FormLabel>
                          <FormControl>
                            <Input
                              type="number"
                              step="0.01"
                              placeholder="Enter amount"
                              {...field}
                              className="text-base"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Noon Sales */}
                    <FormField
                      control={form.control}
                      name="noonSales"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-base">Noon Sales *</FormLabel>
                          <FormControl>
                            <Input
                              type="number"
                              step="0.01"
                              placeholder="Enter amount"
                              {...field}
                              className="text-base"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Talabat Sales */}
                    <FormField
                      control={form.control}
                      name="talabatSales"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-base">Talabat Sales *</FormLabel>
                          <FormControl>
                            <Input
                              type="number"
                              step="0.01"
                              placeholder="Enter amount"
                              {...field}
                              className="text-base"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="flex justify-center pt-4">
                    <Button type="submit" size="lg" className="w-full md:w-auto">
                      Submit Daily Sales
                    </Button>
                  </div>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="bg-foreground text-background py-8 px-4 mt-12">
        <div className="container mx-auto text-center">
          <h3 className="text-2xl font-bold mb-2">Kanhas Veg Restaurant</h3>
          <p className="text-background/70 mb-4">Authentic North Indian Vegetarian Cuisine</p>
          <p className="text-sm text-background/60">© 2025 Kanhas Veg Restaurant. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default DailySales;
