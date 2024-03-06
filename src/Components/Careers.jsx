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
      <div className="content" style={{ transform: `translateY(${scrollY / 3}px)` }}>
        {/* Add more content here */}
        <div className="box"></div>
        <div style={{ height: '1000px', background: 'lightgray' }}>Scroll down to see the animation</div>
        {/* Add more content as needed */}
      </div>
    </div>
  );
};

export default ScrollAnimation;
