import { z } from "zod";

export const UserSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z
    .string()
    .email("Invalid email address")
    .regex(/^[\w.-]+@kiit\.ac\.in$/, "Please use your KIIT email"),
  phone: z
    .string()
    .length(10, "Phone numbers must be of 10 digits")
    .regex(/^[0-9]+$/, "Phone number must contain only digits"),
  roll: z
    .string()
    .min(6, "Roll numbers must be more than 6 digits")
    .regex(/^[0-9]+$/, "Roll number must contain only digits"),
  githubId: z.union([
    z
      .string()
      .regex(
        /^[a-zA-Z0-9](?:[a-zA-Z0-9]|-(?=[a-zA-Z0-9])){0,38}$/,
        "Invalid GitHub Id"
      ),
    z
      .string()
      .url()
      .transform((url, ctx) => {
        const match = url.match(/^https?:\/\/(?:www\.)?github\.com\/([^/]+)/);
        if (!match) {
          // throw new Error("Invalid GitHub URL");
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: "Invalid GitHub URL",
          });
          return z.NEVER;
        }
        return match[1];
      }),
  ]),
  year: z.enum(["1", "2", "3", "4"], {
    errorMap: (issue, ctx) => {
      return { message: "Please select your Year" };
    },
  }),
});

export type User = z.infer<typeof UserSchema>;
