import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import styled from "styled-components";
import { useState } from "react";
import {sliderItems} from "../data";

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
    overflow: hidden;
`;

const Wrapper =styled.div`
    height: 100%;
    display: flex;
    transform: translateX(${props => props.slideIndex * -100}vw);
    animation: fadeInAnimation ease 3s;
    transition: opacity 0.8s cubic-bezier(0.645, 0.045, 0.355, 1),transform 0.8s cubic-bezier(0.645, 0.045, 0.355, 1),visibility 0.8s cubic-bezier(0.645, 0.045, 0.355, 1);

@keyframes fadeInAnimation {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
     }
}
`;

const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #fff7f7;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    cursor: pointer;
    left: ${props=> props.direction === "left" && "10px"};
    right: ${props=> props.direction === "right" && "10px"};
    margin: auto;
    opacity: 0.5;
    z-index: 2;
`;

const Slide = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
`;

const ImgContainer = styled.div`
    height: 100%;
`;

const Image = styled.img`
    height: 100%;
    width: fit-content;
`;

const InfoContainer = styled.div`
    position: absolute;
    text-align: center;
    align-items: center;
    width: 25%;
    //padding: 50px;
`;

const Title = styled.h1`
    font-size: 60px;
    font-weight: 900;
    color: black;
    letter-spacing: 1.5px;
    background-color: white;
    max-width: fit-content;
    margin: auto;
    padding: 15px;
`;

const Desc = styled.p`
    color: white;
    font-weight: 600;
    margin: 20px;
    letter-spacing: 2px;
`;

const Button = styled.button`
    padding: 5px;
    margin: 16px;
    font-size: 15px;
    font-weight: 700;
    height: 50px;
    width: 150px;
    border: 2px solid #ffffff;
    transition-duration: 0.5s;
    background-color: white;
    cursor: pointer;

    :hover{
        background-color: black;
        border-color: black;
        color:white;
    }
`;


const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    const handleClick = (direction) => {
        if(direction==="left"){
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 3)
        }else {
            setSlideIndex(slideIndex < 3 ? slideIndex + 1 : 0)
        }
    };

  return (
    <Container>
        <Arrow direction="left" onClick={()=>handleClick("left")}>
            <ArrowLeftOutlined/>
        </Arrow>
        <Wrapper slideIndex = {slideIndex}>
            {sliderItems.map(item =>( 
            <Slide>
                <ImgContainer>
                    <Image src={item.img} />
                </ImgContainer>
                <InfoContainer>
                    <Title>{item.title}</Title>
                    <Desc>{item.desc}</Desc>
                    <Button>SHOP WOMEN</Button>
                    <Button>SHOP MEN</Button>
                </InfoContainer>
            </Slide>
            ))}
        </Wrapper>
        <Arrow direction="right" onClick={()=>handleClick("right")}>
            <ArrowRightOutlined/>
        </Arrow>
    </Container>
  )
}

export default Slider
