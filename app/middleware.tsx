import { auth } from "@/lib/auth";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const session = await auth();

  // Vérifier si l'utilisateur accède à une route protégée
  if (request.nextUrl.pathname.startsWith("/(main)")) {
    if (!session) {
      // Rediriger vers la page de connexion
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  return NextResponse.next();
}

// Configuration des chemins à protéger
export const config = {
  matcher: [
    "/(main)/:path*",
    "/intervenants/:path*",
    "/courses/:path*",
    "/admin/:path*",
  ],
};
