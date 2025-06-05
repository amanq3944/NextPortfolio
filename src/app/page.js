import Head from '@/app/head/page'
import About from '@/app/about/page'
import Skills from './skills/page';
import Certifications from './certifications/page';
import Projects from './projects/page';
import Contact from './contact/page';
import Footer from './footer/page';
import Navbar from '@/app/navbar/page';

export default function Home() {
  return (
    <>
      <Navbar />
      <Head />
      <About />
      <Skills />
      <Certifications />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}