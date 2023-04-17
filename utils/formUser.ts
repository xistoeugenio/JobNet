import { isValidPhoneNumber } from "libphonenumber-js";
import { z } from "zod";

//this verify the phoneNumber and return a boolean
const validatePhoneNumber = (phoneNumber: string | undefined) => {
  if (phoneNumber === undefined || phoneNumber === '') {
    return true; // Allow empty input
  }
  return isValidPhoneNumber(phoneNumber);
};


//this is the schema create by zod
export const updateUserSchema = z.object({
  name: z.string().nonempty({
    message: "the name is required",
  }),
  phoneNumber: z
    .string()
    .optional()
    .refine(
      (value) => validatePhoneNumber(value),
      {
        message: "Invalid phone number",
      }
    ),
});