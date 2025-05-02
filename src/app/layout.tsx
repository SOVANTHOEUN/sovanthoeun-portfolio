import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/shared/lib/theme-provider";

const inter = localFont({
  src: [
    {
      path: "../fonts/Inter_18pt-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/Inter_18pt-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
  ],
});

console.log("Font path:", "../../public/fonts/Inter_18pt-Regular.ttf");

export const metadata: Metadata = {
  title: "Sovan Thoeun - Portfolio",
  description:
    "Full-stack developer specializing in Spring Cloud, React, and modern web technologies",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
