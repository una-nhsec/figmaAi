import { supabase } from "../supabase";

export interface InquiryInput {
  name: string;
  message: string;
}

export async function insertInquiry({ name, message }: InquiryInput) {
  const { error } = await supabase
    .from("inquiries")
    .insert([{ name, message }]);

  if (error) {
    console.error("Error inserting inquiry:", error);
    throw new Error(`DB 에러: ${error.message} (Code: ${error.code})`);
  }

  return true;
}
