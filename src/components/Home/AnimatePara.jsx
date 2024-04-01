import React, { useState, useEffect } from "react";

const AnimatePara = () => {
  const [paragraphs, setParagraphs] = useState([
    "Congratulations! Ve**** has withdrawn a commission of $165.50",
    "Congratulations! User***lyn has withdrawn a commission of $102.42",
    "Congratulations! User****sde has withdrawn a commission of $187.20",
    "Congratulations! User****rew has withdrawn a commission of $250.0",
    "Congratulations! User****yas has withdrawn a commission of $105.30",
  ]);
  const [currentParagraphIndex, setCurrentParagraphIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentParagraphIndex(
        (prevIndex) => (prevIndex + 1) % paragraphs.length
      );
    }, 7000); // Change paragraph every 1 second

    return () => clearTimeout(timer);
  }, [currentParagraphIndex, paragraphs.length]);

  return (
    <div className="relative w-full mt-4  flex items-center justify-center">
      {paragraphs.map((paragraph, index) => (
        <p
          key={index}
          className={`absolute bg-indigo-200 top-0 left-0 w-full text-center transition-opacity duration-1000  rounded-lg text-black py-4 px-2 ${
            currentParagraphIndex === index ? "opacity-100" : "opacity-0"
          }`}
        >
          {paragraph}
        </p>
      ))}
    </div>
  );
};

export default AnimatePara;
