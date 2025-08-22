import type { Metadata } from "next";
import { Geist, Geist_Mono, MuseoModerno, Poppins, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import FooterSection from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--poppins",
  subsets: ["latin"],
  weight: ["100" , "200" , "300" , "400" , "500" , "600" , "700" , "800" , "900"],
  
});

const sourcesans3 = Source_Sans_3({
  variable: "--sourcesans3",
  subsets: ["latin"],
  weight: ["200" , "300" , "400" , "500" , "600" , "700" , "800" , "900"],
});

const museomoderno = MuseoModerno({
  variable: "--museomoderno",
  subsets: ["latin"],
  weight: ["100" , "200" , "300" , "400" , "500" , "600" , "700" , "800" , "900"],
});

export const metadata: Metadata = {
  title: "KOSEG Béton Précontraint",
  description: "Solutions techniques et prestations de post-tension pour projets de construction en Côte d’Ivoire.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} ${sourcesans3.variable} ${museomoderno.variable} antialiased`}
      >
        <div className="max-w-screen-2xl font-sourcesans3 mx-auto">
            <Navbar />
             {children}
             {/* <Footer /> */}
             <FooterSection />
        </div>
      </body>
    </html>
  );
}
