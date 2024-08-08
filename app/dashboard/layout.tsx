import Sidebar from "@/components/Sidebar";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import React from "react";

const layout = async ({ children }: { children: React.ReactNode }) => {
  const user = await auth();

  if (!user?.user?.email) {
    return redirect("/");
  }

  return (
    <div className="md:flex block min-h-[80vh]">
      <Sidebar />
      {children}
    </div>
  );
};

export default layout;
