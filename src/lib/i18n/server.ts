import { cookies } from "next/headers";

import { messages, type Locale } from "./messages";

export async function getServerTranslation() {
  const cookieStore = await cookies();
  const raw = cookieStore.get("preferred-locale")?.value;
  const locale: Locale = raw === "pt-br" ? "pt-br" : "en";
  return messages[locale];
}
