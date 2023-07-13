import 'normalize.css';
import styles from './globals.module.css';

import { Montserrat } from 'next/font/google';

const mont = Montserrat({ subsets: ['latin'] });

export const metadata = {
  title: 'Avatarixt',
  description: 'Generated Random Avatars powered by Bigheads.io',
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
          <h2 className={styles.logo}>{metadata.title}</h2>
        </header>
        <main>{children}</main>
        <footer>
          <p>{metadata.description}</p>
        </footer>
      </body>
    </html>

  );
}
