// src/pages/ProjectsPage.tsx
import React from 'react';
import { Projects } from '../components/sections/Projects';
import { Layout } from '../components/layout';

export const ProjectsPage: React.FC = () => {
  return (
    <Layout backgroundVariant="particles">
      <div className="pt-20">
        <Projects />
      </div>
    </Layout>
  );
};
