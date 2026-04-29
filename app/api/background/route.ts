import { NextResponse } from "next/server";
import { getDatabase } from "../../../src/lib/mongodb";
import { BackgroundRecord, mapRecordToTimelineItem } from "../../../src/lib/models";

export async function GET() {
  try {
    const db = await getDatabase();
    const collection = db.collection<BackgroundRecord>("background_records");

    const records = await collection
      .find({})
      .sort({ startDate: 1 }) // Order by date (asc) as requested
      .toArray();

    const timelineItems = records.map(mapRecordToTimelineItem);

    return NextResponse.json(timelineItems);
  } catch (error) {
    console.error("Database Error:", error);
    return NextResponse.json(
      { error: "Failed to fetch background data" },
      { status: 500 }
    );
  }
}
