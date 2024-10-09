import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MLSAxHacktoberfest 2024",
  description: "Registration form for Hacktoberfest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Toaster />
        <div className="min-h-screen text-white autofill:text-white bg-black">
          {children}
        </div>
      </body>
    </html>
  );
}
