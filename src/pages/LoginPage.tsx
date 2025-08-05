import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  Form,
  FormItem,
  FormMessage,
  FormLabel,
  FormField,
  FormControl,
  FormDescription,
} from "@/components/ui/form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

interface Form {
  username: string;
  password: string;
}

const loginFormSchema = z.object({
  username: z
    .string()
    .min(3, "Username has to be 3 and 16 characters or more")
    .max(16, "username has to be less than 16 characters"),
  password: z.string().min(8, "password has to be 8 characters or more"),
});

const LoginPage = () => {
  const form = useForm({
    defaultValues: {
      username: "",
      password: "",
    },
    resolver: zodResolver(loginFormSchema),
    reValidateMode: "onSubmit",
  });

  const [isChecked, setIsChecked] = useState(false);
  ``;

  const handleLogin = (values: Form) => {
    alert(`username ${values.username} password ${values.password}`);
  };

  return (
    <main className="px-4 w-full min-h-screen flex flex-col justify-center items-center">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleLogin)} className="w-full max-w-[540px]">
          <Card>
            <CardHeader>
              <CardTitle>Welcome Back!</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-2">
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <Input {...field} id="username" />
                    </FormControl>
                    <FormDescription />
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input {...field} type={isChecked ? "text" : "password"} id="password" />
                    </FormControl>
                    <FormDescription />
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="show-password"
                  onCheckedChange={(checked) => setIsChecked(checked == true)}
                />
                <Label htmlFor="show-password">Show Password</Label>
              </div>
            </CardContent>

            <CardFooter>
              <div className="flex flex-col space-y-4 w-full">
                <Button type="submit">Login</Button>
                <Button variant="link" className="w-full">
                  Sign up
                </Button>
              </div>
            </CardFooter>
          </Card>
        </form>
      </Form>
    </main>
  );
};

export default LoginPage;
