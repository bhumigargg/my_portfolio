"use client";

export default function Contact() {
  return (
    <section className="bg-[#FEF5DC] p-8">
      <h2 className="text-center font-handwritten text-[80px] leading-[100px] text-[#47352C] mb-8">
        CONTACT ME
      </h2>
      <div className="flex flex-col items-center justify-center">
        <div className="w-full max-w-lg mb-8 border border-double border-amber-950 rounded-lg p-6">
          <h3 className="text-[#47352C] text-[24px] font-bold mb-4">Get in Touch</h3>
          <p className="text-[#47352C] text-[20px] mb-2">
            <strong>Email:</strong> <a href="mailto:bhumigarg012@gmail.com" className="text-[#47352C] hover:text-amber-700">bhumigarg012@gmail.com</a>
          </p>
          <p className="text-[#47352C] text-[20px] mb-2">
            <strong>Instagram:</strong> <a href="https://www.instagram.com/bhumigargg" target="_blank" rel="noopener noreferrer" className="text-[#47352C] hover:text-amber-700">Bhumi Garg</a>
          </p>
        </div>
      </div>
    </section>
  );
}