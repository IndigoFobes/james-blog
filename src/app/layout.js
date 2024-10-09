import "./globals.css";
import { Afacad, Mate } from "next/font/google";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

const afacad = Afacad({ subsets: ["latin"], variable: "--font-afacad" });
const mate = Mate({
  subsets: ["latin"],
  weight: "400",
  style: "italic",
  variable: "--font-mate",
});

export const metadata = {
  title: `James Fobes Blog`,
  description: "The best blog app!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${afacad.variable} ${mate.variable}`}>
        <div className="container">
          <Navbar />
          <div className="wrapper">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
