import { useRouter } from "next/navigation";
import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const url = new URL(request.url);
  const pathname = url.pathname;
  const router = useRouter();

  const demoMatch = pathname.match(/^\/demo\/([^/]+)$/);

  if (demoMatch) {
    const slug = demoMatch[1];
    router.push(`https://${slug}.framer.website`);
    return;
    // return NextResponse.redirect(`https://${slug}.framer.website`, 307);
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/demo/:path*",
};
