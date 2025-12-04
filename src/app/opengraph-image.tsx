import { ImageResponse } from "next/og";
import { loadGeistFont } from "@/lib/og/fonts";
import { ogColors } from "@/lib/seo/constants";

export const runtime = "edge";
export const alt = "Memoria - The Memory Your AI Lacks";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const geistFont = await loadGeistFont();

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: ogColors.background,
          fontFamily: "Geist, sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background gradient effects */}
        <div
          style={{
            position: "absolute",
            top: "-300px",
            right: "-200px",
            width: "800px",
            height: "800px",
            background: `radial-gradient(circle, ${ogColors.accent}33 0%, transparent 70%)`,
            borderRadius: "50%",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-200px",
            left: "-100px",
            width: "500px",
            height: "500px",
            background: `radial-gradient(circle, ${ogColors.accentLight}26 0%, transparent 70%)`,
            borderRadius: "50%",
          }}
        />

        {/* Logo mark */}
        <div
          style={{
            width: "80px",
            height: "80px",
            borderRadius: "20px",
            background: `linear-gradient(135deg, ${ogColors.gradientStart}, ${ogColors.gradientEnd})`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "32px",
          }}
        >
          <svg
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5z" />
            <path d="M2 17l10 5 10-5" />
            <path d="M2 12l10 5 10-5" />
          </svg>
        </div>

        {/* Title */}
        <h1
          style={{
            fontSize: "72px",
            fontWeight: 600,
            color: ogColors.foreground,
            margin: 0,
            letterSpacing: "-0.02em",
          }}
        >
          Memoria
        </h1>

        {/* Tagline */}
        <p
          style={{
            fontSize: "32px",
            color: ogColors.mutedForeground,
            margin: "16px 0 0 0",
            display: "flex",
          }}
        >
          The Memory Your AI{" "}
          <span style={{ color: ogColors.accent, marginLeft: "10px" }}>
            Lacks
          </span>
        </p>

        {/* Subtitle */}
        <p
          style={{
            fontSize: "20px",
            color: "#737373",
            margin: "24px 0 0 0",
            maxWidth: "600px",
            textAlign: "center",
            lineHeight: 1.4,
          }}
        >
          Git forensics for AI assistants - prevent breaking code by revealing
          hidden dependencies
        </p>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Geist",
          data: geistFont,
          style: "normal",
          weight: 400,
        },
        {
          name: "Geist",
          data: geistFont,
          style: "normal",
          weight: 600,
        },
      ],
    }
  );
}
