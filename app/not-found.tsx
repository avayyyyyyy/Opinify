import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <div>
      <div className="grid min-h-[80vh] place-content-center px-4">
        <h1 className="uppercase tracking-widest text-slate-300">
          404 | Page Not Found!
        </h1>
        <Button asChild className="mt-3 text-slate-200" variant={"link"}>
          <Link href={"/"}>Go Back Home 🏡</Link>
        </Button>
        <p className="text-slate-200 font-thin text-center mt-2">
          - Opinify.in -
        </p>
      </div>
    </div>
  );
};

export default Page;
