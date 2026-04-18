import { Poppins, Anta } from "next/font/google";
import "./globals.css";

const poppins= Poppins({
  variable: "--font-poppins-sans",
  subsets: ["latin"],
});

const anta= Anta({
  variable: "--font-anta",
  subsets: ["latin"],
});

export const metadata = {
  title: "M7 InformaticaRP",
  description: "M7 InformaticaRP - Site Oficial",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
