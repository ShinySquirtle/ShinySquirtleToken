import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Shiny Squirtle",
  description: "The water token",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="aqua">
      <body className="bg-transparent min-h-screen h-screen flex flex-col">
        <Header />
        <div className="grow">{children}</div>
      </body>
    </html>
  );
}
