// src/pages/ExperiencePage.tsx
import React from 'react';
import { ExperienceSection } from '../components/sections/Experience';
import { Layout } from '../components/layout';

export const ExperiencePage: React.FC = () => {
  return (
    <Layout backgroundVariant="particles">
      <div className="pt-20">
        <ExperienceSection />
      </div>
    </Layout>
  );
};
