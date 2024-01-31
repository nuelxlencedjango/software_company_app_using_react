import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import computer from '../assets/computerworks.jpg';

import money from '../assets/money.png';

const Home = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className='bg-neutralSilver'>
      <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto min-h-screen h-screen'>
        <Slider {...sliderSettings}>
          <div>
            <img src={computer} alt='Computer' />
            <h3>whats going in here?</h3>
          </div>
          <div>
           
            
          </div>
          <div>
            <img src={money} alt='Money' />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Home;
