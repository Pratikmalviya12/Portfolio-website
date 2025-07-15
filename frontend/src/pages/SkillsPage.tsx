// src/pages/SkillsPage.tsx
import React from 'react';
import { Skills } from '../components/sections/Skills';
import { Layout } from '../components/layout';

export const SkillsPage: React.FC = () => {
  return (
    <Layout backgroundVariant="particles">
      <div className="pt-20">
        <Skills />
      </div>
    </Layout>
  );
};
