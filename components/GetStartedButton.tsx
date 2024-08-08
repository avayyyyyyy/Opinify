"use client";
import React from "react";
import { Button } from "./ui/button";
import { MoveRight } from "lucide-react";
import { signIn } from "next-auth/react";

const GetStartedButton = () => {
  return (
    <div>
      <Button onClick={() => signIn("google")} className="mb-8 border">
        Get Started for free <MoveRight size={16} className="ml-2" />
      </Button>
    </div>
  );
};

export default GetStartedButton;
