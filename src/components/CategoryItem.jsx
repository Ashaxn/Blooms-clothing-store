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
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 8%;
`;

const Title = styled.h1`
    background-color: white;
    font-weight: 900;
    color: black;
    margin: 20px;
    padding: 10px;
`;

const Button = styled.button`
    padding: 5px;
    font-size: 15px;
    font-weight: 900;
    height: 45px;
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

const CategoryItem = ({item}) => {
  return (
    <Container>
        <Image src={item.img}/>
        <Info>
            <Title>{item.title}</Title>
            <Button>SHOP THE TREND</Button>
        </Info>
    </Container>
  )
}

export default CategoryItem

