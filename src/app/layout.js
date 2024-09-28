import "./globals.css";
import { Fredoka } from "next/font/google";

const fredoka = Fredoka({ subsets: ["latin"] });

export const metadata = {
  title: `James' Blog`,
  description: "The best blog app!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={fredoka.className}>
        <div className="container">
          <div className="wrapper">{children}</div>
        </div>
      </body>
    </html>
  );
}
