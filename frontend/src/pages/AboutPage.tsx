// src/pages/AboutPage.tsx
import React from 'react';
import { About } from '../components/sections/About';
import { Layout } from '../components/layout';
import { portfolioData } from '../data';

export const AboutPage: React.FC = () => {
  return (
    <Layout backgroundVariant="particles">
      <div className="pt-20">
        <About 
          name={portfolioData.personal.name}
          title={portfolioData.personal.title}
          description={portfolioData.personal.bio}
          email={portfolioData.personal.email}
          location={portfolioData.personal.location}
          resumeUrl={portfolioData.personal.resume}
        />
      </div>
    </Layout>
  );
};
