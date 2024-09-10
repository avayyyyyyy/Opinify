import { FeedbackTable } from "@/components/feedback-table";
import { auth } from "@/lib/auth";
import prisma from "@/lib/db";
import { redirect } from "next/navigation";
import React from "react";
import EmbedCodeTabs from "@/components/CodeTabs"; // Adjust the path as needed
import { Metadata } from "next";

interface Params {
  params: { id: string };
}

async function getProjectName(id: string) {
  const projectName = await prisma.project.findUnique({
    where: {
      id: id,
    },
    select: {
      name: true,
    },
  });
  return projectName?.name;
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const projectName = await getProjectName(params.id);
  return {
    title: projectName || "Project Page",
  };
}

const Page = async ({ params }: Params) => {
  try {
    const user = await auth();

    if (!user) {
      return redirect("/");
    }

    // console.log("Prisma Feedback: ", prisma.feedback);

    const feedbacks = await prisma.feedback.findMany({
      where: {
        projectId: params.id,
      },
    });

    feedbacks.forEach((feedback) => {
      feedback.createdAt = new Date(feedback.createdAt);
    });

    // console.log("feedbacks: ", feedbacks);
    // console.log("id: ", params.id);

    return (
      <div className="w-screen h-full overflow-y-scroll">
        <div>
          {feedbacks.length > 0 ? (
            <FeedbackTable
              initialFeedback={feedbacks}
              initialSort={{
                key: "createdAt",
                order: "desc",
              }}
            />
          ) : (
            <h1 className="text-center my-6">No feedbacks found 🥲...</h1>
          )}
        </div>
        <EmbedCodeTabs id={params.id} />
      </div>
    );
  } catch (error) {
    console.error("Error fetching feedbacks:", error);
    return <div>Error fetching feedbacks</div>;
  }
};

export default Page;
