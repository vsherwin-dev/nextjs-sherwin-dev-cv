import type { Metadata } from 'next';

import Layout from '@/components/Layout';

import '@/styles/globals.css';
import '@/styles/themes.css';

export const metadata: Metadata = {
  title: {
    default: 'sherwin-dev | Portfolio',
    template: 'sherwin-dev | %s',
  },
  description:
    'Neil Sherwin Velasquez — Shopify Developer and Web Developer from Nueva Ecija, Philippines. Specializing in Shopify, WordPress, and modern web development.',
  keywords: [
    'sherwin-dev',
    'neil sherwin velasquez',
    'web developer',
    'shopify developer',
    'shopify theme developer',
    'wordpress developer',
    'philippines',
  ],
};

const themeScript = `
  (function() {
    try {
      var theme = localStorage.getItem('theme');
      if (theme) {
        document.documentElement.setAttribute('data-theme', theme);
      } else if (window.matchMedia('(prefers-color-scheme: light)').matches) {
        document.documentElement.setAttribute('data-theme', 'github-light');
      } else {
        document.documentElement.setAttribute('data-theme', 'github-dark');
      }
    } catch (e) {}
  })();
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
