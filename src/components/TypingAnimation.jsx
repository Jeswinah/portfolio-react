import React, { useEffect } from "react";

const TypingAnimation = () => {
  useEffect(() => {
    const textElement = document.querySelector(".sec-text");
    const texts = [ "Developer","Designer"];
    let currentTextIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    const typeEffect = () => {
      const currentText = texts[currentTextIndex];
      if (isDeleting) {
        charIndex--;
      } else {
        charIndex++;
      }

      textElement.textContent = currentText.slice(0, charIndex);

      if (!isDeleting && charIndex === currentText.length) {
        setTimeout(() => (isDeleting = true), 2000);
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        currentTextIndex = (currentTextIndex + 1) % texts.length;
      }

      const typingSpeed = isDeleting ? 100 : 300;
      setTimeout(typeEffect, typingSpeed);
    };

    typeEffect();
  }, []);

  return (
   
      <div className="w-full  overflow-hidden mb-3 text-center md:text-left py-2  my-2">
        <span className="text-black font-semibold text-xl md:text-3xl">I'm a Web </span>
        <span className="relative text-blue-900 font-semibold sec-text text-xl md:text-3xl"> </span>
      </div>

  );
};

export default TypingAnimation;
