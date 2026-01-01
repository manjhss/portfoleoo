import type { Metadata } from "next";
import { Fuzzy_Bubbles } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const FuzzyBubbles = Fuzzy_Bubbles({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Surendra Manjhi | @manjhss",
  description:
    "a full-stack developer and curious learner. i vibe code responsibly — learn deeply first, then build with intuition.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={FuzzyBubbles.variable} suppressHydrationWarning>
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
