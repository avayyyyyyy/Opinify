"use client";
import React, { FormEvent, useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { toast } from "sonner";

const HomeForm = () => {
  const [email, setEmail] = useState("");
  const pattern = /[A-Z0-9a-z._%+-]+@[A-Za-z0-9.-]+.[A-Za-z]{2,6}/gm;

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (email && pattern.test(email)) {
      toast.success("Thanks for joining waitlist! We'll let you in soon... 🥳");
      setEmail("");
    } else {
      toast.error("Please enter a valid email 🥲");
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-y-4 w-80">
        <Input
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          value={email}
          type="email"
          placeholder="Enter your email..."
        />
        <Button type="submit" variant={"default"} className="mb-8">
          Wishlist
        </Button>
      </form>
    </div>
  );
};

export default HomeForm;
