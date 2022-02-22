import { Badge } from '@material-ui/core';
import { FavoriteBorderOutlined, LocalMallOutlined, PermIdentityOutlined, Search } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    height: 60px;
    background-color: #2d2d2d;
`;

const Wrapper = styled.div`
    padding: 0px 200px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Left = styled.div`
    flex: 1;
    display: flex;
    text-align: center;
    align-items: center;
`;

const Logo = styled.h1`
    font-weight: bold;
    cursor: pointer;
`;

const MenuCategoryItem = styled.div`
    font-size: 18px;
    font-weight: 600;
    cursor: pointer;
    margin-left: 25px;
`;

const NavBorder = styled.div`
    border-left: 1px solid #525050;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 30px;
    height: 60px;
`;

const NavBorderRight = styled.div`
    border-right: 1px solid #525050;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 60px;
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
            <Left>
                <Logo style={{color: "white"}}>BLOOMS.</Logo>
                <NavBorder>
                    <MenuCategoryItem style={{color: "white"}}>WOMEN</MenuCategoryItem>
                </NavBorder>
                <NavBorder>
                    <NavBorderRight>
                        <MenuCategoryItem style={{color: "white", marginRight:30}}>MEN</MenuCategoryItem>
                    </NavBorderRight>
                </NavBorder>
            </Left>
            <Center>
                <SearchContainer>
                    <Input/>
                    <Search style={{color: "#2d2d2d", fontSize: 18}}/>
                </SearchContainer>
            </Center>
            <Right>
                <MenuItem>
                    <Badge color="primary" style={{color: "white"}}>
                        <PermIdentityOutlined />
                    </Badge>
                </MenuItem>
                <MenuItem>
                    <Badge badgeContent={2} color="primary" style={{color: "white"}}>
                        <FavoriteBorderOutlined />
                    </Badge>
                </MenuItem>
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
