// src/pages/HomePage.tsx
import React from 'react';
import { Hero } from '../components/sections/Hero';
import { Layout } from '../components/layout';
import { portfolioData } from '../data';

export const HomePage: React.FC = () => {
  return (
    <Layout backgroundVariant="particles">
      <Hero 
        name={portfolioData.personal.name}
        title={portfolioData.personal.title}
        description={portfolioData.personal.description}
      />
    </Layout>
  );
};
