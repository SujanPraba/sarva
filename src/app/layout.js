import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sarva",
  description: "The Digital Marketing Platform",
  icons:{
    icon:['/favicon.ico?v=4'],
    apple:['/apple-touch-icon?v=4'],
    shortcut:['/apple-touch-icon'],
  }
  // ima
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
