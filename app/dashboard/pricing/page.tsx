import PricingPage from "@/components/Pricing";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import React from "react";

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
