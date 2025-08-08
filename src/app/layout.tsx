import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/utils/cn";
import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Toaster } from "react-hot-toast";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8fafc" },
    { media: "(prefers-color-scheme: dark)", color: "#0f172a" },
  ],
};

export const metadata: Metadata = {
  title: {
    default: "Intellix",
    template: `%s | Intellix`,
  },
  description: "Intellix",
  keywords: [
    "Next.js",
    "Nextjs 15",
    "React",
    "Tailwind CSS",
    "Server Components",
    "Modern UI",
    "Glassmorphism",
    "Supabase Auth",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body 
        className={cn(
          inter.variable,
          jetbrainsMono.variable,
          "min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900 text-slate-900 dark:text-slate-100 antialiased"
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative min-h-screen overflow-hidden">
            {/* Background gradient elements */}
            <div className="absolute inset-0 -z-10">
              <div className="absolute -top-40 -left-40 w-96 h-96 bg-indigo-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-20 dark:opacity-10 animate-blob"></div>
              <div className="absolute top-40 -right-40 w-96 h-96 bg-fuchsia-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-20 dark:opacity-10 animate-blob animation-delay-2000"></div>
              <div className="absolute -bottom-40 left-1/4 w-96 h-96 bg-amber-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-20 dark:opacity-10 animate-blob animation-delay-4000"></div>
            </div>

            <main className="relative z-10">
              {children}
            </main>
          </div>
        </ThemeProvider>

        <Toaster 
          position="top-center" 
          toastOptions={{
            className: '!bg-white/80 dark:!bg-slate-800/80 backdrop-blur-md border border-slate-200/80 dark:border-slate-700/50',
            duration: 3000,
          }}
        />
      </body>
    </html>
  );
}
