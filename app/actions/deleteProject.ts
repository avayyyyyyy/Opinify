"use server";

import { auth } from "@/lib/auth";
import prisma from "@/lib/db";

export const deleteProject = async (id: string) => {
  try {
    const user = await auth();

    if (!user?.user?.email) {
      // console.log("User not authenticated");
      return { success: false, error: "User not authenticated" };
    }

    // Fetch the user ID based on email
    const userRecord = await prisma.user.findUnique({
      where: {
        email: user.user.email,
      },
      select: {
        id: true,
      },
    });

    if (!userRecord?.id) {
      // console.log("User ID not found");
      return { success: false, error: "User ID not found" };
    }

    // Check if the project exists for the user
    const project = await prisma.project.findUnique({
      where: {
        id: id,
        userId: userRecord.id,
      },
    });

    if (!project) {
      // console.log("Project not found");
      return { success: false, error: "Project not found" };
    }

    // Delete the project
    const deletedProject = await prisma.project.delete({
      where: {
        id: id,
      },
    });

    // console.log("Deleted project:", deletedProject);

    return { success: true };
  } catch (error) {
    console.error("Error deleting project: ", error);
    return { success: false, error: "Error deleting project" };
  }
};
