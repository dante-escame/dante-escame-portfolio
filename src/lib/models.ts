export interface ExperienceRecord {
  type: "experience";
  company: string;
  role: string;
  location: string;
  startDate: string; // ISO format or YYYY-MM-DD
  endDate: string | null; // null for "Present"
  description: string;
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
  description: string;
}

export function mapRecordToTimelineItem(record: BackgroundRecord): TimelineItem {
  const formatYear = (dateStr: string) => {
    return new Date(dateStr).getFullYear().toString();
  };

  const formatDateRange = (start: string, end: string | null) => {
    const startYear = formatYear(start);
    const endYear = end ? formatYear(end) : "Present";
    return `${startYear} - ${endYear}`;
  };

  if (record.type === "experience") {
    return {
      date: formatDateRange(record.startDate, record.endDate),
      title: record.company,
      subtitle: record.role,
      description: record.description,
    };
  } else {
    return {
      date: formatDateRange(record.startDate, record.endDate),
      title: record.institution,
      subtitle: `${record.degree} in ${record.fieldOfStudy}`,
      description: "", // Education usually doesn't need a description in the simple timeline
    };
  }
}
