import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vidmole",
  description: "Global random video chat experience",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          padding: 0,
          fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
          backgroundColor: "#0f172a",
          color: "#ffffff",
        }}
      >
        {children}
      </body>
    </html>
  );
}
