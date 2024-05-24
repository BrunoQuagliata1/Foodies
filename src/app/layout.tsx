import type { Metadata } from "next";
import { Inter, Josefin_Sans, League_Spartan } from "next/font/google";
import "./globals.css"; // Ensure you have a global CSS import

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const josefinSans = Josefin_Sans({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-josefin",
});
const leagueSpartan = League_Spartan({
  weight: "800",
  subsets: ["latin"],
  variable: "--font-league-spartan",
});

export const metadata: Metadata = {
  title: "Foodies By You",
  description: "Revolving around food, we are a community of foodies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${josefinSans.variable} ${leagueSpartan.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
