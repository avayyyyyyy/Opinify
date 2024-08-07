"use server";

import { auth } from "@/lib/auth";
import prisma from "@/lib/db";

export const deleteProject = async (id: string) => {
  try {
    const user = await auth();

    console.log("user: ", user);

    if (!user?.user?.email) {
      console.log("User not authenticated");
      return { success: false, error: "User not authenticated" };
    }

    const userId = await prisma.user.findUnique({
      where: {
        email: user.user.email,
      },
      select: {
        id: true,
      },
    });

    const project = await prisma.project.findUnique({
      where: {
        id: id,
        userId: userId?.id,
      },
    });

    console.log("project: ", project);

    if (!project) {
      console.log("Project not found");
      return { success: false, error: "Project not found" };
    }

    const deletedProject = await prisma.project.delete({
      where: {
        id: id,
        userId: userId?.id,
      },
    });

    console.log("Deleted project:", deletedProject);

    return { success: true };
  } catch (error) {
    console.error("Error deleting project: ", error);
    return { success: false, error: "Error deleting project" };
  }
};
