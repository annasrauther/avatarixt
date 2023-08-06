import { Metadata } from 'next';

// Import the font for the website.
import { Montserrat } from 'next/font/google';

// Import the global styles.
import 'normalize.css';
import styles from './globals.module.css';

/**
 * Font options for Montserrat.
 */
const mont = Montserrat({ subsets: ['latin'] });

/**
 * Metadata for the website.
 */
const title = 'Avatarixt';
const description = 'Generate Random Avatars, powered by Bigheads.io';
export const metadata: Metadata = {
  title: title,
  description: description,
  manifest: '/manifest.webmanifest',
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: 'https://avatarixt.vercel.app/',
    title: title,
    description: description,
    images: 'https://avatarixt.vercel.app/og.png',
  },
};

/**
 * The RootLayout Props.
 * @interface RootLayoutProps
 * @property {React.ReactNode} children The children to render.
 */
interface RootLayoutProps {
  children: React.ReactNode;
}

/**
 * The Root Layout component for the website.
 * @component
 * @param {RootLayoutProps} props - The component props.
 * @returns {React.JSX.Element} The rendered RootLayout component.
 */
export default function RootLayout({ children }: RootLayoutProps): React.JSX.Element {
  return (
    <html lang="en" suppressHydrationWarning>
      <body role="application" className={`${mont.className} ${styles.app}`}>
        <header>
          <h1 className={styles.logo}>{title}</h1>
          <h2 className={styles.title}>Customize Your Avatar</h2>
        </header>
        <main>{children}</main>
        <footer className={styles.footer}>
          <p>{description}</p>
        </footer>
      </body>
    </html>
  );
}
