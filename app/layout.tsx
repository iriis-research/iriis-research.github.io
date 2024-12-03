import type { Metadata } from "next";
import NavBar from "../components/NavBar/NavBar";
import Footer from '../components/Footer/Footer';
import { ThemeProvider } from "@/components/theme/theme-provider";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "IRIIS - Homepage",
  description: "Institute for Research and Innovation in Intelligent Systems",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
       <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          > 
          <NavBar />  
            {children}
            <Footer />
        </ThemeProvider> 
      </body>
    </html>
  );
}
