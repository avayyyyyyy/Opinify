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
  try {
    const schema = z.object({
      name: z.string(),
      url: z.string().url(),
      description: z.string().min(10),
    });

    const data = schema.safeParse({
      name,
      url,
      description,
    });

    if (!data.success) {
      throw new Error("Invalid data");
    }

    const userId = await prisma.user.findUnique({
      where: {
        email: user?.user?.email!,
      },
    });
    if (!userId) {
      throw new Error("User not found");
    }

    const dbSave = await prisma.project.create({
      data: {
        name: name,
        url: url,
        description: description,
        userId: userId?.id,
      },
    });

    if (!dbSave) {
      throw new Error("Failed to save data");
    }

    console.log(dbSave);

    return { success: true };
  } catch (error) {
    return { success: false };
  }
};
