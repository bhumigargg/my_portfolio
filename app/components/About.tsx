
"use client";

import ScrollVideo from "./ScrollVideo";

export default function About() {
  return (
    <main className="bg-[#FEF5DC] min-h-screen p-8">
       
      <div className="w-full text-center font-handwritten text-[113.085px] leading-[138px] text-[#47352C] mb-8">
        ABOUT
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center relative">
        <div className="w-full md:w-1/2 p-4 order-2 md:order-1 relative z-10">
          <div className="font-handwritten text-[32px] leading-[40px] text-[#47352C] break-words bg-[#FEF5DC]">
            Hi there! I’m
            Bhumi Garg
            , an undergraduate engineering student from{" "}
            <strong>Indian Institute of Technology, Patna</strong>. A Web Developer, UI/UX Designer, and Graphic Designer dedicated to crafting digital experiences that are not only functional but also visually compelling.
          </div>
        </div>


        {/* Video Section */}
        <ScrollVideo />
      </div>
      <div className="mt-16 bg-[#FEF5DC]">
        <h1 className="text-center font-handwritten text-[113.085px] leading-[100px] text-[#47352C] mb-8">
          SKILLS
        </h1>
        <div className="flex flex-col md:flex-row items-center justify-center">
  <div className="w-full md:w-1/2 p-4 order-2 md:order-1 relative z-10">
    <div className="font-handwritten text-[32px] leading-[40px] text-[#47352C] break-words bg-[#FEF5DC] flex justify-between">
      <span><strong>DEVELOPMENT</strong></span>
      <span>HTML, CSS, JAVASCRIPT, TYPESCRIPT, REACT</span>
    </div>
    <div className="font-handwritten text-[32px] leading-[40px] text-[#47352C] break-words bg-[#FEF5DC] py-10 flex justify-between">
      <span ><strong>DESIGN</strong></span>
      <span className="ml-50">FIGMA, PHOTOSHOP</span>
    </div>
  </div>
</div>

      </div>
    </main>
  );
}
