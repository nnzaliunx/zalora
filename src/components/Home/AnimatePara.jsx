import React, { useState, useEffect } from "react";

const AnimatePara = () => {
  const [paragraphs, setParagraphs] = useState([
    "Congratulations! Maria has withdrawn a commission of $102.45",
    "Congratulations! Christina has withdrawn a commission of $100.70",
    "Congratulations! Bernila has withdrawn a commission of $110.00",
    "Congratulations! Dalisay has withdrawn a commission of $105.30",
  ]);
  const [currentParagraphIndex, setCurrentParagraphIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentParagraphIndex(
        (prevIndex) => (prevIndex + 1) % paragraphs.length
      );
    }, 2000); // Change paragraph every 1 second

    return () => clearTimeout(timer);
  }, [currentParagraphIndex, paragraphs.length]);

  return (
    <div className="relative w-full mt-6  flex items-center justify-center">
      {paragraphs.map((paragraph, index) => (
        <p
          key={index}
          className={`absolute bg-slate-200 top-0 left-0 w-full text-center transition-opacity duration-1000  rounded-lg text-black py-4 px-2 ${
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
