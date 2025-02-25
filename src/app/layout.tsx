// src/app/layout.tsx
import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { ReactNode } from 'react';

export const metadata = {
  title: 'speedInfra',
  description: 'Plataforma de DevOps para provisionamento de ambientes',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="min-h-screen flex flex-col font-sans bg-gray-900 text-gray-200">        
        <Header />        
      
        <main className="flex-grow container mx-auto px-6 pt-20">
          {children}
        </main>
        
       
        <Footer />
      </body>
    </html>
  );
}
