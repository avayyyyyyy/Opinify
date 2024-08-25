import Image from "next/image";
import React from "react";
import process1 from "../public/process1.png";
import process2 from "../public/process2.png";
import process3 from "../public/process3.png";
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

const HowToUse = () => {
  return (
    <>
      <div>
        <div className="min-w-[90vw] mt-10 flex w-full flex-col items-center justify-center">
          <h1 className="mb-2 text-center w-[60vw] md:w-fit text-2xl font-light tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-400 md:text-3xl ">
            How to Use Opinify?
          </h1>
          <p className="max-w-md text-center text-sm text-gray-400 dark:text-gray-400">
            For video tutorial{" "}
            <Link
              className="text-slate-200 font-semibold hover:underline"
              target="_blank"
              href={"https://youtu.be/xF6oBcf18Hs"}
            >
              Click Here ▶️
            </Link>
            {/* </Button> */}
          </p>
          <div className="md:flex md:flex-row flex flex-col m-auto md:gap-x-10 mt-6">
            <div className="flex flex-col justify-center items-center">
              <div className="max-w-md font-semibold text-center text-lg text-gray-400 dark:text-gray-100">
                Process 1
              </div>
              <div className="max-w-md text-center text-xs text-gray-300 dark:text-gray-300 mb-4">
                Enter Website details
              </div>
              <Image
                className="rounded-md p-2 md:hover:scale-105 duration-150"
                src={process1}
                width={300}
                height={300}
                alt="image"
              />
            </div>
            <ArrowRight className="md:m-auto md:rotate-0 text-slate-200 rounded-full border p-1 border-white rotate-90 my-4 mx-auto" />
            <div>
              <div className="max-w-md font-semibold text-center text-lg text-gray-400 dark:text-gray-100">
                Process 2
              </div>
              <div className="max-w-md text-center text-xs text-gray-300 dark:text-gray-300 mb-4">
                Create Project
              </div>
              <Image
                className="rounded-md p-2 md:mt-20 mx-auto md:hover:scale-105 duration-150"
                src={process2}
                width={120}
                height={120}
                alt="image"
              />
            </div>
            <ArrowRight className="md:m-auto md:rotate-0 text-slate-200 rounded-full border p-1 border-white rotate-90 my-4 mx-auto" />
            <div>
              <div className="max-w-md font-semibold text-center text-lg text-gray-400 dark:text-gray-100">
                Process 3
              </div>
              <div className="max-w-md text-center text-xs text-gray-300 dark:text-gray-300 mb-4">
                Embed Code
              </div>
              <Image
                className="rounded-md hidden md:block p-2 md:hover:scale-105 duration-150"
                src={process3}
                width={350}
                height={350}
                alt="image"
              />
              <Image
                className="rounded-md md:hidden p-2 md:hover:scale-105 duration-150"
                src={process3}
                width={300}
                height={300}
                alt="image"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HowToUse;

/*

import Image from "next/image";
import React from "react";
import process1 from "../public/process1.png";
import process2 from "../public/process2.png";
import process3 from "../public/process3.png";

const steps = [
  {
    title: "Process 1",
    description: "Enter Website details",
    imageSrc: process1,
    imageAlt: "Step 1 image",
  },
  {
    title: "Process 2",
    description: "Create Project",
    imageSrc: process2,
    imageAlt: "Step 2 image",
  },
  {
    title: "Process 3",
    description: "Embed Code",
    imageSrc: process3,
    imageAlt: "Step 3 image",
  },
];

const HowToUse = () => {
  return (
    <>
      <div className="my-12 min-w-[90vw] mt-16 flex w-full flex-col items-center justify-center">
        <h1 className="mb-2 text-center text-2xl font-light tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-400 md:text-3xl">
          How to generate your feedback form:
        </h1>
        <div className="flex gap-x-6 mt-6">
          {steps.map((step, index) => (
            <div key={index}>
              <div className="max-w-md font-semibold text-center text-lg text-gray-400 dark:text-gray-100">
                {step.title}
              </div>
              <div className="max-w-md text-center text-xs text-gray-300 dark:text-gray-300">
                {step.description}
              </div>
              <Image
                className="rounded-md p-1 mt-2 mx-auto"
                src={step.imageSrc}
                width={250}
                height={250}
                alt={step.imageAlt}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default HowToUse;


*/
