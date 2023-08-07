import { Metadata } from 'next';
// Import the font from Google Fonts
import { IBM_Plex_Sans_Condensed } from 'next/font/google';

// Import the React Icons
import { FcPortraitMode } from 'react-icons/fc';

// Import the global styles.
import 'normalize.css';
import styles from './globals.module.css';
import Footer from '@/components/footer/Footer';

/**
 * Font options for IBM Plex Sans Condensed.
 */
const ibm_plex_sans_condensed = IBM_Plex_Sans_Condensed({
  subsets: ['latin'],
  weight: [
    '100',
    '200',
    '300',
    '400',
    '500',
    '600',
    '700',
  ],
});

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
      <body role="application" className={`${ibm_plex_sans_condensed.className} ${styles.app}`}>
        <header>
          <h1 className={styles.logo}><FcPortraitMode /> {title}</h1>
          <h2 className={styles.title}>Customize Your Avatar</h2>
        </header>
        <main>{children}</main>
        <Footer description={description} githubLink={'https://github.com/annasrauther/avatarixt'} />
      </body>
    </html>
  );
}
