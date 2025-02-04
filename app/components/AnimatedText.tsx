"use client";

import { useEffect, useState } from "react";

export default function AnimatedText() {
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const fullText = "welcome to my creative side :)";
  const initialText = "hi! I am Bhumi Garg";

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (isTyping) {
      timer = setInterval(() => {
        setDisplayedText((prev) => prev + fullText[currentIndex]); // Append the next letter
        setCurrentIndex((prevIndex) => {
          if (prevIndex + 1 === fullText.length) {
            clearInterval(timer);
            setTimeout(() => {
              setIsTyping(false);
              setDisplayedText(""); // Clear text before restarting
              setCurrentIndex(0);
            }, 2000); // Pause before clearing text
            return prevIndex;
          }
          return prevIndex + 1;
        });
      }, 70); // Adjust the typing speed
    } else {
      setDisplayedText(initialText);
      setTimeout(() => {
        setIsTyping(true);
        setDisplayedText("");
        setCurrentIndex(0);
      }, 3000); // Pause before restarting the typing effect
    }

    return () => clearInterval(timer);
  }, [isTyping, currentIndex]); // Add `currentIndex` as a dependency to update properly

  return (
    <div className="absolute w-[700px] h-[244px] left-[450px] top-[250px] flex items-center justify-center text-center font-handwritten text-[70px] leading-[1.2] text-[#47352C]">
      {displayedText}
    </div>
  );
}
