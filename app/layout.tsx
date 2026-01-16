import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vidmole",
  description: "Vidmole – Global video interactions platform",
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
          fontFamily: "Arial, sans-serif",
          backgroundColor: "#0f172a",
          color: "#ffffff",
        }}
      >
        {children}
      </body>
    </html>
  );
}
