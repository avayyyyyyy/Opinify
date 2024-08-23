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
      <Button
        variant={"ghost"}
        className="text-sm animate-pulse md:block hidden"
      >
        loading...
      </Button>
    );
  }

  return (
    <>
      {data?.user?.email ? (
        <div className="flex gap-3 md:items-center md:flex-row flex-col text-start">
          <div className="my-auto mt-2 md:mt-0">
            <CreateProject />
          </div>
          <Button
            className="w-full hidden md:block"
            onClick={() => signOut()}
            variant="destructive"
          >
            Sign out
          </Button>
          <Link href="https://github.com/avayyyyyyy/opinify">
            <Button asChild variant="outline">
              Star on gihtub 🌟
            </Button>
          </Link>
        </div>
      ) : (
        <div className="hidden md:flex items-center gap-2">
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

export const MobileSheetButtonsWithAuth = () => {
  return (
    <div className="flex gap-3 md:items-center md:flex-row flex-col text-start">
      {/* <div className="">
        <CreateProject />
      </div> */}
      <Button
        className="w-full"
        onClick={() => signOut()}
        variant="destructive"
      >
        Sign out
      </Button>
      <Link href="https://github.com/avayyyyyyy/opinify">
        <Button asChild variant="outline">
          Star on gihtub 🌟
        </Button>
      </Link>
    </div>
  );
};

export const MobileSheetButtonsWithoutAuth = () => {
  return (
    <div className="flex flex-col gap-2">
      <Button onClick={() => signIn("google")} variant="secondary">
        Sign in
      </Button>
      <Button asChild variant="outline">
        <Link href="https://github.com/avayyyyyyy/opinify">
          Star on gihtub 🌟
        </Link>
      </Button>
    </div>
  );
};
