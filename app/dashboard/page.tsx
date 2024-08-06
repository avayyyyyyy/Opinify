import CreateProject from "@/components/CreateProject";
import DashboardCards from "@/components/DashboardCards";
import { Button } from "@/components/ui/button";
import { auth } from "@/lib/auth";
import prisma from "@/lib/db";
import { SquarePlus } from "lucide-react";
import React from "react";

const Page = async () => {
  const user = await auth();

  const data = await prisma.project.findMany({
    where: {
      userId: user?.user?.id,
    },
  });

  return (
    <div className="w-full p-4">
      <div className="flex justify-between items-center py-3 px-5">
        {" "}
        <h1 className="md:text-3xl text-xl font-semibold">Dashboard Page 📄</h1>
        <CreateProject />
      </div>
      <hr />
      <div className="p-3 flex flex-wrap gap-6">
        {data && data.length > 0 ? (
          data.map((data, index) => (
            <DashboardCards
              key={index}
              id={data.id}
              title={data.url}
              description={data.description}
            />
          ))
        ) : (
          <div className="text-center w-full">No projects found</div>
        )}
      </div>
    </div>
  );
};

export default Page;
