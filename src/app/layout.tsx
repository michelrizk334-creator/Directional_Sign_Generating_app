import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Directional Sign Generator MVP",
  description: "Kuwait Code x-based directional sign generator MVP",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
