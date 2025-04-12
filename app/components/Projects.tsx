"use client";

export default function Projects() {
    return (
        <section className="bg-[#FEF5DC] p-8">
            <h2 className="text-center font-handwritten text-[80px] leading-[100px] text-[#47352C] mb-8">
                PROJECTS
            </h2>
            <div className="flex flex-wrap justify-center font-handwritten text-xl">
                <a  target="_blank" rel="noopener noreferrer" className="m-4 p-4 bg-white shadow-lg rounded-lg text-center w-full md:w-1/3 hover:shadow-xl transition-shadow duration-300 custom-cursor">
                    <h3 className="font-bold text-[24px] text-[#47352C]">My Portfolio Website</h3>
                    <img src="/images/Project1.png" alt="Project 1" className="w-full h-auto rounded-lg mb-4" />
                    <p className="text-[20px] text-black"> This is my personal portfolio website where I showcase my skills, projects, and experience. Built with modern web technologies like React and Next.js, it features a clean and responsive design, smooth animations, and an intuitive user interface. The website serves as a platform to highlight my work and connect with potential clients and employers.</p>
                </a>
                <a href="https://drive.google.com/file/d/166kQouYSRZdlQvK0OfccbC4Cp6fcTgif/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="m-4 p-4 bg-white shadow-lg rounded-lg text-center w-full md:w-1/3 hover:shadow-xl transition-shadow duration-300">
                    <h3 className="font-bold text-[24px] text-[#47352C]">A New Dawn</h3>
                    <img src="/images/Project2.jpg" alt="Project 2" className="w-full h-auto rounded-lg mb-4" />
                    <p className="text-[20px] text-black"> I secured 5th position in Inter IIT Cult 7.0 in Graphic Designing with this project. It was solely made using Photoshop, showcasing my skills in graphic design and creativity.</p>
                </a>
                <a href="https://drive.google.com/file/d/1Ss4YeOTO1FcKETk0pHeV3rv6xPv6hfIx/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="m-4 p-4 bg-white shadow-lg rounded-lg text-center w-full md:w-1/3 hover:shadow-xl transition-shadow duration-300">
                    <h3 className="font-bold text-[24px] text-[#47352C]">Product Branding</h3>
                    <img src="/images/Project3.png" alt="Project 3" className="w-full h-auto rounded-lg mb-4" />
                    <p className="text-[20px] text-black"> Secured 1st position in Inter IIT Cult 7.0 in Product Brandathon. A packaging brand which is sustainaBle and meets the needs of future.</p>
                </a>
            
            </div>
        </section>
    );
}
