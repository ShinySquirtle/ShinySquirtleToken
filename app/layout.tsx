import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import { TOKEN_ADDRESS, TOKEN_NAME } from "@/data/config";

export const metadata: Metadata = {
  title: TOKEN_NAME,
  description: TOKEN_ADDRESS,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="aqua">
      <body className="min-h-screen h-screen flex flex-col font-grandstander">
        <Header />
        <div className="grow">{children}</div>
      </body>
    </html>
  );
}
