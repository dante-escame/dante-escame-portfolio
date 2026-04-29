import { MongoClient } from "mongodb";
import fs from "fs";
import path from "path";
import dotenv from "dotenv";

// Load environment variables from .env.local
dotenv.config({ path: ".env.local" });

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  console.error("Please define the MONGODB_URI environment variable inside .env.local");
  process.exit(1);
}

async function ingest() {
  const dataPath = path.join(process.cwd(), "data", "profile-data.json");
  
  if (!fs.existsSync(dataPath)) {
    console.error(`Data file not found at ${dataPath}`);
    process.exit(1);
  }

  const rawData = fs.readFileSync(dataPath, "utf-8");
  const data = JSON.parse(rawData);

  const client = new MongoClient(MONGODB_URI!);
  
  try {
    await client.connect();
    console.log("Connected to MongoDB Atlas");

    const db = client.db("portfolio");
    const collection = db.collection("background_records");

    // Clear existing records (optional, but good for full sync)
    await collection.deleteMany({});
    console.log("Cleared existing records");

    const records = [
      ...data.experiences.map((exp: any) => ({ ...exp, type: "experience" })),
      ...data.educations.map((edu: any) => ({ ...edu, type: "education" }))
    ];

    if (records.length > 0) {
      await collection.insertMany(records);
      console.log(`Successfully ingested ${records.length} records`);
    } else {
      console.log("No records to ingest");
    }

  } catch (error) {
    console.error("Error during ingestion:", error);
  } finally {
    await client.close();
  }
}

ingest();
