import { Geist, Geist_Mono } from "next/font/google";

import { Header } from "./header"
import { Footer } from "./footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

type LayoutProps = {
  children: React.ReactNode
}

export const Layout = ({children}: LayoutProps) => {
  return (
    <div className={`relative flex min-h-screen flex-col dark ${geistSans.className} ${geistMono.className}`}>
      <Header/>
      <main className="container flex-1 mt-10 flex flex-col mb-12">
        {children}
      </main>
      <Footer/>
    </div>
  );
};
