import { Star } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

const DashboardCards = ({
  id,
  title,
  description,
}: {
  id: string;
  title: string;
  description: string;
}) => {
  return (
    <div className="border md:max-w-72 w-full px-4 flex flex-col transition-all ease-in-out gap-y-2 py-3 rounded-md mx-auto md:mx-0">
      <div className="text-xl">{title.slice(0, 22)}...</div>
      <hr />
      <div className="text-xs text-white/70 font-light">{description}</div>
      {/* <div className="flex items-center gap-2">
        {[...Array(5)].map((_, index) => (
          <Star key={index} fill={index < stars ? "#fff" : "none"} />
        ))}
      </div> */}
      <div className="w-full flex gap-4 items-center mt-2">
        <Button asChild variant={"secondary"}>
          <Link href={`/dashboard/feedbacks/${id}`}>View</Link>
        </Button>
        <Button variant={"default"}>Delete</Button>
      </div>
    </div>
  );
};

export default DashboardCards;
