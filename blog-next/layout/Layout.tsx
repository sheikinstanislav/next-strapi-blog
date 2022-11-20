import Head from 'next/head';
import { FC } from 'react';
import { Footer } from '../components/Footer';
import { Navbar } from '../components/Navbar';

interface ILayoutProps {
  children: React.ReactNode;
}

export const Layout: FC<ILayoutProps> = ({ children, ...customMeta }) => {
  const meta = {
    title: 'Next-Blog',
    description: `Blog`,
    ...customMeta,
  };

  return (
    <div className="template-wrapper">
      <div className="template-wrapper-inner">
        <Head>
          <title>{meta.title}</title>
          <meta name="robots" content="follow, index" />
          <meta content={meta.description} name="description" />
        </Head>
        <div>
          <Navbar />
          {children}
        </div>
      </div>
      <Footer />
    </div>
  );
};
