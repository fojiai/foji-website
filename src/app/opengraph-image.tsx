import { ImageResponse } from "next/og";

/**
 * The share card. Every time the link is pasted into WhatsApp, Instagram, a
 * Slack, or Google's result, this 1200x630 image is what appears. For a product
 * whose whole audience lives on WhatsApp, having no card was the biggest single
 * hole in the site's reach.
 *
 * Generated at the edge from this JSX — no design file to keep in sync, and it
 * always matches the current wording.
 */
export const runtime = "edge";
export const alt = "Foji AI — IA no seu WhatsApp, treinada com os seus documentos";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#09090b",
          padding: "72px",
          fontFamily: "sans-serif",
        }}
      >
        {/* Top row: wordmark + heat pill */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <div
              style={{
                width: "56px",
                height: "56px",
                borderRadius: "14px",
                background: "linear-gradient(135deg, #FF2D2D, #FF5A1F, #FFB300)",
              }}
            />
            <span style={{ color: "#fafafa", fontSize: "40px", fontWeight: 700 }}>Foji AI</span>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              border: "1px solid #27272a",
              borderRadius: "999px",
              padding: "10px 22px",
            }}
          >
            <div style={{ width: "12px", height: "12px", borderRadius: "999px", background: "#25D366" }} />
            <span style={{ color: "#a1a1aa", fontSize: "24px" }}>WhatsApp + site · LGPD</span>
          </div>
        </div>

        {/* Headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div style={{ color: "#fafafa", fontSize: "76px", fontWeight: 800, lineHeight: 1.05 }}>
            Sua empresa no WhatsApp.
          </div>
          <div
            style={{
              fontSize: "76px",
              fontWeight: 800,
              lineHeight: 1.05,
              color: "#FF5A1F",
            }}
          >
            Com IA. 24 horas por dia.
          </div>
          <div style={{ color: "#a1a1aa", fontSize: "32px", marginTop: "8px" }}>
            Treinada com os seus documentos. Pronta em 5 minutos, sem programar.
          </div>
        </div>

        {/* Bottom heat bar */}
        <div
          style={{
            height: "10px",
            width: "100%",
            borderRadius: "999px",
            background: "linear-gradient(90deg, #FF2D2D, #FF5A1F, #FFB300)",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
