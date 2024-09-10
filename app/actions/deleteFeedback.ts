"use server";

import prisma from "@/lib/db";

export const deleteFeedback = async (id: string) => {
  try {
    // console.log("id: ", id);
    const deleteFeedback = await prisma.feedback.delete({
      where: {
        id: id,
      },
    });

    // console.log("deleteFeedback: ", deleteFeedback);

    return { success: true };
  } catch (error) {
    return { success: false };
  }
};
