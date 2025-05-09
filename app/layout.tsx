import type { Metadata } from "next";
import { Poppins, Sofia_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Footer from "@/components/Footer";
import { Toaster } from "sonner";

const sofia_sans = Sofia_Sans({
  variable: "--font-serif",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-sans",
  weight : ["400","500","600","700","800"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      
        <body
        className={`${poppins.variable} ${sofia_sans.variable} font-sans antialiased `}
      >
        <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      
      >
        {children}
        <Footer />
        <Toaster />
      </ThemeProvider>
        
      </body>

      
      
    </html>
  );
}
