import styled from '@emotion/styled';
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

  const TemplateWrapper = styled.div`
    overflow: hidden;
  `;
  const TemplateWrapperInner = styled.div`
    min-height: calc(100vh - 97px);
  `;

  return (
    <TemplateWrapper>
      <TemplateWrapperInner>
        <Head>
          <title>{meta.title}</title>
          <meta name="robots" content="follow, index" />
          <meta content={meta.description} name="description" />
        </Head>
        <div>
          <Navbar />
          {children}
        </div>
      </TemplateWrapperInner>
      <Footer />
    </TemplateWrapper>
  );
};
