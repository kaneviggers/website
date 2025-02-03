import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";
import { Menu } from "@/components/menu";
import { PasswordPage } from "@/components/password_page";
import "dotenv/config";
import { Footer } from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Preview",
  description: "Kane Viggers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  console.log("NEXT_PUBLIC_IS_PREVIEW:", process.env.NEXT_PUBLIC_IS_PREVIEW);

  return (
    <html lang="en" className="h-full">
      <body
        className={`${geistSans.variable} ${geistMono.variable} h-full flex flex-col antialiased`}
      >
        {process.env.NEXT_PUBLIC_IS_PREVIEW! == "true" ? (
          <PasswordPage>{children}</PasswordPage>
        ) : (
          <>
            <Menu />
            <main className="flex-1">{children}</main>
            <Footer />
          </>
        )}
        <Toaster />
      </body>
    </html>
  );
}
