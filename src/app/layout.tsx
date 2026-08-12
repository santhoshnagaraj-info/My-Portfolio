import type { Metadata } from "next";
import "./globals.css";
import Header from "@/modules/header/Header";
import Footer from "@/modules/footer/Footer";

export const metadata: Metadata = {
  title: "Santhosh Nagaraj | Full Stack Developer | Software Developer Engineer",
  description: "Full Stack Developer specializing in Node.js, Next.js, MongoDB and scalable web applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
