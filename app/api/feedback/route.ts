import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

export async function POST(req: NextRequest) {
  try {
    const feedback = await req.json();

    const feedbackSchema = z.object({
      name: z.string(),
      email: z.string().email(),
      feedback: z.string(),
      rating: z.number().int().min(1).max(5),
    });

    if (!feedbackSchema.safeParse(feedback)) {
      return NextResponse.json(
        { success: false, error: "Invalid feedback data" },
        { status: 400 }
      );
    }

    console.log(feedback);
    return NextResponse.json(
      {
        success: true,
        message: "Feedback received successfuly",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error handling feedback:", error);
    return NextResponse.json(
      { success: false, error: "Failed to process feedback" },
      { status: 500 }
    );
  }
}
