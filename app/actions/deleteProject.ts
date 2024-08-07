"use server";

import { auth } from "@/lib/auth";
import prisma from "@/lib/db";

export const deleteProject = async (id: string) => {
  try {
    const user = await auth();

    const project = await prisma.project.findUnique({
      where: {
        id: id,
        userId: user?.user?.id,
      },
    });

    console.log("project: ", project);

    if (!project?.id) {
      return { success: false };
    }

    console.log("project.userId ", project.userId);
    console.log("user?.user?.id ", user?.user?.id);

    const deleteProject = await prisma.project.delete({
      where: {
        id: id,
      },
    });

    console.log("deleteProject: ", deleteProject);

    return { success: true };
  } catch (error) {
    return { success: false };
  }
};
