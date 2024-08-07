import prisma from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const feedbackSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  feedback: z.string(),
  rating: z.number().int().min(1).max(5),
  projectid: z.string(),
});

export async function POST(req: NextRequest) {
  try {
    const feedback = await req.json();

    console.log("Body: ", feedback);

    // Validate feedback data using zod
    const validation = feedbackSchema.safeParse(feedback);

    console.log("validation", validation);

    if (!validation.success) {
      return NextResponse.json(
        { success: false, error: "Invalid feedback data" },
        { status: 400 }
      );
    }

    // Save feedback to database
    const submitFeedback = await prisma.feedback.create({
      data: {
        name: validation.data.name,
        email: validation.data.email,
        feedback: validation.data.feedback,
        rating: validation.data.rating,
        projectId: validation.data.projectid,
      },
    });

    console.log("submitFeedback: ", submitFeedback);

    return NextResponse.json(
      {
        success: true,
        message: "Feedback received successfully",
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Failed to process feedback" },
      { status: 500 }
    );
  }
}
