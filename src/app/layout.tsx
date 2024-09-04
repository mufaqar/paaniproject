import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";


export const metadata: Metadata = {
  title: "Paani | Changing the world through water",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-mainBg">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
