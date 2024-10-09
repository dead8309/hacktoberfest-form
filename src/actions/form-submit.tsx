"use server";

import prisma from "../lib/prisma";
import { UserSchema } from "@/lib/types";

interface Response {
  error?: any;
  success?: {
    message: String;
  };
}

export const CreateUser = async (data: unknown): Promise<Response> => {
  try {
    const result = UserSchema.safeParse(data);

    if (!result.success) {
      return { error: { message: result.error.message } };
    }

    const response = await prisma.$transaction(async (tx) => {
      const existingUser = await tx.user.findFirst({
        where: {
          OR: [{ roll: result.data.roll }, { email: result.data.email }],
        },
        select: { id: true },
      });

      if (existingUser) {
        return {
          error: {
            message: "User with that roll number or email already exists",
          },
        };
      }

      await tx.user.create({
        data: result.data,
      });

      return { success: { message: "Success!" } };
    });

    return response;
  } catch (error: any) {
    console.error(error);
    return {
      error: {
        message: "An unexpected error occurred. Please try again later.",
      },
    };
  }
};
