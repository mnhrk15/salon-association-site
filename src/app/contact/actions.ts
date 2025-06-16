"use server";

import { z } from "zod";
import { Resend } from "resend";
import { contactFormSchema } from "@/lib/schema";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(formData: z.infer<typeof contactFormSchema>) {
  const result = contactFormSchema.safeParse(formData);

  if (!result.success) {
    return { success: false, error: result.error.format() };
  }

  try {
    const data = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL!,
      to: process.env.CONTACT_FORM_TO_EMAIL!,
      subject: 'ウェブサイトからのお問い合わせ',
      text: `会社名: ${result.data.company || '未入力'}\n氏名: ${result.data.name}\nメールアドレス: ${result.data.email}\n電話番号: ${result.data.phone || '未入力'}\n\nメッセージ:\n${result.data.message}`,
    });
    return { success: true, data };
  } catch (error) {
    console.error(error);
    return { success: false, error: 'メールの送信に失敗しました。' };
  }
} 