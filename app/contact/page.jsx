"use client"

import { useFormState } from "react-dom"
import { sendMessage } from "../actions/messageActions"

const initialState = {
  errors: {},
}

export default function ContactPage() {
  const [state, formAction] = useFormState(sendMessage, initialState)

  return (
    <div className="max-w-md mx-auto mt-10">
      <form action={formAction} className="space-y-4">

        <div>
          <input
            type="text"
            name="name"
            placeholder="Nama"
            className="border p-2 w-full"
          />

          {state?.errors?.name && (
            <p className="text-red-500 text-sm">
              {state.errors.name}
            </p>
          )}
        </div>

        <div>
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="border p-2 w-full"
          />

          {state?.errors?.email && (
            <p className="text-red-500 text-sm">
              {state.errors.email}
            </p>
          )}
        </div>

        <div>
          <textarea
            name="message"
            placeholder="Pesan"
            className="border p-2 w-full"
          />

          {state?.errors?.message && (
            <p className="text-red-500 text-sm">
              {state.errors.message}
            </p>
          )}
        </div>

        <button className="bg-blue-500 text-white px-4 py-2 rounded">
          Kirim
        </button>
      </form>
    </div>
  )
}