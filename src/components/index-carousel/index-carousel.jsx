import React, {useState} from 'react';
import IndexCarouselCard from './index-carousel-card';
import { CartAPI } from '../../services/cart';

const IndexCarousel = () => {
    const [ carouselArray, setCarouselArray ] = useState([]);

    const getArray = () => {
        CartAPI.getProducts().then((response) => {
            setCarouselArray(response.data)
        })
    };
    
    if (carouselArray.length <= 0) {
        getArray()
    };

    return (
        <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full justify-center">
                <div className='columns-3'>
                    <div className='overflow-hidden p-4' >
                        {carouselArray.length > 0 ? (<IndexCarouselCard props={carouselArray[0]}/>) : (<div className='overflow-hidden p-4' >Loading Content...</div>)}
                    </div>
                    <div className='overflow-hidden p-4' >
                        {carouselArray.length > 0 ? (<IndexCarouselCard props={carouselArray[1]}/>) : (<div className='overflow-hidden p-4' >Loading Content...</div>)}
                    </div>
                    <div className='overflow-hidden p-4' >
                        {carouselArray.length > 0 ? (<IndexCarouselCard props={carouselArray[2]}/>) : (<div className='overflow-hidden p-4' >Loading Content...</div>)}
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a> 
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div> 
            <div id="slide2" className="carousel-item relative w-full justify-center">
                <div className='columns-3'>
                    <div className='overflow-hidden p-4' >
                        {carouselArray.length > 0 ? (<IndexCarouselCard props={carouselArray[3]}/>) : (<div className='overflow-hidden p-4' >Loading Content...</div>)}
                    </div>
                    <div className='overflow-hidden p-4' >
                        {carouselArray.length > 0 ? (<IndexCarouselCard props={carouselArray[4]}/>) : (<div className='overflow-hidden p-4' >Loading Content...</div>)}
                    </div>
                    <div className='overflow-hidden p-4' >
                        {carouselArray.length > 0 ? (<IndexCarouselCard props={carouselArray[5]}/>) : (<div className='overflow-hidden p-4' >Loading Content...</div>)}
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a> 
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div> 
            <div id="slide3" className="carousel-item relative w-full justify-center">
                <div className='columns-3'>
                    <div className='overflow-hidden p-4' >
                        {carouselArray.length > 0 ? (<IndexCarouselCard props={carouselArray[6]}/>) : (<div className='overflow-hidden p-4' >Loading Content...</div>)}
                    </div>
                    <div className='overflow-hidden p-4' >
                        {carouselArray.length > 0 ? (<IndexCarouselCard props={carouselArray[7]}/>) : (<div className='overflow-hidden p-4' >Loading Content...</div>)}
                    </div>
                    <div className='overflow-hidden p-4' >
                        {carouselArray.length > 0 ? (<IndexCarouselCard props={carouselArray[8]}/>) : (<div className='overflow-hidden p-4' >Loading Content...</div>)}
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a> 
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div> 
            <div id="slide4" className="carousel-item relative w-full justify-center">
                <div className='columns-3'>
                    <div className='overflow-hidden p-4' >
                        {carouselArray.length > 0 ? (<IndexCarouselCard props={carouselArray[9]}/>) : (<div className='overflow-hidden p-4' >Loading Content...</div>)}
                    </div>
                    <div className='overflow-hidden p-4' >
                        {carouselArray.length > 0 ? (<IndexCarouselCard props={carouselArray[10]}/>) : (<div className='overflow-hidden p-4' >Loading Content...</div>)}
                    </div>
                    <div className='overflow-hidden p-4' >
                        {carouselArray.length > 0 ? (<IndexCarouselCard props={carouselArray[11]}/>) : (<div className='overflow-hidden p-4' >Loading Content...</div>)}
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a> 
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div> 
        </div>

    )
};

export default IndexCarousel;