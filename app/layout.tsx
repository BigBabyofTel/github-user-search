import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Dev Finder",
  description: "Find your profile on GitHub",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
