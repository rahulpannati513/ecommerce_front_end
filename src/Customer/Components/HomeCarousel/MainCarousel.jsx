// // eslint-disable-next-line no-unused-vars
// import React from 'react';
// import AliceCarousel from 'react-alice-carousel';
// import 'react-alice-carousel/lib/alice-carousel.css';
// import MainCarouselData from './MainCarouselData';
//
//
// const MainCarousel = () => {
// const items = MainCarouselData.map((item) => <img className='cursor-pointer' role='presentation' src={item.image} alt='NO image found'/>);
//
//
//     return (
//         <AliceCarousel
//         items={items}
//         autoHeight
//         autoPlay
//         autoPlayInterval={2000}
//         infinite
//
//
//     />
//      );
// };
//
// export  default MainCarousel;

import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import MainCarouselData from './MainCarouselData';

const items = MainCarouselData.map((item) => {
    return <img className="cursor-pointer" role={"presentation"} src={item.image} alt={item.alt || 'NO image found'} />;
});

const MainCarousel = () => (
    <AliceCarousel
        disableButtonsControls={true}
        autoPlay
        autoPlayInterval={2000}
        infinite
        disableDotsControls

        items={items}
    />
);

export default MainCarousel;