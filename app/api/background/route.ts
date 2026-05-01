import { NextResponse } from "next/server";
import { getDatabase } from "../../../src/lib/mongodb";
import { BackgroundRecord, mapRecordToTimelineItem } from "../../../src/lib/models";

export async function GET() {
  try {
    const db = await getDatabase();
    const collection = db.collection<BackgroundRecord>("background_records");

    const records = await collection
      .aggregate<BackgroundRecord>([
        {
          $addFields: {
            sortableEndDate: {
              $ifNull: ["$endDate", new Date("9999-12-31T00:00:00.000Z")],
            },
          },
        },
        {
          $sort: {
            startDate: 1,
            sortableEndDate: 1,
          },
        },
        {
          $project: {
            sortableEndDate: 0,
          },
        },
      ])
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
