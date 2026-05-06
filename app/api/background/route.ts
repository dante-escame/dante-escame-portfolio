import { NextResponse } from "next/server";
import { getBackgroundTimelineItems } from "../../../src/lib/background";

export async function GET() {
  try {
    const timelineItems = await getBackgroundTimelineItems();
    return NextResponse.json(timelineItems);
  } catch (error) {
    console.error("Database Error:", error);
    return NextResponse.json(
      { error: "Failed to fetch background data" },
      { status: 500 }
    );
  }
}
