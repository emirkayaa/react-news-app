import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css";
import '../css/carousel.css'


function Slider({news}){
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };

    return(
        <Carousel
        swipeable={true}
        draggable={true}
        showDots={true}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlay={false}
        autoPlaySpeed={2000}
        keyBoardControl={true}
        customTransition="all 1"
        transitionDuration={1000}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
    >
        {
            news.map((item,index) => {
                return(
                    <div key={index} className="h-96 carousel-item " style={{ backgroundImage:`url('${item.urlToImage}')` }}>
                        <div className="content flex-col sm:flex-row w-full items-center text-center px-4 md:px-10">
                            <img src={item.urlToImage} className="mr-2" />
                            <div className="flex flex-col w-96 items-center">
                                <h1 className="text-xl md:text-2xl ellipsis-2 ">{item.title}</h1>
                                <p className="ellipsis-4 text-sm md:text-lg">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    </div>
                )
            })
        }
    </Carousel>
    )
}
export default Slider