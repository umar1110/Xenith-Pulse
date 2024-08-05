import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./components/layouts/NavBar";
import Footer from "./components/layouts/Footer";
import { Toaster } from "@/components/ui/toaster"
 
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Xenith Pulse",
  description: "At XenithPulse, we are passionate about helping businesses reach their full potential through innovative and strategic marketing solutions. Our team of experienced professionals is dedicated to delivering exceptional results tailored to your unique needs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
     
      <body className={inter.className} style={{backgroundColor:"black"}}>
        <NavBar />
       <main  className="max-w-screen  overflow-hidden">
       {children}
       </main>
       <Toaster />
       <Footer/>
      </body>
    </html>
  );
}
