// Font loading for OG images
// Geist font must be fetched as ArrayBuffer since next/font doesn't work in ImageResponse

let geistFontCache: ArrayBuffer | null = null;

export async function loadGeistFont(): Promise<ArrayBuffer> {
  if (geistFontCache) {
    return geistFontCache;
  }

  // Fetch Geist font from Google Fonts
  const response = await fetch(
    "https://fonts.gstatic.com/s/geist/v1/gyByhwUxId8gMEwcGFU8WdYwblk.woff2",
    { cache: "force-cache" }
  );

  if (!response.ok) {
    throw new Error("Failed to load Geist font");
  }

  geistFontCache = await response.arrayBuffer();
  return geistFontCache;
}
