import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { format } from "date-fns";
import { CalendarIcon, Users, Shield, LogOut } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Navigation from "@/components/Navigation";
import { cn } from "@/lib/utils";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/integrations/supabase/client";

const formSchema = z.object({
  date: z.date({
    required_error: "Date is required",
  }),
  cashSale: z
    .string()
    .optional()
    .refine(
      (val) =>
        val === undefined || val === "" || (!isNaN(Number(val)) && Number(val) >= 0), {
        message: "Must be a valid positive number",
      }),
  bankSale: z
    .string()
    .optional()
    .refine(
      (val) =>
        val === undefined || val === "" || (!isNaN(Number(val)) && Number(val) >= 0), {
        message: "Must be a valid positive number",
      }),
  teaCounterSale: z
    .string()
    .optional()
    .refine(
      (val) =>
        val === undefined || val === "" || (!isNaN(Number(val)) && Number(val) >= 0), {
        message: "Must be a valid positive number",
      }),
  creditSale: z
    .string()
    .optional()
    .refine(
      (val) =>
        val === undefined || val === "" || (!isNaN(Number(val)) && Number(val) >= 0), {
        message: "Must be a valid positive number",
      }),
  canteenCashSale: z
    .string()
    .optional()
    .refine(
      (val) =>
        val === undefined || val === "" || (!isNaN(Number(val)) && Number(val) >= 0), {
        message: "Must be a valid positive number",
      }),
  canteenBankSale: z
    .string()
    .optional()
    .refine(
      (val) =>
        val === undefined || val === "" || (!isNaN(Number(val)) && Number(val) >= 0), {
        message: "Must be a valid positive number",
      }),
  totalExpense: z
    .string()
    .optional()
    .refine(
      (val) =>
        val === undefined || val === "" || (!isNaN(Number(val)) && Number(val) >= 0), {
        message: "Must be a valid positive number",
      }),
  depositToBox: z
    .string()
    .optional()
    .refine(
      (val) =>
        val === undefined || val === "" || (!isNaN(Number(val)) && Number(val) >= 0), {
        message: "Must be a valid positive number",
      }),
  canteenDepositToBox: z
    .string()
    .optional()
    .refine(
      (val) =>
        val === undefined || val === "" || (!isNaN(Number(val)) && Number(val) >= 0), {
        message: "Must be a valid positive number",
      }),
  closingBalance: z
    .string()
    .optional()
    .refine(
      (val) =>
        val === undefined || val === "" || (!isNaN(Number(val)) && Number(val) >= 0), {
        message: "Must be a valid positive number",
      }),
  cashOutDepositBox: z
    .string()
    .optional()
    .refine(
      (val) =>
        val === undefined || val === "" || (!isNaN(Number(val)) && Number(val) >= 0), {
        message: "Must be a valid positive number",
      }),
  careemSales: z
    .string()
    .optional()
    .refine(
      (val) =>
        val === undefined || val === "" || (!isNaN(Number(val)) && Number(val) >= 0), {
        message: "Must be a valid positive number",
      }),
  noonSales: z
    .string()
    .optional()
    .refine(
      (val) =>
        val === undefined || val === "" || (!isNaN(Number(val)) && Number(val) >= 0), {
        message: "Must be a valid positive number",
      }),
  talabatSales: z
    .string()
    .optional()
    .refine(
      (val) =>
        val === undefined || val === "" || (!isNaN(Number(val)) && Number(val) >= 0), {
        message: "Must be a valid positive number",
      }),
});

type FormValues = z.infer<typeof formSchema>;

interface UserWithRole {
  id: string;
  email: string;
  created_at: string;
  role: string | null;
}

