import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import styled from "styled-components";
import { useState } from "react";

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
    //height: 100%;
    width:100%;
`;

const InfoContainer = styled.div`
    position: absolute;
    text-align: center;
    align-items: center;
    width: 25%;
    //padding: 50px;
`;

const InfoContainertwo = styled.div`
    position: absolute;
    text-align: center;
    align-items: center;
    width: 25%;
    //padding: 50px;
`;

const InfoContainerWomen = styled.div`
`;

const InfoContainertMen = styled.div`
    position: absolute;
    text-align: center;
    align-items: center;
    width: 50%;
    //padding: 50px;
`;
const BottomInfoContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 25%;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 21.2%;
`;

const BottomAnnouncement = styled.h1`
    font-size: 45px;
    font-weight: 900;
    color: white;
    letter-spacing: 1.5px;
    //background-color: white;
    max-width: fit-content;
    margin: auto;
    padding: 2px;
`;

const BottomButtonContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 75%;
    text-align: center;
    display: flex;
    //flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 21.2%;
`;

const BottomButton = styled.button`
    padding: 5px 10px;
    font-size: 15px;
    font-weight: 800;
    text-decoration:underline;
    text-underline-offset: 5px;
    color: white;
    height: 40px;
    width: auto;
    border: none;
    transition-duration: 0.1s;
    background-color: transparent;
    margin-left: 2px;
    margin-right: 2px;
    cursor: pointer;

    :hover{
        background-color: white;
        border-color: white;
        color:black;
        text-decoration: white underline;
    }
`;

const BottomButtonContainerTwo = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 75%;
    text-align: center;
    display: flex;
    //flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 22.4%;
`;

const BottomButtonTwo = styled.button`
    padding: 5px 10px;
    font-size: 15px;
    font-weight: 800;
    text-decoration:underline;
    text-underline-offset: 5px;
    color: white;
    height: 40px;
    width: auto;
    border: none;
    transition-duration: 0.1s;
    background-color: transparent;
    margin-left: 2px;
    margin-right: 2px;
    cursor: pointer;

    :hover{
        background-color: white;
        border-color: white;
        color:black;
        text-decoration: white underline;
    }
`;


const AnnouncementDesc = styled.text`
    font-size: 18px;
    font-weight: 600;
    color: white;
    margin-top: 5px;
`;

const BottomInfoContainerMen = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 50%;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 18.0%;
`;

const BottomAnnouncementMen = styled.h1`
    font-size: 45px;
    font-weight: 900;
    color: white;
    letter-spacing: 1.5px;
    //background-color: white;
    max-width: fit-content;
    margin: auto;
    padding: 2px;
`;

const BottomButtonContainerMen = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 150%;
    text-align: center;
    display: flex;
    //flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 18.0%;
`;

const BottomButtonMen = styled.button`
    padding: 5px 10px;
    font-size: 15px;
    font-weight: 800;
    text-decoration:underline;
    text-underline-offset: 5px;
    color: white;
    height: 40px;
    width: auto;
    border: none;
    transition-duration: 0.1s;
    background-color: transparent;
    margin-left: 2px;
    margin-right: 2px;
    cursor: pointer;

    :hover{
        background-color: white;
        border-color: white;
        color:black;
        text-decoration: white underline;
    }
`;

const BottomButtonContainerTwoMen = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 150%;
    text-align: center;
    display: flex;
    //flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 20.4%;
`;

const BottomButtonTwoMen = styled.button`
    padding: 5px 10px;
    font-size: 15px;
    font-weight: 800;
    text-decoration:underline;
    text-underline-offset: 5px;
    color: white;
    height: 40px;
    width: auto;
    border: none;
    transition-duration: 0.1s;
    background-color: transparent;
    margin-left: 2px;
    margin-right: 2px;
    cursor: pointer;

    :hover{
        background-color: white;
        border-color: white;
        color:black;
        text-decoration: white underline;
    }
`;


const AnnouncementDescMen = styled.text`
    font-size: 18px;
    font-weight: 600;
    color: white;
    margin-top: 5px;
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
    font-size: 12px;
    font-weight: 600;
    height: 40px;
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
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 1)
        }else {
            setSlideIndex(slideIndex < 1 ? slideIndex + 1 : 0)
        }
    };

  return (
    <Container>
        <Arrow direction="left" onClick={()=>handleClick("left")}>
            <ArrowLeftOutlined/>
        </Arrow>
        <Wrapper slideIndex = {slideIndex}>
            <Slide>
                <ImgContainer>
                    <Image src="./images/2-girl.png" />
                </ImgContainer>
                <InfoContainer>
                    <Title>This is BLOOMS.</Title>
                    <Desc>DON'T COMPROMISE ON STYLE!</Desc>
                    <Button>SHOP WOMEN</Button>
                    <Button>SHOP MEN</Button>
                </InfoContainer>
                <InfoContainerWomen>
                <BottomInfoContainer>
                    <BottomAnnouncement>GET UP TO $300 OFF</BottomAnnouncement>
                    <AnnouncementDesc>Your Purchase</AnnouncementDesc>
                </BottomInfoContainer>
                <BottomButtonContainer>
                    <BottomButton>WOMEN'S CLOTHING</BottomButton>
                    <BottomButton>SHOES</BottomButton>
                    <BottomButton>HANDBAGS</BottomButton>
                </BottomButtonContainer>
                <BottomButtonContainerTwo>
                    <BottomButtonTwo>JEWELRY</BottomButtonTwo>
                    <BottomButtonTwo>ACCESSORIES</BottomButtonTwo>
                </BottomButtonContainerTwo>
                </InfoContainerWomen>
            </Slide>
            <Slide>
                <ImgContainer>
                    <Image src="./images/1-men.png" />
                </ImgContainer>
                <InfoContainertwo>
                    <Title>This is BLOOMS.</Title>
                    <Desc>DON'T COMPROMISE ON STYLE!</Desc>
                    <Button>SHOP WOMEN</Button>
                    <Button>SHOP MEN</Button>
                </InfoContainertwo>
                <InfoContainertMen>
                <BottomInfoContainerMen>
                    <BottomAnnouncementMen>GET UP TO $300 OFF</BottomAnnouncementMen>
                    <AnnouncementDescMen>Your Purchase</AnnouncementDescMen>
                </BottomInfoContainerMen>
                <BottomButtonContainerMen>
                    <BottomButtonMen>WOMEN'S CLOTHING</BottomButtonMen>
                    <BottomButtonMen>SHOES</BottomButtonMen>
                    <BottomButtonMen>HANDBAGS</BottomButtonMen>
                </BottomButtonContainerMen>
                <BottomButtonContainerTwoMen>
                    <BottomButtonTwoMen>JEWELRY</BottomButtonTwoMen>
                    <BottomButtonTwoMen>ACCESSORIES</BottomButtonTwoMen>
                </BottomButtonContainerTwoMen>
                </InfoContainertMen>
            </Slide>
        </Wrapper>
        <Arrow direction="right" onClick={()=>handleClick("right")}>
            <ArrowRightOutlined/>
        </Arrow>
    </Container>
  )
}

export default Slider
