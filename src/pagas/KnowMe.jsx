import me1 from "../assets/me/me1.jpeg";
import me2 from "../assets/me/me2.jpeg";
import me3 from "../assets/me/me3.jpeg";
import me4 from "../assets/me/me4.jpeg";
import me5 from "../assets/me/me5.jpeg";
import me6 from "../assets/me/me6.jpeg";

import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../App";

const images = [me1, me2, me3, me4, me5, me6];

export const KnowMe = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [darkTheme] = useContext(ThemeContext);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  const handleBulletClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div
      className={`relative w-64 h-64 border-2 rounded-2xl ${
        darkTheme ? "border-accent-color" : "border-white shadow-xl"
      } `}
    >
      <img
        className="w-full h-full object-cover rounded-2xl transition-all"
        src={images[currentIndex]}
        alt="logo"
      />
      <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-4 h-2 rounded-full ${
              index === currentIndex ? "bg-gray-600 shadow-xl" : "bg-gray-300"
            }`}
            onClick={() => handleBulletClick(index)}
          />
        ))}
      </div>
    </div>
  );
};
