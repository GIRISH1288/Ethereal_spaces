import { NextResponse } from 'next/server';
import connectToDB from '@/lib/Mongodb';

export async function GET(_req: Request) {
  try {
    // Check if MONGODB_URI exists before connecting
    if (!process.env.MONGODB_URI) {
      return NextResponse.json({ 
        message: "Database connection not configured" 
      }, { status: 200 });
    }
    
    await connectToDB();
    return NextResponse.json({ message: "Database connected successfully!" });
  } catch (_error) {
    return NextResponse.json({ error: "Database connection failed" }, { status: 500 });
  }
}