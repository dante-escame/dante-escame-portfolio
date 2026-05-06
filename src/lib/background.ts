import { getDatabase } from "./mongodb";
import { BackgroundRecord, mapRecordToTimelineItem, type TimelineItem } from "./models";

export async function getBackgroundTimelineItems(): Promise<TimelineItem[]> {
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

    return records.map(mapRecordToTimelineItem);
  } catch (error) {
    console.error("Failed to fetch background data:", error);
    return [];
  }
}
