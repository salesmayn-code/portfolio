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
        background: "#09090b",
        color: "#fafafa",
        display: "flex",
        height: "100%",
        padding: "72px",
        width: "100%",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
        <p style={{ color: "#a1a1aa", fontSize: 28, margin: 0 }}>
          Full-Stack Development · DevOps · DevSecOps
        </p>
        <h1 style={{ fontSize: 72, letterSpacing: "-0.04em", lineHeight: 1, margin: 0 }}>
          {siteConfig.name}
        </h1>
        <p style={{ color: "#d4d4d8", fontSize: 32, margin: 0 }}>
          Secure applications. Reliable delivery.
        </p>
      </div>
    </div>,
    size,
  );
}
