import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import React from "react";

const layout = async ({ children }: { children: React.ReactNode }) => {
  const data = await auth();

  if (!data?.user) {
    redirect("/");
  }
  return <div>{children}</div>;
};

export default layout;
