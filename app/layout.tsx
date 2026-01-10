import type { Metadata } from "next";
import { Red_Hat_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import { portfolioData } from "@/data/portfolio";

const RedHatMono = Red_Hat_Mono({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Surendra Manjhi | @manjhss",
  description: portfolioData.profile.bio,
  openGraph: {
    title: "Surendra Manjhi | @manjhss",
    description: portfolioData.profile.bio,
    images: [
      {
        url: "/open-graph-image.png",
        width: 1200,
        height: 630,
        alt: "Surendra Manjhi's Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Surendra Manjhi | @manjhss",
    description: portfolioData.profile.bio,
    images: ["/open-graph-image.png"],
    creator: "@manjhss",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={RedHatMono.variable} suppressHydrationWarning>
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
