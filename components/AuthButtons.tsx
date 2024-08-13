"use client";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { signIn, signOut, useSession } from "next-auth/react";
import CreateProject from "./CreateProject";
import Link from "next/link";

const AuthButtons = () => {
  const { data, status } = useSession();
  const [fetching, setFetching] = useState(true);

  useEffect(() => {
    if (status !== "loading") {
      setFetching(false);
    }
  }, [status]);

  if (fetching) {
    return (
      <Button variant={"ghost"} className="text-sm animate-pulse">
        loading...
      </Button>
    );
  }

  return (
    <>
      {data?.user?.email ? (
        <div className="flex gap-3 items-center">
          <div className="block md:hidden">
            <CreateProject />
          </div>
          <Button onClick={() => signOut()} variant="outline">
            Sign out
          </Button>
          <Link href="https://github.com/avayyyyyyy/opinify">
            <Button asChild variant="outline">
              Star on gihtub 🌟
            </Button>
          </Link>
        </div>
      ) : (
        <div className="flex gap-2">
          <Button onClick={() => signIn("google")} variant="secondary">
            Sign in
          </Button>
          <Button asChild variant="outline">
            <Link href="https://github.com/avayyyyyyy/opinify">
              Star on gihtub 🌟
            </Link>
          </Button>
        </div>
      )}
    </>
  );
};

export default AuthButtons;
