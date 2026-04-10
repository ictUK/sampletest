import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import { Providers } from "./providers";
import "./globals.css";

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  display: "swap",
});

const themeInitScript = `
(function(){
  try {
    var stored = localStorage.getItem('xpeer-theme');
    var theme = stored || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('xpeer-theme', theme);
  } catch (e) {}
})();
`;

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"
  ),
  title: "XPEER AI | AI-native software testing",
  description:
    "Stop finding bugs. Start preventing them before production with autonomous, AI-powered test generation and execution.",
  openGraph: {
    title: "XPEER AI",
    description: "AI-native quality engineering for modern product teams.",
    siteName: "XPEER.AI",
    images: [
      {
        url: "/xpeer.ai logo.webp",
        width: 1200,
        height: 630,
        alt: "XPEER AI Logo",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${raleway.variable} h-full scroll-smooth antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="min-h-full flex flex-col bg-slate-50 font-sans text-slate-900 dark:bg-[#020617] dark:text-white">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
