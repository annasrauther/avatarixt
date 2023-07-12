import './globals.css';
import 'normalize.css';

import { Montserrat } from 'next/font/google';

const mont = Montserrat({ subsets: ['latin'] });

export const metadata = {
  title: 'Avatarixt',
  description: 'Generated Random Avatars powered by Bigheads.io',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={mont.className}>{children}</body>
    </html>
  );
}
