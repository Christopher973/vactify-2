import { auth } from "@/lib/auth";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const session = await auth();
  const { pathname } = request.nextUrl;

  // Protection des routes d'authentification
  if (pathname.includes("/login")) {
    if (session) {
      return NextResponse.redirect(new URL("/intervenants", request.url));
    }
  }

  // Protection des routes principales
  if (
    pathname.includes("/intervenants") ||
    pathname.includes("/courses") ||
    pathname.includes("/admin")
  ) {
    if (!session) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/login",
    "/intervenants/:path*",
    "/courses/:path*",
    "/dashboard/:path*",
  ],
};
