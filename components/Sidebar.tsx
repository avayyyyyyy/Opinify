import { ChartArea, CircleHelp } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Card, CardContent } from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { auth } from "@/lib/auth";

const Sidebar = async () => {
  const user = await auth();

  return (
    <div>
      <aside className="md:flex hidden flex-col  w-64 h-screen px-5 pt-3 overflow-y-auto bg-white border-r rtl:border-r-0 rtl:border-l dark:bg-black dark:border-balck">
        <div className="flex flex-col pb-8 justify-between flex-1">
          <nav className="-mx-3 space-y-6 ">
            <div className="space-y-3 ">
              <label className="px-3 text-xs text-black uppercase dark:text-white/50">
                Features
              </label>
              <hr />

              <Link
                className="flex items-center px-3 py-2 text-black transition-colors duration-300 transform rounded-lg dark:text-white/80 hover:bg-balck dark:hover:bg-balck  dark:hover:bg-gray-50/10 hover:text-white/50"
                href="/dashboard"
              >
                <ChartArea size={16} />

                <span className="mx-2 text-sm font-medium">Dashboard</span>
              </Link>
              <Link
                className="flex items-center px-3 py-2 text-black transition-colors duration-300 transform rounded-lg dark:text-white/80 hover:bg-balck dark:hover:bg-balck  dark:hover:bg-gray-50/10 hover:text-white/50"
                href="/dashboard/steps"
              >
                <CircleHelp size={16} />

                <span className="mx-2 text-sm font-medium">How to use?</span>
              </Link>
            </div>
          </nav>
          <div>
            <Card className="w-full max-w-sm bg-card rounded-lg">
              <CardContent className="p-3 grid gap-4">
                <div className="flex items-center gap-4">
                  <Avatar className="h-6 w-6">
                    <AvatarImage
                      src={user?.user?.image ?? ""}
                      alt="userImage"
                    />
                    <AvatarFallback>{user?.user?.name?.[0]}</AvatarFallback>
                  </Avatar>
                  <div className="grid gap-1">
                    <div className="font-semibold text-sm">
                      {user?.user?.name}
                    </div>
                    <div className="text-muted-foreground text-xs">
                      {user?.user?.email}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
