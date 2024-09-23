import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import DeleteProjectButton from "./ProjectDeleteButton";

const DashboardCards = ({
  id,
  title,
  description,
  name,
}: {
  id: string;
  title: string;
  description: string;
  name: string;
}) => {
  return (
    <div className="border md:max-w-72 w-full px-4 flex flex-col transition-all border-white/20 hover:border-white/50 ease-in-out gap-y-2 py-3 rounded-md overflow-hidden mx-auto md:mx-0">
      <div className="text-md block">{name}</div>
      <hr />
      <Link
        href={title}
        target="_blank"
        className="text-xs text-blue-500 font-light"
      >
        {title.length > 35 ? `${title.slice(0, 35)}...` : title}
      </Link>
      <div className="block text-xs text-white/70 font-light">
        {description.length > 40
          ? `${description.slice(0, 40)}...`
          : description}
      </div>
      {/* <div className="flex items-center gap-2">
        {[...Array(5)].map((_, index) => (
          <Star key={index} fill={index < stars ? "#fff" : "none"} />
        ))}
      </div> */}
      <div className="w-full flex gap-4 items-center mt-2">
        <Button asChild variant={"secondary"}>
          <Link href={`/dashboard/feedbacks/${id}`}>View</Link>
        </Button>
        <DeleteProjectButton id={id} />
      </div>
    </div>
  );
};

export default DashboardCards;
