// src/components/layout/Layout.tsx
import React from 'react';
import { Header } from '../ui/Header';
import { Footer } from '../ui/Footer';
import { Contact } from '../sections/Contact';
import { SubtleBackground } from '../effects/SubtleBackground';

interface LayoutProps {
  children: React.ReactNode;
  showContact?: boolean;
  backgroundVariant?: 'gradient' | 'particles' | 'waves' | 'geometric' | 'neural';
}

export const Layout: React.FC<LayoutProps> = ({ 
  children, 
  showContact = true, 
  backgroundVariant 
}) => {
  return (
    <div className="min-h-screen bg-background-dark text-white relative overflow-x-hidden">
      <SubtleBackground variant={backgroundVariant} />
      <Header />
      
      <main className="relative z-10">
        {children}
      </main>
      
      {showContact && (
        <section className="relative z-10">
          <Contact />
        </section>
      )}
      
      <Footer />
    </div>
  );
};
