import CreateProject from "@/components/CreateProject";
import DashboardCards from "@/components/DashboardCards";
import { Button } from "@/components/ui/button";
import { SquarePlus } from "lucide-react";
import React from "react";

const Page = () => {
  const dummyData = [
    {
      title: "shubhcodes.me",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, voluptatem?",
      rating: 3,
    },
    {
      title: "example.com",
      description: "An example description for the example.com website.",
      rating: 4,
    },
    {
      title: "myportfolio.com",
      description: "This is a portfolio site showcasing various projects.",
      rating: 5,
    },
    {
      title: "randomsite.net",
      description: "Random site with some random content.",
      rating: 2,
    },
    {
      title: "demoapp.io",
      description: "A demo application for showcasing features.",
      rating: 4,
    },
  ];

  return (
    <div className="w-full p-4">
      <div className="flex justify-between items-center py-3 px-5">
        {" "}
        <h1 className="md:text-3xl text-xl font-semibold">Dashboard Page 📄</h1>
        <CreateProject />
      </div>
      <hr />
      <div className="p-3 flex flex-wrap gap-6">
        {dummyData.map((data, index) => (
          <DashboardCards
            key={index}
            title={data.title}
            description={data.description}
            stars={data.rating}
          />
        ))}
      </div>
    </div>
  );
};

export default Page;
