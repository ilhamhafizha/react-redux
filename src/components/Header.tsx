import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { IoCart, IoHeart } from "react-icons/io5";

export const Header = () => {
  return (
    <header className="h-16 border-b flex items-center justify-between px-8">
      {/* BRAND */}
      <p className="text-2xl font-bold hover:cursor-pointer">E-commerce</p>

      {/* SEARCH BAR */}
      <input
        className="max-w-[600px] w-full px-4 py-2 border rounded-md"
        placeholder="Search Product"
      />
      {/* BUTTONS */}
      <div className="flex space-x-4 h-5 items-center">
        <div className="flex space-x-2">
          <Button size="icon" variant="ghost">
            <IoCart className="h-6 w-6" />
          </Button>
          <Button size="icon" variant="ghost">
            <IoHeart className="h-6 w-6" />
          </Button>
        </div>

        <Separator orientation="vertical" className="h-full" />

        <div className="flex space-x-2">
          <Button>Log In</Button>
          <Button variant="outline">Sign Up</Button>
        </div>
      </div>
    </header>
  );
};
