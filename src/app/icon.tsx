import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0E2F2A",
          borderRadius: 8,
        }}
      >
        <svg width="22" height="22" viewBox="0 0 64 64" fill="none">
          <path d="M16 44 V24" stroke="#C6A15B" strokeWidth="3" strokeLinecap="round" />
          <path d="M48 44 V24" stroke="#C6A15B" strokeWidth="3" strokeLinecap="round" />
          <path
            d="M16 26 C24 10, 40 10, 48 26"
            stroke="#C6A15B"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
          />
          <path d="M16 33 H48" stroke="#C6A15B" strokeWidth="2" />
          <circle cx="32" cy="18" r="2.5" fill="#C6A15B" />
        </svg>
      </div>
    ),
    { ...size }
  );
}
