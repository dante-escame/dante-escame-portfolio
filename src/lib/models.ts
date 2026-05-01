export interface ExperienceRecord {
  type: "experience";
  company: string;
  role: string;
  location: string;
  startDate: string; // ISO format or YYYY-MM-DD
  endDate: string | null; // null for "Present"
  paragraphs?: string[];
  description?: string | string[];
}

export interface EducationRecord {
  type: "education";
  institution: string;
  degree: string;
  fieldOfStudy: string;
  startDate: string;
  endDate: string;
}

export type BackgroundRecord = ExperienceRecord | EducationRecord;

export interface TimelineItem {
  date: string;
  title: string;
  subtitle: string;
  paragraphs: string[];
}

function normalizeParagraphs(record: BackgroundRecord): string[] {
  const paragraphs = "paragraphs" in record ? record.paragraphs : undefined;

  if (Array.isArray(paragraphs) && paragraphs.length > 0) {
    return paragraphs;
  }

  const description = "description" in record ? record.description : undefined;

  if (Array.isArray(description)) {
    return description;
  }

  if (typeof description === "string" && description.length > 0) {
    return [description];
  }

  return [];
}

export function mapRecordToTimelineItem(record: BackgroundRecord): TimelineItem {
  const formatYearMonth = (dateStr: string) => {
    const date = new Date(dateStr);
    const month = date.toLocaleString("en-US", { month: "short", timeZone: "UTC" });

    return `${month} ${date.getUTCFullYear()}`;
  };

  const formatDateRange = (start: string, end: string | null) => {
    const startYearMonth = formatYearMonth(start);
    const endYearMonth = end ? formatYearMonth(end) : "Present";

    return `${startYearMonth} - ${endYearMonth}`;
  };

  if (record.type === "experience") {
    return {
      date: formatDateRange(record.startDate, record.endDate),
      title: record.company,
      subtitle: record.role,
      paragraphs: normalizeParagraphs(record),
    };
  } else {
    return {
      date: formatDateRange(record.startDate, record.endDate),
      title: record.institution,
      subtitle: `${record.degree} in ${record.fieldOfStudy}`,
      paragraphs: [],
    };
  }
}
