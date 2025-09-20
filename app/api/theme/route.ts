import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({ message: 'Theme API endpoint' });
}
