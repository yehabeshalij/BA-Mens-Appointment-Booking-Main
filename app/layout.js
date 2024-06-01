import { Outfit } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header";
import Footer from "./_components/Footer";
import { Toaster } from "sonner";
import { ScrollArea } from "../components/ui/scroll-area";
import { CategoryProvider } from "../context/CategoryContext";
// import { ScrollArea } from "@/components/ui/scroll-area";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "ቢኤ የወንዶች የውበት ሳሎን",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={outfit.className}>
        <CategoryProvider>
          <div className="md:px-20">
            <Header />
            {/* <Service /> */}
            {children}
            <Toaster richColors />
            <ScrollArea />
          </div>
        </CategoryProvider>

        <Footer />
      </body>
    </html>
  );
}
