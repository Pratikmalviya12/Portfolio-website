// src/components/layout/Layout.tsx
import React from 'react';
import { Header } from '../ui/Header';
import { Footer } from '../ui/Footer';
import { Contact } from '../sections/Contact';
import { SubtleBackground, ParticleSystem } from '../effects';

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
    <div className="min-h-screen bg-white dark:bg-primary-900 text-primary-900 dark:text-primary-50 relative overflow-x-hidden transition-colors duration-300">
      <ParticleSystem />
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
