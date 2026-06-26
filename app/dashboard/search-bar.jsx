"use client"

import {
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation"

export default function SearchBar() {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { replace } = useRouter()

  function handleSearch(term) {
    const params = new URLSearchParams(searchParams)

    if (term) {
      params.set("search", term)
    } else {
      params.delete("search")
    }

    replace(`${pathname}?${params.toString()}`)
  }

  return (
    <input
      type="text"
      placeholder="Cari data..."
      defaultValue={searchParams.get("search")?.toString()}
      onChange={(e) => handleSearch(e.target.value)}
      className="border p-2 rounded w-full"
    />
  )
}