const DailySales = () => {
  const { signOut } = useAuth();
  const navigate = useNavigate();
  const [users, setUsers] = useState<UserWithRole[]>([]);
  const [loadingUsers, setLoadingUsers] = useState(false);

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

  const handleSignOut = async () => {
    await signOut();
    navigate("/auth");
  };

  const fetchUsers = async () => {
    setLoadingUsers(true);
    try {
      const { data, error } = await supabase
        .from("profiles")
        .select(`
          id,
          email,
          created_at,
          user_roles (role)
        `)
        .order("created_at", { ascending: false });

      if (error) throw error;

      const usersWithRoles = data.map((user: any) => ({
        id: user.id,
        email: user.email,
        created_at: user.created_at,
        role: user.user_roles?.[0]?.role || null,
      }));

      setUsers(usersWithRoles);
    } catch (error) {
      console.error("Error fetching users:", error);
      toast.error("Failed to load users");
    } finally {
      setLoadingUsers(false);
    }
  };

  const updateUserRole = async (userId: string, newRole: string | null) => {
    try {
      // First, delete existing role if any
      await supabase
        .from("user_roles")
        .delete()
        .eq("user_id", userId);

      // Then insert new role if not null
      if (newRole) {
        const { error } = await supabase
          .from("user_roles")
          .insert([{ user_id: userId, role: newRole as "admin" | "user" }]);

        if (error) throw error;
      }

      toast.success("User role updated successfully");
      fetchUsers(); // Refresh the list
    } catch (error) {
      console.error("Error updating user role:", error);
      toast.error("Failed to update user role");
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

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
        <div className="container mx-auto max-w-6xl">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-4xl font-bold mb-3 text-foreground">Admin Panel</h1>
              <p className="text-lg text-muted-foreground">Manage sales and users</p>
            </div>
            <Button variant="outline" onClick={handleSignOut}>
              <LogOut className="mr-2 h-4 w-4" />
              Sign Out
            </Button>
          </div>

          <Tabs defaultValue="sales" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="sales">Daily Sales</TabsTrigger>
              <TabsTrigger value="users">User Management</TabsTrigger>
            </TabsList>

            <TabsContent value="sales" className="space-y-4">
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
                              <FormLabel className="text-base">Cash Sale</FormLabel>
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
                              <FormLabel className="text-base">Bank Sale</FormLabel>
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
                              <FormLabel className="text-base">Tea Counter Sale</FormLabel>
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
                              <FormLabel className="text-base">Credit Sale</FormLabel>
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
                              <FormLabel className="text-base">Canteen Cash Sale</FormLabel>
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
                              <FormLabel className="text-base">Canteen Bank Sale</FormLabel>
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
                              <FormLabel className="text-base">Total Expense</FormLabel>
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
                              <FormLabel className="text-base">Deposit to Box</FormLabel>
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
                              <FormLabel className="text-base">Canteen Deposit to Box</FormLabel>
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
                              <FormLabel className="text-base">Closing Balance</FormLabel>
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
                              <FormLabel className="text-base">Cash out Deposit Box</FormLabel>
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
                              <FormLabel className="text-base">Careem Sales</FormLabel>
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
                              <FormLabel className="text-base">Noon Sales</FormLabel>
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
                              <FormLabel className="text-base">Talabat Sales</FormLabel>
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
            </TabsContent>

            <TabsContent value="users" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5" />
                    User Management
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {loadingUsers ? (
                    <p className="text-center text-muted-foreground py-8">Loading users...</p>
                  ) : (
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Email</TableHead>
                          <TableHead>Role</TableHead>
                          <TableHead>Created</TableHead>
                          <TableHead>Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {users.map((user) => (
                          <TableRow key={user.id}>
                            <TableCell className="font-medium">{user.email}</TableCell>
                            <TableCell>
                              <div className="flex items-center gap-2">
                                {user.role && <Shield className="h-4 w-4 text-primary" />}
                                <span className="capitalize">{user.role || "No role"}</span>
                              </div>
                            </TableCell>
                            <TableCell>
                              {new Date(user.created_at).toLocaleDateString()}
                            </TableCell>
                            <TableCell>
                              <Select
                                value={user.role || "none"}
                                onValueChange={(value) =>
                                  updateUserRole(user.id, value === "none" ? null : value)
                                }
                              >
                                <SelectTrigger className="w-32">
                                  <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="none">No role</SelectItem>
                                  <SelectItem value="user">User</SelectItem>
                                  <SelectItem value="admin">Admin</SelectItem>
                                </SelectContent>
                              </Select>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  )}
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <footer className="bg-accent text-accent-foreground py-8 px-4 mt-12">
        <div className="container mx-auto text-center">
          <h3 className="text-2xl font-bold mb-2">Kanhas Veg Restaurant</h3>
          <p className="text-accent-foreground/70 mb-4">Authentic North Indian Vegetarian Cuisine</p>
          <p className="text-sm text-accent-foreground/60">© 2025 Kanhas Veg Restaurant. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default DailySales;
