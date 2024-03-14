import { Inter } from "next/font/google";
import 'primeicons/primeicons.css';
import { PrimeReactProvider } from 'primereact/api';
import Tailwind from 'primereact/passthrough/tailwind';
import "primereact/resources/themes/fluent-light/theme.css";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sharva",
  description: "Sharva",
};

export default function RootLayout({ children }) {
  const value = {
    ripple: true,
    pt:Tailwind
};
  return (
    <html lang="en">
      <PrimeReactProvider value={value}>
      <body className={inter.className}>{children}</body>
      </PrimeReactProvider>
    </html>
  );
}
