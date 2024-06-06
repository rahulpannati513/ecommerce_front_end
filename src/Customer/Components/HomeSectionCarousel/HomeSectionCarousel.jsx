import AliceCarousel from "react-alice-carousel";
import {HomeSectionCard} from "../HomeSectionCard/HomeSectionCard.jsx";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import {Button} from "@mui/material";
import {useState} from "react";
import {mens_kurta} from "../../../ecommerce-products-data-master/Men/men_kurta.js";
import { useRef } from "react";
export function HomeSectionCarousel({data,sectionName}) {
    const carouselRef = useRef(null);


     const[activeIndex,setActiveIndex] = useState(0) ;


    const responsive = {
        0: { items: 1 },
        720: { items: 3 },
        1024: { items: 5.5 },
    };

 
    const sidePrev = () => {
        let newIndex = activeIndex - 1;
        if (newIndex < 0) {
            newIndex = items.length - 1; // Assuming 'items' is the array of carousel items
        }
        setActiveIndex(newIndex);
        if (carouselRef.current) {
            carouselRef.current.slideTo(newIndex); // Assuming the carousel library supports the slideTo method
        }
    };
  

    const sideNext = () => {
        setActiveIndex(activeIndex + 1);
        carouselRef.current.slideNext();
    };

     const syncActiveIndex = (items) => {setActiveIndex(items);}

    const items = data.slice(0,40).map((items ) => <HomeSectionCard product={items}/>);

    return (
        <>
        <div className="border">
<h1 className="text-2xl font-bold text>gray-900">{sectionName}</h1>
        <div className = "relative p-5 ">

            <div>


                <AliceCarousel

ref={carouselRef}
items={items}
disableButtonsControls
disableDotsControls
responsive={responsive}
onSlideChanged={syncActiveIndex}
activeIndex={activeIndex}
animationDuration={1000}


                />

                { activeIndex !== items.length-5 &&  <Button variant="contained" className="z-50 bg-white" onClick={sideNext}  sx={{position:`absolute`,top:`8rem`,right:"2.5rem",backgroundColor: 'white',transform:"translateX(50%) rotate(90deg)"}} aria-label="next"><KeyboardArrowLeftIcon sx={{transform:"rotate(90deg)",color:"black"}}/> </Button>}

                { activeIndex !== 0  &&  <Button  variant="contained" className="z-50 bg-white  " onClick={sidePrev} sx={{position:`absolute`,top:`8rem`,left:"4rem",backgroundColor: 'white',transform:"translateX(-50%) rotate(90deg)",bgcolor:"white"}}><KeyboardArrowLeftIcon sx={{transform:"rotate(-90deg)",color:"black"}}/></Button>}

            </div>
        </div>
        </div>
        </>
    )
}


