import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';

export const metadata: Metadata = {
  title: 'Pi-Network',
  description: 'The First Digital Currency You Can Mine On Your Phone',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        style={{
          backgroundImage: `url('/background.png')`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          zIndex: -10,
        }}
      >
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
