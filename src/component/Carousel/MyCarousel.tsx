import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const MyCarousel = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className='my-2 md:my-6  lg:my-12'>
      <Carousel responsive={responsive}>
        <div>
          <img className=' h-40 md:h-64 lg:h-80 w-full object-cover'
            src='https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=600'
            alt='photos'
          />
        </div>
        <div>
          <img className=' h-40 md:h-64 lg:h-80 w-full object-cover'
            src='https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=600'
            alt='photos'
          />
        </div>
        <div>
          <img className=' h-40 md:h-64 lg:h-80 w-full object-cover'
            src='https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg?auto=compress&cs=tinysrgb&w=600'
            alt='photos'
          />
        </div>
        <div>
          <img className=' h-40 md:h-64 lg:h-80 w-full object-cover'
            src='https://images.pexels.com/photos/2102416/pexels-photo-2102416.jpeg?auto=compress&cs=tinysrgb&w=600'
            alt='photos'
          />
        </div>
        <div>
          <img className=' h-40 md:h-64 lg:h-80 w-full object-cover'
            src='https://images.pexels.com/photos/2102415/pexels-photo-2102415.jpeg?auto=compress&cs=tinysrgb&w=600'
            alt='photos'
          />
        </div>
        <div>
          <img className=' h-40 md:h-64 lg:h-80 w-full object-cover'
            src='https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=600'
            alt='photos'
          />
        </div>
        <div>
          <img className=' h-40 md:h-64 lg:h-80 w-full object-cover'
            src='https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=600'
            alt='photos'
          />
        </div>
        <div>
          <img className=' h-40 md:h-64 lg:h-80 w-full object-cover'
            src='https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg?auto=compress&cs=tinysrgb&w=600'
            alt='photos'
          />
        </div>
        <div>
          <img className=' h-40 md:h-64 lg:h-80 w-full object-cover'
            src='https://images.pexels.com/photos/2102416/pexels-photo-2102416.jpeg?auto=compress&cs=tinysrgb&w=600'
            alt='photos'
          />
        </div>
        <div>
          <img className=' h-40 md:h-64 lg:h-80 w-full object-cover'
            src='https://images.pexels.com/photos/2102415/pexels-photo-2102415.jpeg?auto=compress&cs=tinysrgb&w=600'
            alt='photos'
          />
        </div>
        <div>
          <img className=' h-40 md:h-64 lg:h-80 w-full object-cover'
            src='https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=600'
            alt='photos'
          />
        </div>
        <div>
          <img className=' h-40 md:h-64 lg:h-80 w-full object-cover'
            src='https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=600'
            alt='photos'
          />
        </div>
        <div>
          <img className=' h-40 md:h-64 lg:h-80 w-full object-cover'
            src='https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg?auto=compress&cs=tinysrgb&w=600'
            alt='photos'
          />
        </div>
        <div>
          <img className=' h-40 md:h-64 lg:h-80 w-full object-cover'
            src='https://images.pexels.com/photos/2102416/pexels-photo-2102416.jpeg?auto=compress&cs=tinysrgb&w=600'
            alt='photos'
          />
        </div>
        <div>
          <img className=' h-40 md:h-64 lg:h-80 w-full object-cover'
            src='https://images.pexels.com/photos/2102415/pexels-photo-2102415.jpeg?auto=compress&cs=tinysrgb&w=600'
            alt='photos'
          />
        </div>
       
      </Carousel>
      ;
    </div>
  );
};

export default MyCarousel;
