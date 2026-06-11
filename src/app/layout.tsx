import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "COA Strong",
  description: "Track your workouts. Strengthen your community.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#0a0e1a] text-white min-h-screen antialiased">
        {children}
      </body>
    </html>
  );
}
