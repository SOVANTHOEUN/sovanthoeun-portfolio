import './globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from "src/6_shared/lib/theme-provider";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;