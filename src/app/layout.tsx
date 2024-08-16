import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Image from 'next/image';
import { Instagram } from 'react-feather';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Zee's Pizzeria",
  description: "Website for Zee's Pizzeria New Orleans",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <header>
        <Image src="/zeesLogoRedWhite.png" alt="Zee's Logo" width="80" height="50" />
      </header>
      {children}
      <footer>
        <p>
          <strong>3914 Baronne Street, New Orleans LA 70115</strong>
        </p>
        <br />
        <a href='https://www.instagram.com/zeespizzeria'>
          <Instagram />
        </a>
      </footer>
      </body>
    </html>
  );
}
