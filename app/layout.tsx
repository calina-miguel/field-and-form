import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Field & Form",
  description: "Turn a browse signal into a more relevant route through functional food and wellbeing.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
