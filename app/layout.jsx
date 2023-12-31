import { Inter } from "next/font/google";
import ToasterContext from "./context/ToasterContext";
import "./global.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Full Stack Authorized App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        <ToasterContext />
        {children}
      </body>
    </html>
  );
}
