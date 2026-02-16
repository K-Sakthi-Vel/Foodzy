import React from 'react';
import Navbar from './ui/Navbar';
import TopHeader from './ui/TopHeader';
import Footer from './ui/Footer';

type Props = { children: React.ReactNode };

export default function Layout({ children }: Props) {
  return (
    <div className=" flex flex-col">
      <div className="w-full bg-violet-600 text-white text-center py-1 fixed top-0 left-0 right-0 z-50">
        Built With ❤️ By Sakthi
      </div>
      <Navbar />
      <TopHeader />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
