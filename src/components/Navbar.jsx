import { Badge } from '@material-ui/core';
import { LocalMallOutlined, Search } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    height: 60px;
    background-color: #2d2d2d;
`;

const Wrapper = styled.div`
    padding: 11px 200px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Left = styled.div`
    flex: 1;
    display: flex;
    text-align: center;
`;

const Logo = styled.h1`
    font-weight: bold;
    cursor: pointer;
`;

const Center = styled.div`
    flex: 1;
    align-items: center;
`;

const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    background-color: white;
    display: flex;
    align-items: center;
    padding: 5px;
    justify-content: center;
    border-radius: 20px;
`;

const Input = styled.input`
    background-color: white;
    border: none;
    width: 530px;
`;

const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
`;

const Navbar = () => {
  return (
    <Container>
        <Wrapper>
            <Left><Logo style={{color: "white"}}>BLOOMS.</Logo></Left>
            <Center>
            <SearchContainer>
                    <Input/>
                    <Search style={{color: "#2d2d2d", fontSize: 18}}/>
                </SearchContainer>
            </Center>
            <Right>
                <MenuItem style={{color: "white"}}>REGISTER</MenuItem>
                <MenuItem style={{color: "white"}}>SIGN IN</MenuItem>
                <MenuItem>
                    <Badge badgeContent={4} color="primary" style={{color: "white"}}>
                        <LocalMallOutlined />
                    </Badge>
                </MenuItem>
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar
