import { NextResponse } from "next/server"

export function middleware(request) {

  const session =
    request.cookies.get("session")

  if (!session) {

    return NextResponse.redirect(
      new URL("/", request.url)
    )

  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/dashboard/:path*"],
}