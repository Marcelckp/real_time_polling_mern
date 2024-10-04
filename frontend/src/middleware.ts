import { NextResponse, NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const response = NextResponse.next();
  
  return response;
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
