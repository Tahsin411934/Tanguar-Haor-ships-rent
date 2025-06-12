import Footer from "./components/shared/Footer/Footer";
import "./globals.css";
import { Inter } from "next/font/google";
import { SearchProvider } from "@/SearchContext";
import { PaginationProvider } from "@/services/tour/usePagination";
import BookMeHeader from "./components/shared/BookMeHeader/BookmeHeader";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Travel Tanguar",
  description: "Your travel companion",
};

export default function DashboardLayout({ children }) {
  return (
    <html lang="en" data-theme="white">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />

        {/* Meta tags for SEO */}
        <meta
          name="description"
          content="Discover Tanguar Haor the best way. Explore best houseboats and tour packages. Make hassle-free booking now!"
        />
        <meta
          name="keywords"
          content="Tanguar Haor, Best houseboat of Tanguar Haor, Best houseboat in Tanguar Haor, Luxury Houseboat, Tanguar haor houseboat price, টাঙ্গুয়ার হাওর, Bojra houseboat, Falcon houseboat, Sultan houseboat, Tanguar Haor boat rent, Tanguar haor tour package, Premium houseboat, বজরা হাউজবোট"
        />

        {/* Google Tag Manager */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=AW-16756605497"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-16756605497');
          `}
        </Script>
      </head>

      <body className={inter.className}>
        <PaginationProvider>
          <SearchProvider>
            <div className="bg-white">
              <main>
                <BookMeHeader />
                <div className="min-h-[100vh] py-[20px]">{children}</div>
                <Footer />
              </main>
            </div>
          </SearchProvider>
        </PaginationProvider>
      </body>
    </html>
  );
}
