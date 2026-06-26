"use client"

import { useOptimistic } from "react"

export default function DataList({ initialData }) {

  const [optimisticData, removeOptimistic] =
    useOptimistic(
      initialData,
      (state, id) =>
        state.filter((item) => item.id !== id)
    )

  async function handleDelete(id) {

    // UI langsung berubah
    removeOptimistic(id)

    // Simulasi server action
    await fetch(`/api/delete/${id}`, {
      method: "DELETE",
    })
  }

  return (
    <div className="space-y-4">

      {optimisticData.map((item) => (
        <div
          key={item.id}
          className="border p-4 rounded flex justify-between"
        >
          <span>{item.name}</span>

          <button
            onClick={() => handleDelete(item.id)}
            className="bg-red-500 text-white px-3 py-1 rounded"
          >
            Hapus
          </button>
        </div>
      ))}

    </div>
  )
}