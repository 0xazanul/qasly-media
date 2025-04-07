import { NextResponse } from "next/server"; export async function POST(req) { return NextResponse.json({ success: true, message: "Your message has been received! We will contact you soon." }); }
