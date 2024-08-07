import { FeedbackTable } from "@/components/feedback-table";
import { auth } from "@/lib/auth";
import prisma from "@/lib/db";
import { redirect } from "next/navigation";
import React from "react";
import { Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import CopyToClipboard from "@/components/CopyToClipboard";

interface Params {
  params: { id: string };
}

const Page = async ({ params }: Params) => {
  try {
    const user = await auth();

    if (!user) {
      return redirect("/");
    }

    console.log("Prisma Feedback: ", prisma.feedback);

    // Fetch feedbacks related to the project
    const feedbacks = await prisma.feedback.findMany({
      where: {
        projectId: params.id,
      },
    });

    // Convert createdAt property to string
    feedbacks.forEach((feedback) => {
      feedback.createdAt = new Date(feedback.createdAt);
    });

    console.log("feedbacks: ", feedbacks);
    console.log("id: ", params.id);

    const codeString = ` <body>
    <widget-web-component projectid="${params.id}"></widget-web-component>

    <!-- Include React and ReactDOM from CDN -->
    <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>

    <!-- Include your UMD build -->
    <script src="https://opinify-widget-w24d.vercel.app/widget.umd.js"></script>
  </body>`;

    return (
      <div className="w-screen h-screen overflow-y-scroll">
        <div>
          {feedbacks.length > 0 ? (
            <FeedbackTable
              initialFeedback={feedbacks}
              initialSort={{
                key: "feedback",
                order: "desc",
              }}
            />
          ) : (
            <>
              <h1 className="text-center my-6">No feedbacks found</h1>
            </>
          )}
        </div>
        <div className="flex items-center mt-8 mx-8 justify-between">
          <div>
            <h1 className="text-3xl font-bold">Embed Code</h1>
            <p className="text-sm text-white/70">
              Embedd this code in your website to get user feedbacks! 😙
            </p>
          </div>
          <CopyToClipboard id={params.id} />
        </div>
        <div className="p-5 border rounded-md m-4 text-sm overflow-scroll">
          <pre>
            {/* <SyntaxHighlighter language="javascript"> */}
            {codeString}
            {/* </SyntaxHighlighter> */}
          </pre>
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error fetching feedbacks:", error);
    return <div>Error fetching feedbacks</div>;
  }
};

export default Page;
