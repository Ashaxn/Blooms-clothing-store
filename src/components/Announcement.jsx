import styled from "styled-components"

const Container = styled.div`
    height: 40px;
    background-color: #ccff00;
    color: black;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 500;
`;

const Announcement = () => {
  return (
    <Container>
        UP TO 30% OFF WARDROBE FAVES!
    </Container>
  );
};

export default Announcement;
