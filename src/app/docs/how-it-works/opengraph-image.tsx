import { createOGImage } from "@/lib/og/template";
import { getOGMetadata } from "@/lib/og/metadata";

export const runtime = "edge";
export const alt = "How Memoria Works";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const metadata = getOGMetadata("/docs/how-it-works");
  return createOGImage({
    title: metadata.title,
    description: metadata.description,
    category: metadata.category,
  });
}
