import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { UserProvider } from "@/context/user-context";

export const metadata: Metadata = {
  title: "HomeScout",
  description: "Find your Home without stress",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#F9FAFB]">
        <UserProvider>
          <div className="max-w-[1920px] mx-auto ">
            <Navbar />
            {children}
            <Footer />
          </div>
        </UserProvider>
      </body>
    </html>
  );
}
