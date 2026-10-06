import type { Metadata, Viewport } from "next";
import { Syne, DM_Sans, JetBrains_Mono } from "next/font/google";
import { SkipLink } from "@/components/SkipLink";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { MobileTopBar } from "@/components/MobileTopBar";
import { MobileTabBar } from "@/components/MobileTabBar";
import { MobileRouteSync } from "@/components/MobileRouteSync";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  ),
  title: {
    default: "Samundra Mahesh",
    template: "%s · Samundra Mahesh",
  },
  description:
    "Website & app design, creative services, and founder of Drone Hospital Nepal.",
  openGraph: {
    title: "Samundra Mahesh",
    description:
      "Website & app design, creative services, and founder of Drone Hospital Nepal.",
    images: [{ url: "/og/default.png", width: 1200, height: 630 }],
    type: "website",
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Samundra Mahesh",
  },
  formatDetection: {
    telephone: false,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#070b12",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${dmSans.variable} ${jetbrains.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-bg text-fg md:min-h-full">
        <MobileRouteSync />
        <SkipLink />
        <MobileTopBar />
        {/* Spacer for fixed mobile top bar */}
        <div
          className="shrink-0 md:hidden"
          style={{
            height:
              "calc(var(--app-header-h) + env(safe-area-inset-top, 0px))",
          }}
          aria-hidden
        />
        <SiteHeader />
        <div id="main" className="flex-1 md:overflow-visible">
          {children}
        </div>
        <SiteFooter />
        <MobileTabBar />
      </body>
    </html>
  );
}
