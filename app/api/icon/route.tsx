import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(to right, #2563eb, #0ea5e9)",
          fontSize: 180,
          fontWeight: "bold",
          color: "white",
        }}
      >
        CM
      </div>
    ),
    {
      width: 1024,
      height: 1024,
    }
  );
}
