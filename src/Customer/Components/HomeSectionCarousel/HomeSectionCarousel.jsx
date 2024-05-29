import AliceCarousel from "react-alice-carousel";
import {HomeSectionCard} from "../HomeSectionCard/HomeSectionCard.jsx";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import {Button} from "@mui/material";
import {useState} from "react";
import {mens_kurta} from "../../../ecommerce-products-data-master/Men/men_kurta.js";
export function HomeSectionCarousel({data,sectionName}) {


     const[activeIndex,setActiveIndex] = useState(0) ;


    const responsive = {
        0: { items: 1 },
        720: { items: 3 },
        1024: { items: 5.5 },
    };

     const sidePrev =() => setActiveIndex(activeIndex - 1);
    const sideNext =() => setActiveIndex(activeIndex+1);

     const syncActiveIndex = (items) => {setActiveIndex(items);}

    const items = data.slice(0,10).map((items ) => <HomeSectionCard product={items}/>);

    return (
        <>
        <div className="border">
<h1 className="text-2xl font-bold text>gray-900">{sectionName}</h1>
        <div className = "relative p-5 ">

            <div>


                <AliceCarousel

                    items={items}
                    disableButtonsControls

                    disableDotsControls
                    responsive={responsive}
                    onSlideChanged={syncActiveIndex}
                    activeIndex={activeIndex}

                />

                { activeIndex !== items.length-5 &&  <Button variant="contained" className="z-50 bg-white" onClick={sideNext}  sx={{position:`absolute`,top:`8rem`,right:"0rem",backgroundColor: 'white',transform:"translateX(50%) rotate(90deg)"}} aria-label="next"><KeyboardArrowLeftIcon sx={{transform:"rotate(90deg)",color:"black"}}/> </Button>}

                { activeIndex !== 0  &&  <Button  variant="contained" className="z-50 bg-white  " onClick={sidePrev} sx={{position:`absolute`,top:`8rem`,left:"0rem",backgroundColor: 'white',transform:"translateX(-50%) rotate(90deg)",bgcolor:"white"}}><KeyboardArrowLeftIcon sx={{transform:"rotate(-90deg)",color:"black"}}/></Button>}

            </div>
        </div>
        </div>
        </>
    )
}


