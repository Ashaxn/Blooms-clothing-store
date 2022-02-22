import styled from "styled-components"

const Container = styled.div`
    height: 30px;
    background-color: #f8f8f8;
    align-items: center;
`;

const Wrapper = styled.div`
    padding: 7px 200px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
`;

const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 30px;
`;

const Topnavbar = () => {
  return (
    <Container>
        <Wrapper>
            <Right>
                <MenuItem style={{color: "Black"}}>Marketplace</MenuItem>
                <MenuItem style={{color: "Black"}}>Help & FAQs</MenuItem>
                <MenuItem style={{color: "Black"}}><Language>EN</Language></MenuItem>
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Topnavbar
