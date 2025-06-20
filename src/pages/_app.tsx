// src/pages/_app.tsx
import type { AppProps } from 'next/app';
import '@/styles/globals.css';

import '../i18n';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="min-h-screen bg-gray-600 dark:bg-gray-900 flex flex-col">
      <main className="flex-grow">
        <Component {...pageProps} />
      </main>
    </div>
  );
}
