import "./globals.css";
import { Fredoka } from "next/font/google";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

const fredoka = Fredoka({ subsets: ["latin"] });

export const metadata = {
  title: `James Fobes Blog`,
  description: "The best blog app!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={fredoka.className}>
        <div className="container">
          <Navbar />
          <div className="wrapper">
            {children}
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
