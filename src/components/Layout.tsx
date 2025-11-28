import React from 'react';
import Navbar from './ui/Navbar';
import TopHeader from './ui/TopHeader';
import Footer from './ui/Footer';

type Props = { children: React.ReactNode };

export default function Layout({ children }: Props) {
  return (
    <div className=" flex flex-col">
      <Navbar />
      <TopHeader />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
