"use client";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { signIn, signOut, useSession } from "next-auth/react";
import CreateProject from "./CreateProject";
import Link from "next/link";
import { RainbowButton } from "./ui/rainbow-button";
import { GithubIcon } from "lucide-react";

const AuthButtons = () => {
  const { data, status } = useSession();
  const [fetching, setFetching] = useState(true);
  const [stars, setStars] = useState(0);

  useEffect(() => {
    if (status !== "loading") {
      setFetching(false);
    }
  }, [status]);

  useEffect(() => {
    function fetchStars() {
      fetch("https://api.github.com/repos/avayyyyyyy/opinify")
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setStars(data.stargazers_count);
        });
    }
    fetchStars();

    return () => {
      setStars(0);
    };
  }, []);

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
          <Button className="w-full hidden md:block" asChild variant="outline">
            <Link href={"/dashboard"}>Dashboard</Link>
          </Button>
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
            <RainbowButton>
              <span className="font-semibold mr-1">{stars} 🌟</span> Star on
              gihtub
            </RainbowButton>
          </Link>
        </div>
      ) : (
        <div className="hidden md:flex items-center gap-2">
          <Button onClick={() => signIn("google")} variant="secondary">
            Sign in
          </Button>
          <Link href="https://github.com/avayyyyyyy/opinify">
            <RainbowButton>
              <div className="flex items-center justify-center">
                <GithubIcon size={16} className="mr-1" />
                Stars on gihtub{" "}
                <span className="font-semibold ml-1">🌟 {stars}</span>
              </div>
            </RainbowButton>
          </Link>
        </div>
      )}
    </>
  );
};

export default AuthButtons;

export const MobileSheetButtonsWithAuth = () => {
  const [stars, setStars] = useState(0);

  useEffect(() => {
    function fetchStars() {
      fetch("https://api.github.com/repos/avayyyyyyy/opinify")
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setStars(data.stargazers_count);
        });
    }
    fetchStars();

    return () => {
      setStars(0);
    };
  }, []);

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
        <RainbowButton>
          <div className="flex items-center justify-center ">
            <GithubIcon size={16} className="mr-1" />
            Stars on gihtub{" "}
            <span className="font-semibold ml-1">🌟 {stars}</span>
          </div>
        </RainbowButton>
      </Link>
    </div>
  );
};

export const MobileSheetButtonsWithoutAuth = () => {
  const [stars, setStars] = useState(0);

  useEffect(() => {
    function fetchStars() {
      fetch("https://api.github.com/repos/avayyyyyyy/opinify")
        .then((res) => res.json())
        .then((data) => {
          setStars(data.stargazers_count);
        });
    }
    fetchStars();

    return () => {
      setStars(0);
    };
  }, []);

  return (
    <div className="flex flex-col gap-2">
      <Button onClick={() => signIn("google")} variant="secondary">
        Sign in
      </Button>
      <Link href="https://github.com/avayyyyyyy/opinify">
        <RainbowButton>
          <div className="flex items-center justify-center w-full">
            <GithubIcon size={16} className="mr-1" />
            Stars on gihtub{" "}
            <span className="font-semibold ml-1">🌟 {stars}</span>
          </div>
        </RainbowButton>
      </Link>
    </div>
  );
};
