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

  const schema = z.object({
    name: z.string(),
    url: z.string(),
    description: z.string(),
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

  const dbSave = await prisma.project.create({
    data: {
      name: name,
      url: url,
      description: description,
      userId: userId?.id,
    },
  });
};
