import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./global.sass";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sign In - Lima",
  description: " Implementing Industry Best Practices for Login Screens ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
