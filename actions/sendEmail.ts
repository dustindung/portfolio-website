"use server";
import { getErrorMessage } from "@/lib/utils";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API);

export const sendEmail = async (formData: FormData) => {
  const email = formData.get("email");
  const message = formData.get("message");

  if (!message || typeof message !== "string")
    return {
      error: "Invalid mesage",
    };

  if (!email || typeof email !== "string")
    return {
      error: "Invalid email",
    };

  let data;
  try {
    data = await resend.emails.send({
      from: "Dustin Portfolio <onboarding@resend.dev>",
      to: "dustindung300@gmail.com",
      subject: `Message from contact form - ${email}`,
      reply_to: email,
      text: message,
    });
  } catch (error: any) {
    console.log(error);
    return {
      error: getErrorMessage(error),
    };
  }

  return {
    data,
  };
};
