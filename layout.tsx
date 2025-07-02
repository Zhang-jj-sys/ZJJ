import type { Metadata } from "next";
import { Orbitron } from "next/font/google";
import "./globals.css";

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

export const metadata: Metadata = {
  title: "PixelCode学习平台 - Web前端开发课程作业",
  description: "像素风格的Web前端开发课程作业展示平台，包含HTML、CSS、JavaScript等技术练习",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className={`${orbitron.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
