import { ImageResponse } from "next/og";
import { siteConfig } from "@/config/site";
export const alt = siteConfig.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        alignItems: "center",
        background: "#0b0d10",
        color: "#e8eaed",
        display: "flex",
        height: "100%",
        padding: "72px",
        width: "100%",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
        <p style={{ color: "#4c9eff", fontFamily: "monospace", fontSize: 24, margin: 0 }}>
          &gt; DEPLOYMENT PROFILE // SOFTWARE ENGINEER
        </p>
        <h1
          style={{
            fontFamily: "monospace",
            fontSize: 70,
            letterSpacing: "-0.05em",
            lineHeight: 1.05,
            margin: 0,
            maxWidth: 1000,
          }}
        >
          Software that ships like a pipeline.
        </h1>
        <p style={{ color: "#8b92a0", fontSize: 27, margin: 0 }}>{siteConfig.name}</p>
        <div style={{ background: "#3dd68c", display: "flex", height: 4, width: 160 }} />
      </div>
    </div>,
    size,
  );
}
