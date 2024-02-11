import React from 'react';
import Head from 'next/head';
import { Metadata } from 'next';

import "./globals.css";
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';

export const metadata: Metadata = {
  title: "KingCoffee",
  description: "King Coffee, uma cafeteria feita para você",
  keywords: "café, cafeteria, KingCoffee",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/png" href="./logo.png" />
        {metadata.description && typeof metadata.description === 'string' && (
          <meta name="description" content={metadata.description} />
        )}

      </Head>

      <body>
        <main>
          <Navbar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
