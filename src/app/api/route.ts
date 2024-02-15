import { NextRequest, NextResponse } from "next/server";


export default async function handler(req: NextRequest, res: NextResponse) {
  const response = await fetch('http://localhost/backend');
  res.json();
  return response.json();
}
