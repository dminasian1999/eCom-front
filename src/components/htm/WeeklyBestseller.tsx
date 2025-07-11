import Carousel from "react-multi-carousel"

import { categories, shopCategories } from "../../utils/constants.ts"
import React, { useContext } from "react"
import { ProductsContext } from "../../utils/context.ts"

const WeeklyBestseller = () => {
  const {language} = useContext(ProductsContext)
  const cat =categories(language)

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
      slidesToSlide: 1,
    },
  }
  return (
    <div className="section py-8">
      <div className="container mx-auto px-4">
       <div className="row">
         <div className="section-header text-center">
           <h2 className="h2 text-3xl font-bold">{language === "Armenian"
             ? "Ամենավաճառվող ապրանքներ"
             : language === "Russian"
               ? "Популярные товары"
               : "Bestsellers"}</h2>
         </div>
       </div>
        <div className="col-12 productSlider grid-products">
          <Carousel
            swipeable
            draggable
            showDots
            responsive={responsive}
            infinite
            autoPlay
            autoPlaySpeed={3000}
            keyBoardControl
            containerClass="carousel-container"
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
          >
            {shopCategories(language)
              .map((item, index) => (
                <div key={index} className="text-center item p-2">
                  <div className="product-image link-image">
                    <a
                      href={`/category/${item.route}`}
                      className="grid-view-item__link d-flex flex-column align-items-center">
                      <div className="icon-placeholder fs-1 text-primary">
                        <i className={item.icon}></i>
                      </div>
                      <h3 className="mt-2 fs-6">{item.title}</h3>
                    </a>
                  </div>
                </div>
              ))}
          </Carousel>
        </div>    </div>
    </div>
  )
}
export default WeeklyBestseller
