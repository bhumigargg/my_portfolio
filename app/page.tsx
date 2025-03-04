import Link from 'next/link';
import StopMotion from './components/StopMotion';
import AnimatedText from './components/AnimatedText';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Head from 'next/head';

export default function Home() {
  return (
    <>
    <Head>
      <title>Bhumi's Portfolio</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main>
      <div className="bg-[#FEF5DC] min-h-screen min-w-screen relative">
        <Link href="#about">
          <div className="text-[#1E1E1E] font-handwritten absolute w-[219px] h-[59px] left-0 top-[32px] text-[32px] leading-[122.25%] mx-[125px] hover:text-amber-700 cursor-pointer active:scale-95">
            ABOUT
          </div>
        </Link>
        <Link href="#projects">
          <div className="text-[#1E1E1E] font-handwritten absolute w-[219px] h-[59px] left-0 top-[76px] text-[32px] leading-[122.25%] mx-[125px] hover:text-amber-700 cursor-pointer active:scale-95">
            PROJECTS
          </div>
        </Link>
        <Link href="#contact">
          <div className="text-[#1E1E1E] font-handwritten absolute w-[219px] h-[59px] left-0 top-[120px] text-[32px] leading-[122.25%] mx-[125px] hover:text-amber-700 cursor-pointer active:scale-95">
            CONTACT ME
          </div>
        </Link>
        <Link href="https://drive.google.com/file/d/160YFwVBf9pD63v2peT3Vf_WAIo8_6twb/view?usp=sharing">
        <div className="absolute w-[125px] h-[50px] left-[1184.5px] top-[40px] border border-black shadow-[10px_11px_4px_rgba(0,0,0,0.1)] active:scale-95">
          <div className="absolute w-[125px] h-[55px] left-0 top-0 flex items-center justify-center text-center font-handwritten text-[32px] leading-[59px] text-[#1E1E1E] hover:text-amber-700 cursor-pointer">RESUME</div>
        </div>
        </Link>
        <StopMotion />
        <AnimatedText />
        <div className="absolute bottom-0 w-full text-right px-6 font-sans text-[32px] leading-[59px] text-[#1E1E1E] mb-4">
          I design and develop
        </div>
      </div>
      <div id="about" className="bg-[#FEF5DC]">
        <About />
      </div>
      <div id="projects" className="bg-[#FEF5DC]">
        <Projects />
      </div>
      <div id="contact" className="bg-[#FEF5DC]">
        <Contact />
      </div>
    </main>
    </>
  );
}