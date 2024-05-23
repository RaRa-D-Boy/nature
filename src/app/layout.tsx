import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "[naTure]",
  description: " Nature is you,Discover yourself.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body >{children}</body>
    </html>
  );
}
