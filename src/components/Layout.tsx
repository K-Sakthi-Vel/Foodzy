import React from 'react';
import Navbar from './ui/Navbar';
import TopHeader from './ui/TopHeader';
import Footer from './ui/Footer';

type Props = { children: React.ReactNode };

export default function Layout({ children }: Props) {
  return (
    <div className="min-h-screen min-w-screen flex flex-col">
      <Navbar />
      <TopHeader />
      <main className="flex-1 container">{children}</main>
      <Footer />
    </div>
  );
}
