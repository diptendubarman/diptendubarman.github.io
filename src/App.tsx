import Hero from "~/components/sections/Hero";
import About from "~/components/sections/About";
import Skills from "~/components/sections/Skills";
import Experience from "~/components/sections/Experience";
import Projects from "~/components/sections/Projects";
import Leadership from "~/components/sections/Leadership";
import Contact from "~/components/sections/Contact";
import Header from "~/components/layout/Header";
import Footer from "~/components/layout/Footer";
import { Toaster } from "sonner";
import "~/App.css";

function App() {
  return (
    <div className="App min-h-screen bg-background text-foreground">
      <Header />

      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Leadership />
        <Contact />
      </main>

      <Footer />
      <Toaster position="top-right" />
    </div>
  );
}

export default App;
