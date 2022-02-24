import styled from "styled-components"

const Container = styled.div`
    height: 95px;
    background-color: #ccff00;
`;

const Wrapper = styled.div`
    display: flex;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    align-items: center;
    text-align: center;
    color: black;
    justify-content: center;
    font-size: 14px;
    font-weight: 500;
    flex-direction: column;
`;

const Title = styled.h1`
    font-weight: 900;
    font-size: 30px;
    font-family:  'Montserrat', sans-serif;
    color: black;
    font-style: italic;
    letter-spacing: 2.3px
`;

const Desc = styled.text`
    font-size: 12px;
    color: black;
    margin-top: 5px;
`;

const HomeAnnouncementTwo = () => {
  return (
    <Container>
        <Wrapper>
                <Title>UP TO 30% OFF WARDROBE FAVES!</Title>
                <Desc>See website banner for full Ts&Cs. Selected marked products excluded from promo.</Desc> 
        </Wrapper>
    </Container>
  );
};

export default HomeAnnouncementTwo;