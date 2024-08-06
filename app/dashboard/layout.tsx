import Sidebar from "@/components/Sidebar";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import React from "react";

const layout = async ({ children }: { children: React.ReactNode }) => {
  const data = await auth();

  if (!data?.user) {
    redirect("/");
  }
  return (
    <div className="md:flex block">
      <Sidebar />
      {children}
    </div>
  );
};

export default layout;
