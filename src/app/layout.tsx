import 'normalize.css';
import styles from './globals.module.css';

import { Montserrat } from 'next/font/google';

const mont = Montserrat({ subsets: ['latin'] });

export const metadata = {
  title: 'Avatarixt',
  description: 'Generate Random Avatars, powered by Bigheads.io',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body role="application" className={`${mont.className} ${styles.app}`}>
        <header>
          <h1 className={styles.logo}>{metadata.title}</h1>
          <h2 className={styles.title}>Customize Your Avatar</h2>
        </header>
        <main>{children}</main>
        <footer className={styles.footer}>
          <p>{metadata.description}</p>
        </footer>
      </body>
    </html>

  );
}
