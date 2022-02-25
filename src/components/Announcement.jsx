import styled from "styled-components"

const Container = styled.div`
    height: 50px;
    background: linear-gradient(-45deg, #C8B9E5, #B7B6EB, #CDBADD, #9DB5FC);
`;

const Wrapper = styled.div`
    padding: 9px 200px;
    display: flex;
    align-items: center;
`;

const Left = styled.div`
    flex: 1;
    display: flex;
    text-align: center;
    align-items: center;
`;

const Center = styled.div`
    flex: 1;
    align-items: center;
    color: black;
    display: flex;
    justify-content: center;
    font-size: 14px;
    font-weight: 500;
`;

const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

const Button = styled.button`
    padding: 5px;
    font-size: 13px;
    font-weight: 700;
    height: 30px;
    width: 100px;
    border: 3px solid #000000;
    transition-duration: 0.5s;
    background-color: transparent;
    cursor: pointer;

    :hover{
        opacity:70% ;
    }
`;

const Announcement = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
                <Button>WOMEN</Button>
            </Left>
            <Center>
                UP TO 30% OFF WARDROBE FAVES!
            </Center>
            <Right>
                <Button>MEN</Button>
            </Right>
        </Wrapper>
    </Container>
  );
};

export default Announcement;
