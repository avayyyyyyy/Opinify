import {
  ChartArea,
  CircleHelp,
  FileSignature,
  ReceiptIndianRupee,
} from "lucide-react";
import Link from "next/link";
import React from "react";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent } from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { auth } from "@/lib/auth";
import prisma from "@/lib/db";
import { redirect } from "next/navigation";

const Sidebar = async () => {
  const user = await auth();

  const findUser = await prisma.user.findUnique({
    where: {
      email: user?.user?.email!,
    },
  });

  if (!user) {
    return redirect("/");
  }

  const projects = await prisma.project.findMany({
    where: {
      userId: findUser?.id,
    },
  });

  const progressLimit = (projects?.length * 100) / 5;

  console.log(progressLimit);

  return (
    <div>
      <aside className="md:flex hidden overflow-x-hidden flex-col w-64 h-full px-5 pt-3 overflow-y-auto bg-white border-r rtl:border-r-0 rtl:border-l dark:bg-black dark:border-balck">
        <div className="flex flex-col pb-8 justify-between flex-1">
          <nav className="-mx-3 space-y-6 ">
            <div className="space-y-3 ">
              <label className="px-3 flex gap-1 items-center text-xs text-black uppercase dark:text-white/50">
                Features <FileSignature size={12} />
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
                href="/dashboard/pricing"
              >
                <ReceiptIndianRupee size={16} />

                <span className="mx-2 text-sm font-medium">Pricing</span>
              </Link>
              {/* <Link
                className="flex items-center px-3 py-2 text-black transition-colors duration-300 transform rounded-lg dark:text-white/80 hover:bg-balck dark:hover:bg-balck  dark:hover:bg-gray-50/10 hover:text-white/50"
                href="/dashboard/steps"
              >
                <CircleHelp size={16} />
                <span className="mx-2 text-sm font-medium">How to use?</span>
              </Link> */}
            </div>
          </nav>
          <div>
            <div className="py-2">
              <div className="flex justify-between">
                {" "}
                <label className="flex gap-1 py-2 items-center text-xs text-black uppercase dark:text-white/50">
                  Project Limit
                </label>
                <label className="flex gap-1 py-2 items-center text-xs text-black uppercase dark:text-white/50">
                  {projects?.length} / 5
                </label>
              </div>
              <hr />
              <Progress className="mb-2" value={progressLimit} />
            </div>
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
          </div>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
