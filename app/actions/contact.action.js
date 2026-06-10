"use server";

import prisma from "@/lib/prisma";
import { resend } from "@/lib/resend";

export async function createContact(formData) {
  try {
    const { fullName, email, phone, subject, message } = Object.fromEntries(
      formData.entries(),
    );

    await prisma.contact.create({
      data: {
        fullName,
        email,
        phone,
        subject,
        message,
      },
    });

    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "support@ugyan.in",
      subject: `New Contact Form: ${subject}`,
      html: ` <h2>New Contact Request</h2>
         <p><strong>Name:</strong> ${fullName}</p>
         <p><strong>Email:</strong> ${email}</p>
         <p><strong>Phone:</strong> ${phone}</p>

         <p><strong>Subject:</strong> ${subject}</p>

         <p><strong>Message:</strong></p>
         <p> ${message}</p>

              `,
    });

    await resend.emails.send({
      from: "support@ugyan.in",
      to: `${email}`,
      subject: "Thank You for Contacting Ugyan Tech Solutions",
      html: `

     <h2>Thank You for Contacting Ugyan Tech Solutions</h2>

<p>Dear ${fullName},</p>

<p>
  We have received your message and appreciate your interest in our services.
</p>

<p>
  Our team will review your inquiry and get back to you as soon as possible.
</p>

<p>
  Thank you for choosing Ugyan Tech Solutions.
</p>

<p>
  Best Regards,<br />
  Ugyan Tech Solutions
</p>`,
    });

    return {
      success: true,
      message: "Message sent Successfully",
    };
  } catch (error) {
    return {
      success: false,
      message: "Something went wrong",
    };
  }
}
