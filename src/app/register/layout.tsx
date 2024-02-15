import type { Metadata } from "next";
import styles from "./layout.module.sass";

export const metadata: Metadata = {
  title: "Sign Up - Lima",
  description: " Implementing Industry Best Practices for Login Screens ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className={styles.main}>
      <h1>Sign Up</h1>
      {children}
    </main>
  );
}
