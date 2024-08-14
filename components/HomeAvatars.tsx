import React from "react";
import { Avatar, AvatarImage } from "./ui/avatar";
import prisma from "@/lib/db";

const getFiveUsers = async () => {
  const users = await prisma.user.findMany({
    take: 5,
    select: {
      image: true, //
    },
  });
  return users;
};

const allProjectCount = async () => {
  const project = await prisma.project.findMany();
  return project.length;
};

const HomeAvatars = async () => {
  const users = await getFiveUsers();
  const projectLength = await allProjectCount();

  console.log(projectLength);

  return (
    <div className="flex flex-col">
      <div className="z-0 flex mx-auto items-center -space-x-2 *:ring *:ring-white">
        {users.map((e, i) => (
          <Avatar key={i} className="z-0 size-8">
            <AvatarImage src={e.image ?? ""} />
          </Avatar>
        ))}
      </div>
      <p className="mx-auto my-3 text-slate-200">
        {projectLength.toString() + 1}+ are currently using Opinify!
      </p>
    </div>
  );
};

export default HomeAvatars;
