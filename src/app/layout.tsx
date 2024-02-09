import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import "./global.sass";

const ubunto = Ubuntu({
  weight: ["400", "500", "700"],
  display: "swap",
  subsets: ["latin"],
});

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
      <body className={ubunto.className}>{children}</body>
    </html>
  );
}
