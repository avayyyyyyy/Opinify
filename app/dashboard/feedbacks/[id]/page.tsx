import { FeedbackTable } from "@/components/feedback-table";
import { auth } from "@/lib/auth";
import prisma from "@/lib/db";
import { redirect } from "next/navigation";
import React from "react";
import EmbedCodeTabs from "@/components/CodeTabs"; // Adjust the path as needed
import { Metadata } from "next";
import Markdown from "react-markdown";

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

    console.log("feedbacks: ", feedbacks);
    // console.log("id: ", params.id);

    return (
      <div className="w-screen h-full overflow-y-scroll">
        {/* <div className="p-4 border rounded-lg m-2">
          <div className="text-2xl font-bold mb-2">
            What our expert thinks about you website 🤖
          </div>
          <div className="text-sm text-zinc-400">
            <Markdown>
              {`"general_feedback": "The provided feedback data seems to lack substance and clarity. Most of the feedback entries appear to be test data with repetitive or nonsensical content. ", "specific_feedback": ["- **Feedback Content:**  The 'feedback' field often contains repeated strings (\"clzl2hbzl0002xqbah92ket38\") or meaningless sequences (\"jnjnjnjnjnjnj\"), which makes it difficult to derive any meaningful insights.  ", "- **User Information:**  Multiple entries share the same email address (\"jabhi465@gmail.com\"), potentially indicating test submissions or inaccurate data collection.", "- **Data Relevance:**  Without context about the website itself, it's challenging to provide specific recommendations based on the feedback. ", "- **Actionable Insights:**  To extract valuable guidance, focus on gathering specific and descriptive feedback from real users about their experience on the website. "], "recommendation": "Encourage users to provide detailed feedback on specific aspects of the website, such as design, usability, content, or functionality. This will help you identify areas for improvement and enhance the overall user experience."`}
            </Markdown>
          </div>
        </div> */}
        <div className="flex text-sm gap-x-2 m-2 border border-red-800 text-red-400 rounded-lg p-4">
          <div
            className="font-bold
           shrink-0"
          >
            🚨 Note:
          </div>
          <div className="">
            Please embed the updated widget code from below and paste it in your
            website. Thank you!
          </div>
        </div>
        <div className="m-2">
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
