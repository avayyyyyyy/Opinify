import PricingPage from "@/components/Pricing";
import { auth } from "@/lib/auth";
import { Metadata } from "next";
import { redirect } from "next/navigation";
import React from "react";

export const metadata: Metadata = {
  title: "Pricing",
};

const page = async () => {
  const user = await auth();

  if (!user) {
    return redirect("/");
  }

  return (
    <div className="mx-auto">
      <PricingPage />
    </div>
  );
};

export default page;
