import React from 'react';
import { Link } from 'gatsby'
import IndexCarouselCard from './index-carousel-card';

const IndexCarousel = () => {

    const carouselArray = [
       { item: "Shoes",
        description: "Item Description - Item 1",
        bgcol: "red", 
        url: "http://placekitten.com/500/500"},
        { item: "Chewing Gum",
        description: "Item Description - Item 2",
        bgcol: "orange", 
        url: "http://placekitten.com/501/501"},
        { item: "Cats",
        description: "Item Description - Item 3",
        bgcol: "yellow", 
        url: "http://placekitten.com/502/502"},
        { item: "Teddy Bears",
        description: "Item Description - Item 4",
        bgcol: "green", 
        url: "http://placekitten.com/501/503"},
        { item: "Lego Blocks",
        description: "Item Description - Item 5",
        bgcol: "blue", 
        url: "http://placekitten.com/500/504"},
        { item: "Something Else",
        description: "Item Description - Item 6",
        bgcol: "indigo", 
        url: "http://placekitten.com/501/505"},
        { item: "Tea Cups",
        description: "Item Description - Item 7",
        bgcol: "violet", 
        url: "http://placekitten.com/500/506"},
        { item: "Water",
        description: "Item Description - Item 8",
        bgcol: "red", 
        url: "http://placekitten.com/501/507"},
        { item: "Flu Vax",
        description: "Item Description - Item 9",
        bgcol: "orange", 
        url: "http://placekitten.com/500/508"},
        { item: "Deoderant",
        description: "Item Description - Item 10",
        bgcol: "yellow", 
        url: "http://placekitten.com/501/509"},
        { item: "Keyboards",
        description: "Item Description - Item 11",
        bgcol: "green", 
        url: "http://placekitten.com/500/510"},
        { item: "Mice",
        description: "Item Description - Item 12",
        bgcol: "blue", 
        url: "http://placekitten.com/501/511"},
    ]

    return (
        <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full justify-center">
                <div className='columns-3'>
                    <div className='overflow-hidden p-4' >
                        <IndexCarouselCard props={carouselArray[0]}/>
                    </div>
                    <div className='overflow-hidden p-4' >
                        <IndexCarouselCard props={carouselArray[1]}/>
                    </div>
                    <div className='overflow-hidden p-4' >
                        <IndexCarouselCard props={carouselArray[2]}/>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a> 
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div> 
            <div id="slide2" className="carousel-item relative w-full justify-center">
                <div className='columns-3 justify-center'>
                    <div className='overflow-hidden p-4' >
                        <IndexCarouselCard props={carouselArray[3]}/>
                    </div>
                    <div className='overflow-hidden p-4' >
                        <IndexCarouselCard props={carouselArray[4]}/>
                    </div>
                    <div className='overflow-hidden p-4' >
                        <IndexCarouselCard props={carouselArray[5]}/>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a> 
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div> 
            <div id="slide3" className="carousel-item relative w-full justify-center">
                <div className='columns-3 justify-center'>
                    <div className='overflow-hidden p-4' >
                        <IndexCarouselCard props={carouselArray[6]}/>
                    </div>
                    <div className='overflow-hidden p-4' >
                        <IndexCarouselCard props={carouselArray[7]}/>
                    </div>
                    <div className='overflow-hidden p-4' >
                        <IndexCarouselCard props={carouselArray[8]}/>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a> 
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div> 
            <div id="slide4" className="carousel-item relative w-full justify-center">
                <div className='columns-3 justify-center'>
                    <div className='overflow-hidden p-4' >
                        <IndexCarouselCard props={carouselArray[9]}/>
                    </div>
                    <div className='overflow-hidden p-4' >
                        <IndexCarouselCard props={carouselArray[10]}/>
                    </div>
                    <div className='overflow-hidden p-4' >
                        <IndexCarouselCard props={carouselArray[11]}/>
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