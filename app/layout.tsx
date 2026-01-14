import type { Metadata } from "next";
import localFont from "next/font/local";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const lotion = localFont({
  src: [
    {
      path: "./fonts/Lotion-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Lotion-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/Lotion-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-lotion",
});

export const metadata: Metadata = {
  title: "Surendra Manjhi | @manjhss",
  description: "A Full-Stack Web Developer and OSS Contributor",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${lotion.variable}`} suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
