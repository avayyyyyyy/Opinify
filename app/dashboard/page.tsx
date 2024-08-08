import CreateProject from "@/components/CreateProject";
import DashboardCards from "@/components/DashboardCards";
import { auth } from "@/lib/auth";
import prisma from "@/lib/db";
import { redirect } from "next/navigation";
import React from "react";

const Page = async () => {
  const user = await auth();

  if (!user) {
    return redirect("/");
  }

  const currentUser = await prisma.user.findUnique({
    where: {
      email: user?.user?.email!,
    },
  });

  const data = await prisma.project.findMany({
    where: {
      userId: currentUser?.id,
    },
  });

  console.log(data);

  return (
    <div className="w-full p-4 min-h-[80vh]">
      <div className="flex justify-between items-center py-3 px-5">
        {" "}
        <h1 className="md:text-3xl text-xl font-semibold">Dashboard Page 📄</h1>
        <div className="hidden md:block">
          <CreateProject />
        </div>
      </div>
      <hr />
      <div className="p-3 flex flex-wrap gap-6">
        {data && data.length > 0 ? (
          data.map((data, index) => (
            <DashboardCards
              key={index}
              id={data.id}
              name={data.name}
              title={data.url}
              description={data.description}
            />
          ))
        ) : (
          <div className="flex flex-col justify-center mx-auto gap-y-3">
            <div className="text-center mt-3 w-full">No projects found 🥲</div>
            <CreateProject />
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;
