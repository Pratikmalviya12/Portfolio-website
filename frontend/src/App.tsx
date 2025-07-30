import React from "react";
import { ThemeProvider } from "./contexts/ThemeContext";
import { Layout } from "./components/layout";
import {
  Hero,
  About,
  Skills,
  Projects,
  Experience,
  Contact,
} from "./components/sections";
import { ScrollToTop } from "./components/ui";
import { portfolioData } from "./data";

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <Layout backgroundVariant="particles" showContact={false}>
        {/* Hero Section */}
        <section id="home" className="min-h-screen">
          <Hero
            name={portfolioData.personal.name}
            title={portfolioData.personal.title}
            description={portfolioData.personal.description}
          />
        </section>

        {/* About Section */}
        <section id="about" className="min-h-screen pt-5">
          <About
            name={portfolioData.personal.name}
            title={portfolioData.personal.title}
            description={portfolioData.personal.bio}
            resumeUrl={portfolioData.personal.resume}
          />
        </section>

        {/* Skills Section */}
        <section id="skills" className="min-h-screen pt-5">
          <Skills />
        </section>

        {/* Projects Section */}
        <section id="projects" className="min-h-screen pt-5">
          <Projects />
        </section>

        {/* Experience Section */}
        <section id="experience" className="min-h-screen pt-5">
          <Experience />
        </section>

        {/* Contact Section */}
        <section id="contact" className="min-h-screen pt-5">
          <Contact
            email={portfolioData.personal.email}
            phone={portfolioData.personal.phone}
            location={portfolioData.personal.location}
          />
        </section>

        {/* Scroll to Top Button */}
        <ScrollToTop />
      </Layout>
    </ThemeProvider>
  );
};

export default App;
