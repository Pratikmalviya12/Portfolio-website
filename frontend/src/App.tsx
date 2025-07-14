import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Header, Footer } from './components/ui';
import { Hero, About, Projects, Skills, Experience, Contact } from './components/sections';
import { MatrixBackground } from './components/effects';

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-background-dark text-white relative overflow-hidden">
        <MatrixBackground />
        <Header />
        <main className="relative z-10">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
