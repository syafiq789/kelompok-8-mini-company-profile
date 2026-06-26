"use server"

import { supabase } from "../../lib/supabase"

export async function sendMessage(prevState, formData) {
  const name = formData.get("name")
  const email = formData.get("email")
  const message = formData.get("message")

  console.log("INPUT:", name, email, message)

  const { data, error } = await supabase
    .from("messages")
    .insert([{ name, email, message }])

  console.log("HASIL DATA:", data)
  console.log("HASIL ERROR:", error)

  if (error) {
    return { success: false }
  }

  return { success: true }
}