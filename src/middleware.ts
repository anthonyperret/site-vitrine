import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const isMaintenance = process.env.MAINTENANCE_MODE === "true";

  if (isMaintenance && !pathname.startsWith("/maintenance")) {
    const url = request.nextUrl.clone();
    url.pathname = "/maintenance";
    return NextResponse.redirect(url);
  }

  if (!isMaintenance && pathname.startsWith("/maintenance")) {
    const url = request.nextUrl.clone();
    url.pathname = "/";
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|google9d572582dcec032b\\.html|sitemap\\.xml|.*\\.(?:svg|png|jpg|jpeg|gif|webp)).*)",
  ],
};
