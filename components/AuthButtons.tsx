"use client";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { signIn, signOut, useSession } from "next-auth/react";
import { Loader } from "lucide-react";
import CreateProject from "./CreateProject";

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
        </div>
      ) : (
        <div className="flex gap-2">
          <Button onClick={() => signIn("google")} variant="outline">
            Log in
          </Button>
          <Button onClick={() => signIn("google")} variant="secondary">
            Sign up
          </Button>
        </div>
      )}
    </>
  );
};

export default AuthButtons;
