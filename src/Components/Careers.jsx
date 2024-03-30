// ScrollAnimation.js
import React, { useEffect, useState } from 'react';
import '../App.css'; // Import CSS for styling

const ScrollAnimation = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="scroll-container">
     <h3>Under Improvement</h3>
    </div>
  );
};

export default ScrollAnimation;
