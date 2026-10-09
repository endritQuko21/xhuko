import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "XHUKO® — Creative Developer",
  description:
    "An independent creative practice exploring the intersection of design, frontend engineering and artificial intelligence.",
  applicationName: "XHUKO",
  keywords: [
    "XHUKO",
    "Creative Developer",
    "Art Direction",
    "UX/UI Design",
    "Artificial Intelligence",
    "Frontend Engineering",
  ],
  openGraph: {
    title: "XHUKO® — Creative Developer",
    description: "Design, code and AI. A multidisciplinary creative practice.",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f6f5f1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
