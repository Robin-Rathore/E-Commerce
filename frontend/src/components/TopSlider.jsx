import React, { useEffect, useState } from 'react';
import { FaTruckDroplet } from 'react-icons/fa6';
import { styled } from "styled-components";
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Boundary = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    overflow: hidden;
    z-index: -1;
    @media (max-width: 520px) {
        position: absolute;
        top : 0;
        z-index: 9;
    }
`;

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    background-color: #002d46;
    color: #fff4e6;
`;

const Wrapper = styled.div`
    width: 100vw;
    display: flex;
`;

const Slide = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.8s;
    transform: translateX(${props => props.$slideindex * -100}vw); /* Change slideIndex to slideindex */
`;


const Desc = styled.div`
    width: 100vw;
    display: flex;
    justify-content: center;
    font-family: "Oswald", sans-serif;
    align-items: center;
    font-size: 14px;
    color: white;
    gap: 20px;
`;
const Icon = styled.div`
    transform: scaleX(-1);
`;
const HoverContainer = styled(Container)`
    @media (max-width: 480px) {
    }
`;
const TopSlider = () => {
    const slides = [
        {
            imgSrc: <LocalShippingIcon />,
            title: "Free Shipping within India",
        },
        {
            imgSrc: <ShoppingCartIcon />,
            title: "Shop Now For The Best Prices",
        },
        {
            imgSrc: <LocalShippingIcon />,
            title: "Extra 5% Off on all Prepaid Offers",
        },
        {
            imgSrc: <ShoppingCartIcon />,
            title: "Book An Appointment",
        },
        {
            imgSrc: <LocalShippingIcon />,
            title: "Free Shipping within lanka",
        },
    ];
    const [slideIndex, setSlideIndex] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setSlideIndex(prevIndex => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <Boundary>
                <HoverContainer>
                    <Container>
                        <Wrapper>
                            {slides.map((slide, index) => (
                                <Slide key={index} $slideindex={slideIndex}>
                                    <Desc><Icon>{slide.imgSrc}</Icon>{slide.title}</Desc>
                                </Slide>
                            ))}
                        </Wrapper>
                    </Container>
                </HoverContainer>
            </Boundary>
        </div>
    );
}

export default TopSlider;
