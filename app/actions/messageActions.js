"use server"

import { z } from "zod"

const messageSchema = z.object({
  name: z.string().min(3, "Nama minimal 3 karakter"),
  email: z.string().email("Format email tidak valid"),
  message: z.string().min(5, "Pesan terlalu pendek"),
})

export async function sendMessage(prevState, formData) {
  const validatedFields = messageSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  })

  // Jika validasi gagal
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    }
  }

  // Simpan ke database Supabase
  console.log(validatedFields.data)

  return {
    success: true,
  }
}