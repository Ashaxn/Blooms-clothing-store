import styled from "styled-components";

const Container = styled.div`
    flex: 1;
    margin-left: 3px;
    margin-right: 3px;
    position: relative;
`;

const Image = styled.img`
    width: 100%;
`;

const Info = styled.div`
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Title = styled.h2`
    background-color: white;
    font-weight: 900;
    color: black;
    margin-top: 10px;
`;

const MiddleTitle = styled.text`
    background-color: white;
    font-weight: 500;
    color: black;
    padding: 10px;
`

const Button = styled.button`
    padding: 5px;
    font-size: 15px;
    font-weight: 900;
    margin-top: 10px;
    height: 50px;
    width: 150px;
    border: 2px solid #ffffff;
    transition-duration: 0.5s;
    background-color: white;
    border-color: black;
    cursor: pointer;

    :hover{
        background-color: black;
        border-color: black;
        color:white;
    }
`;


const CategoriesTrendItem = ({item}) => {
  return (
    <Container>
        <Image src={item.img}/>
        <Info>
            <Title>{item.title}</Title>
            <MiddleTitle>{item.midtitle}</MiddleTitle>
            <Button>SHOP NOW</Button>
        </Info>
    </Container>
  )
}

export default CategoriesTrendItem
