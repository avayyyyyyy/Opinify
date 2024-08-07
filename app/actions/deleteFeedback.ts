"use server";

import prisma from "@/lib/db";

export const deleteFeedback = async (id: string) => {
  try {
    const deleteFeedback = await prisma.feedback.delete({
      where: {
        id: id,
      },
    });

    console.log("deleteFeedback: ", deleteFeedback);

    return { success: true };
  } catch (error) {
    return { success: false };
  }
};
