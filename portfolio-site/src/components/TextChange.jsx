import React, { useEffect, useState } from "react";

const TextChange = () => {
  const texts = ["Hi, I'm Santosh", "Welcome to my site", "Enjoy your stay!"];
  const [currentText, setCurrentText] = useState("");
  const [endValue, setEndValue] = useState(0);
  const [isForward, setIsForward] = useState(true);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentText(texts[index].substring(0, endValue));

      if (isForward) {
        if (endValue < texts[index].length) {
          setEndValue((prev) => prev + 1);
        } else {
          // pause for a bit before deleting
          setTimeout(() => setIsForward(false), 500);
        }
      } else {
        if (endValue > 0) {
          setEndValue((prev) => prev - 1);
        } else {
          setIsForward(true);
          setIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, 100);

    return () => clearInterval(intervalId);
  }, [endValue, isForward, index]);

  return (
    <div className="transition-all ease-linear duration-300 text-white ">
      {currentText}
    </div>
  );
};

export default TextChange;
