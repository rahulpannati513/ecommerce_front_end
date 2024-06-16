import MainCarousel from "../../HomeCarousel/MainCarousel.jsx";
import {HomeSectionCarousel} from "../../HomeSectionCarousel/HomeSectionCarousel.jsx";
import {mens_kurta} from "../../../../ecommerce-products-data-master/Men/men_kurta.js";
import {Footer} from "../../Footer/Footer.jsx";

export function HomePage() {
    return (

        <>
            <div className="space-y-100  flex flex-col justify-center px-5 lg:px-10  "><MainCarousel/></div>
            <div><HomeSectionCarousel data={mens_kurta} sectionName={"Men's Kurtha"}/></div>
            <div><HomeSectionCarousel data={mens_kurta} sectionName={"Men's Shoes"}/></div>
            <div><HomeSectionCarousel data={mens_kurta} sectionName={"Men's Shirt"}/></div>
            <div><HomeSectionCarousel data={mens_kurta} sectionName={"Women's Saree"}/></div>
            <div><HomeSectionCarousel data={mens_kurta} sectionName={"Women's Dress"}/></div>
            <div><Footer/>
            </div>

        </>
    )
}