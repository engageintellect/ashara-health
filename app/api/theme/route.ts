import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { theme } = await request.json();
    if (theme !== "dark" && theme !== "light") {
      return NextResponse.json({ ok: false, error: "Invalid theme" }, { status: 400 });
    }

    const res = NextResponse.json({ ok: true });
    res.cookies.set("theme", theme, {
      path: "/",
      httpOnly: false,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 24 * 365, // 1 year
    });

    return res;
  } catch (e) {
    return NextResponse.json({ ok: false, error: "Bad request" }, { status: 400 });
  }
}
