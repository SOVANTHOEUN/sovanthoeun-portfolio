import localFont from "next/font/local";
import { ThemeProvider } from "src/6_shared/lib/theme-provider";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

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

// export const metadata = {
//   title: "Sovan Thoeun - Portfolio",
//   description:
//     "Full-stack developer specializing in Spring Cloud, React, and modern web technologies",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleThemeToggle = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
  };

  if (!mounted) return null;

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
          {/* Floating theme toggle button */}
          <div className="fixed left-1/2 bottom-6 -translate-x-1/2 z-50 flex items-center gap-3">
            <span className="text-gray-400">
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M12 3v1m0 16v1m8.66-13.66l-.71.71M4.05 19.95l-.71.71M21 12h-1M4 12H3m16.66 5.66l-.71-.71M4.05 4.05l-.71-.71" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <button
              aria-label="Toggle theme"
              className="relative inline-flex items-center h-7 w-14 rounded-full bg-gray-200 dark:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500"
              onClick={handleThemeToggle}
            >
              <span
                className={`inline-block h-6 w-6 transform rounded-full bg-white shadow transition-transform duration-300 ${theme === "dark" ? "translate-x-7" : "translate-x-1"}`}
              />
            </button>
            <span className="text-gray-400">
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
