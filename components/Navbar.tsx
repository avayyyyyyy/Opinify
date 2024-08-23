import React from "react";
import AuthButtons, { MobileSheetButtons } from "./AuthButtons";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { ChartArea, MenuIcon, ReceiptIndianRupee } from "lucide-react";
import { Button } from "./ui/button";
import { auth } from "@/lib/auth";
import { Card, CardContent } from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const Navbar = async () => {
  const user = await auth();

  return (
    <div
      className="flex h-full bg-zinc-900 mx-auto bg-clip-padding backdrop-filter z-[100] backdrop-blur-sm bg-opacity-30 items-center md:px-16 px-6 justify-between py-6 border-b-2 border-zinc-800 sticky top-0
"
    >
      <div className="flex items-center gap-4">
        <Sheet>
          <SheetTrigger className="md:hidden block">
            <MenuIcon className="w-6 h-6" />
          </SheetTrigger>
          <SheetContent className="z-[200]" side="left">
            <SheetHeader>
              <SheetTitle className="mb-6 font-normal text-lg text-start">
                Opinify - Menu
              </SheetTitle>
              <SheetDescription className="flex flex-col justify-between h-[88vh]">
                <div>
                  {user ? (
                    <div className="mb-4 flex flex-col gap-2">
                      <Button className="w-full" asChild variant="outline">
                        <Link
                          className="flex items-center px-3 py-2 text-black transition-colors duration-300 transform rounded-lg dark:text-white/80 hover:bg-balck dark:hover:bg-balck  dark:hover:bg-gray-50/10 hover:text-white/50"
                          href="/dashboard"
                        >
                          <ChartArea size={16} />

                          <span className="mx-2 text-sm font-medium">
                            Dashboard
                          </span>
                        </Link>
                      </Button>
                      <Button className="w-full" asChild variant="outline">
                        <Link
                          className="flex items-center px-3 py-2 text-black transition-colors duration-300 transform rounded-lg dark:text-white/80 hover:bg-balck dark:hover:bg-balck  dark:hover:bg-gray-50/10 hover:text-white/50"
                          href="/dashboard/pricing"
                        >
                          <ReceiptIndianRupee size={16} />

                          <span className="mx-2 text-sm font-medium">
                            Pricing
                          </span>
                        </Link>
                      </Button>
                    </div>
                  ) : null}
                  <MobileSheetButtons />
                </div>
                {user ? (
                  <div>
                    <Card className="w-full max-w-sm bg-card rounded-lg">
                      <CardContent className="p-3 grid gap-4">
                        <div className="flex items-center gap-4">
                          <Avatar className="h-6 w-6">
                            <AvatarImage
                              src={user?.user?.image ?? ""}
                              alt="userImage"
                            />
                            <AvatarFallback>
                              {user?.user?.name?.[0]}
                            </AvatarFallback>
                          </Avatar>
                          <div className="grid gap-1">
                            <div className="font-semibold text-sm">
                              {user?.user?.name?.length! > 18
                                ? `${user?.user?.name?.slice(0, 18)}...`
                                : user?.user?.name}
                            </div>
                            <div className="text-muted-foreground text-xs">
                              {user?.user?.email?.length! > 18
                                ? `${user?.user?.email?.slice(0, 18)}...`
                                : user?.user?.email}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ) : null}
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
        <Link
          href="/"
          className="text-xl font-light text-transparent z-[200] bg-gradient-to-br from-white to-gray-300 bg-clip-text"
        >
          Opinify
        </Link>
      </div>

      <div className="flex items-center gap-4 my-auto">
        {/* <Button variant={"secondary"}>Wishlist 🪄</Button> */}
        <AuthButtons />
        {/* <p className="text-xs text-zinc-400">Coming Soon...</p> */}
      </div>
    </div>
  );
};

export default Navbar;
