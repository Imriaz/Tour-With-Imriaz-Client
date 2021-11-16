import React from 'react';
import { Carousel } from 'react-bootstrap';

const Banner = () => {
    return (
        <div>
            <Carousel variant="dark">
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/X7ByB8d/banner1.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h2 className='text-white'>Tour in Europe</h2>
                        <h5 className='text-white'>Travel in Europe with us and get exciting discount for you & your Family.</h5>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/94LXMnc/banner2.jpg"
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h2 className='text-white'>Tour in Bangladesh</h2>
                        <h5 className='text-white'>Travel in Bangladesh with us and get exciting discount for you & your Family.</h5>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/D7qzb26/banner3.jpg"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h2 className='text-white'>Tour in America</h2>
                        <h5 className='text-white'>Travel in America with us and get exciting discount for you & your Family.</h5>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/FhmhLyJ/banner4.jpg"
                        alt="Forth slide"
                    />
                    <Carousel.Caption>
                        <h2 className='text-white'>Tour in Australia</h2>
                        <h5 className='text-white'>Travel in Australia with us and get exciting discount for you & your Family.</h5>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;