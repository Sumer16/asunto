import '@radix-ui/themes/styles.css';
import './theme-config.css';
import './globals.css';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Theme } from '@radix-ui/themes';

import NavBar from './NavBar';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
 });

export const metadata: Metadata = {
  title: 'Asunto | Issue Tracker',
  description: 'Asunto is an issue tracker application developed using NextJS 13, MySQL, Prisma, TailwindCSS and RadixUI.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <link rel='icon' href='/favicon.ico' type='image/x-icon' sizes='any' />
      <body className={inter.variable}>
        <Theme accentColor='violet'>
          <NavBar />
          <main className='p-5'>
            {children}
          </main>
        </Theme>
      </body>
    </html>
  )
}
