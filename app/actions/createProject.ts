"use server";
import { auth } from "@/lib/auth";
import prisma from "@/lib/db";
import { z } from "zod";

export const submitProject = async ({
  name,
  url,
  description,
}: {
  name: string;
  url: string;
  description: string;
}) => {
  const user = await auth();

  const findUser = await prisma.user.findUnique({
    where: {
      email: user?.user?.email!,
    },
  });

  const projects = await prisma.project.findMany({
    where: {
      userId: findUser?.id,
    },
  });

  if (projects.length >= 5) {
    // console.log("Maximum project limit reached");
    return { success: false };
  }

  try {
    const schema = z.object({
      name: z.string(),
      url: z.string().url(),
      description: z.string().min(5),
    });

    const data = schema.safeParse({
      name,
      url,
      description,
    });

    if (!data.success) {
      // console.log("Invalid data");
      throw new Error("Invalid data");
    }
    if (!findUser?.id) {
      // console.log("User not found");
      throw new Error("User not found");
    }

    const dbSave = await prisma.project.create({
      data: {
        name: name,
        url: url,
        description: description,
        userId: findUser?.id,
      },
    });

    if (!dbSave) {
      // console.log("Failed to save data");
      throw new Error("Failed to save data");
    }

    // console.log("Project saved:", dbSave);

    return { success: true, projectId: dbSave.id };
  } catch (error) {
    // console.log("Error:", error);
    return { success: false };
  }
};
