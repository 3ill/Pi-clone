import type { Metadata } from 'next';
import './globals.css';

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
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
