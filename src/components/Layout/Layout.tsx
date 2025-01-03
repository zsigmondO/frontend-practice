import { ReactNode } from 'react';

import Header from '../Header/Header';
import { Footer } from '../Footer/Footer';

type LayoutProps = { children?: ReactNode };

export function Layout({ children }: LayoutProps) {
  return (
    <>
      <div className="flex flex-col min-h-screen bg-gray-200">
        <Header />
        <main className="flex-grow my-3">{children}</main>
        <Footer />
      </div>
    </>
  );
}
