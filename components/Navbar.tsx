import React from "react";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <div
      className="flex w-screen h-full bg-zinc-900 mx-auto bg-clip-padding backdrop-filter z-[100000] backdrop-blur-sm bg-opacity-30 items-center px-16 justify-between py-6 border-b-2 border-zinc-900 sticky top-0
"
    >
      <div className="text-xl font-light text-transparent z-[200] bg-gradient-to-br from-white to-gray-300 bg-clip-text">
        Opinify
      </div>
      <div className="flex gap-2">
        {/* <Button variant={"outline"}>Log in</Button>
        <Button variant={"secondary"}>Sign up</Button> */}
        {/* <Button variant={"secondary"}>Wishlist 🪄</Button> */}
        <p className="text-xs text-zinc-400">Coming Soon...</p>
      </div>
    </div>
  );
};

export default Navbar;

// colorFrom = "#bc4e9c",
//   colorTo = "#f80759",
