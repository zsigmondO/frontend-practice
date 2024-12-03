import { ReactNode } from 'react';

import Header from '../Header/Header';
import { Footer } from '../Footer/Footer';

type LayoutProps = { children?: ReactNode };

export function Layout({ children }: LayoutProps) {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </div>
    </>
  );
}
