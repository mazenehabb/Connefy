import { z } from "zod";

const passwordPattern =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

function isAtLeast18(dateOfBirth: string) {
  const birthDate = new Date(`${dateOfBirth}T00:00:00`);
  const latestAllowedBirthDate = new Date();

  latestAllowedBirthDate.setHours(0, 0, 0, 0);
  latestAllowedBirthDate.setFullYear(latestAllowedBirthDate.getFullYear() - 18);

  return birthDate <= latestAllowedBirthDate;
}

export const signUpSchema = z
  .object({
    name: z
      .string()
      .trim()
      .min(3, "Name must be at least 3 characters")
      .max(50, "Name must be at most 50 characters"),
    username: z
      .string()
      .trim()
      .min(3, "Username must be at least 3 characters")
      .max(50, "Username must be at most 50 characters")
      .regex(/^[a-zA-Z0-9_]+$/, "Use letters, numbers, or underscores only"),
    email: z
      .string()
      .trim()
      .email("Please enter a valid email address"),
    dateOfBirth: z
      .string()
      .min(1, "Date of birth is required")
      .refine(
        (value) => !Number.isNaN(new Date(`${value}T00:00:00`).getTime()),
        "Please enter a valid date",
      )
      .refine(isAtLeast18, "You must be at least 18 years old"),
    gender: z.enum(["male", "female"], {
      message: "Please select your gender",
    }),
    password: z
      .string()
      .min(1, "Password is required")
      .regex(
        passwordPattern,
        "Use 8+ characters with uppercase, lowercase, number, and symbol",
      ),
    rePassword: z.string().min(1, "Please confirm your password"),
  })
  .refine((values) => values.password === values.rePassword, {
    message: "Passwords do not match",
    path: ["rePassword"],
  });

export type SignUpFormValues = z.infer<typeof signUpSchema>;
