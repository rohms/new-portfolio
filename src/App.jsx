import "./App.css";
import React, { useMemo } from "react";
import { Navbar } from "./components/Navbar";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

const App = () => {
  return (
    <>
      <main className="app">
        <Navbar />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export { App };
