import './globals.css';
import type { ReactNode } from 'react';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="bg-black overflow-x-hidden">
        <main>
          <div className="content-container">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
