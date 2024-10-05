import React from "react";
import Link from "next/link";
import { MenuIcon, ChartArea, ReceiptIndianRupee, Info } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import AuthButtons, {
  MobileSheetButtonsWithAuth,
  MobileSheetButtonsWithoutAuth,
} from "./AuthButtons";
import { auth } from "@/lib/auth";

// Extracted navigation items for better maintainability
const NAV_ITEMS = [
  { href: "/dashboard", icon: ChartArea, label: "Dashboard" },
  { href: "/dashboard/pricing", icon: ReceiptIndianRupee, label: "Pricing" },
  { href: "/about", icon: Info, label: "About" },
] as const;

// Extracted into a separate component for better organization
const UserCard = ({ user }: { user: any }) => (
  <Card className="w-full max-w-sm bg-card rounded-lg">
    <CardContent className="p-3 grid gap-4">
      <div className="flex items-center gap-4">
        <Avatar className="h-6 w-6">
          <AvatarImage src={user?.user?.image ?? ""} alt="userImage" />
          <AvatarFallback>{user?.user?.name?.[0]}</AvatarFallback>
        </Avatar>
        <div className="grid gap-1">
          <div className="font-semibold text-sm">
            {truncateText(user?.user?.name, 18)}
          </div>
          <div className="text-muted-foreground text-xs">
            {truncateText(user?.user?.email, 18)}
          </div>
        </div>
      </div>
    </CardContent>
  </Card>
);

// Helper function for text truncation
const truncateText = (text: string | undefined, limit: number): string => {
  if (!text) return "";
  return text.length > limit ? `${text.slice(0, limit)}...` : text;
};

// Navigation buttons component
const NavigationButtons = () => (
  <>
    {NAV_ITEMS.map(({ href, icon: Icon, label }) => (
      <Button key={href} className="w-full" asChild variant="outline">
        <Link
          className="flex items-center px-3 py-2 text-black transition-colors duration-300 transform rounded-lg dark:text-white/80 hover:bg-black dark:hover:bg-gray-50/10 hover:text-white/50"
          href={href}
        >
          <Icon size={16} />
          <span className="mx-2 text-sm font-medium">{label}</span>
        </Link>
      </Button>
    ))}
  </>
);

const MobileMenu = ({ user }: { user: any }) => (
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
                <NavigationButtons />
                <MobileSheetButtonsWithAuth />
              </div>
            ) : (
              <MobileSheetButtonsWithoutAuth />
            )}
          </div>
          {user && <UserCard user={user} />}
        </SheetDescription>
      </SheetHeader>
    </SheetContent>
  </Sheet>
);

const Navbar = async () => {
  const user = await auth();

  return (
    <div className="flex h-full bg-zinc-900 mx-auto bg-clip-padding backdrop-filter z-[100] backdrop-blur-sm bg-opacity-30 items-center md:px-16 px-6 justify-between py-6 border-b-2 border-zinc-800 sticky top-0">
      <div className="flex items-center gap-4">
        <MobileMenu user={user} />
        <Link
          href="/"
          className="text-xl font-light text-transparent z-[200] bg-gradient-to-br from-white to-gray-300 bg-clip-text"
        >
          Opinify
        </Link>
      </div>

      <div className="flex items-center gap-4 my-auto">
        <AuthButtons />
      </div>
    </div>
  );
};

export default Navbar;
