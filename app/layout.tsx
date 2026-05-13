import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={` h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="w-full h-full flex flex-col flex-1">
            <HeroSection />
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
