import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

const LoginPage = () => {
  const [inputUsername, setInputUsername] = useState("");
  const [inputPassword, setPasword] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [inputUsernameMessage, setInputUsernameMessage] = useState("");
  const [inputPasswordMessage, setInputPasswordMessage] = useState("");

  const handleLogin = () => {
    const userNameIsVlid = inputUsername.length >= 3;
    const passwordIsValid = inputPassword.length >= 8;

    if (!userNameIsVlid) {
      alert("username must be at least 3 characters");
      return;
    }

    if (!passwordIsValid) {
      alert("password must be at least 8 characters");
      return;
    }

    alert(`username ${inputUsername} password ${inputPassword}`);
  };

  return (
    <main className="px-4 w-full min-h-screen flex flex-col justify-center items-center">
      <form onSubmit={handleLogin} className="w-full max-w-[540px]">
        <Card>
          <CardHeader>
            <CardTitle>Welcome Back!</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-2">
            <div>
              <Label>Username</Label>
              <Input
                onChange={(e) => {
                  if (e.target.value.length < 3) {
                    setInputUsernameMessage("username must be at least 3 characters");
                  } else {
                    setInputUsernameMessage("");
                  }
                  setInputUsername(e.target.value);
                }}
              />
              <p className="text-sm text-muted-foreground py-1">{inputUsernameMessage}</p>
            </div>

            <div>
              <Label>Password</Label>
              <Input
                type={isChecked ? "text" : "password"}
                onChange={(e) => {
                  if (e.target.value.length < 8) {
                    setInputPasswordMessage("password must be at least 8 characters");
                  } else {
                    setInputPasswordMessage("");
                  }
                  setPasword(e.target.value);
                }}
              />
              <p className="text-sm text-muted-foreground py-1">{inputPasswordMessage}</p>
            </div>

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
              <Button disabled={inputUsername.length < 3 || inputPassword.length < 8} type="submit">
                Login
              </Button>
              <Button variant="link" className="w-full">
                Sign up
              </Button>
            </div>
          </CardFooter>
        </Card>
      </form>
    </main>
  );
};

export default LoginPage;
