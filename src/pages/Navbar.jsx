import React from 'react';
import styled from 'styled-components';
import { Search } from '@mui/icons-material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
const Container=styled.div`
height:60px;
`

const Wrapper=styled.div`
padding:10px 20px;
display:flex;
align-items:center;
justify-content:space-between;
height:50px;
`

const Left=styled.div`
flex:1;
display:flex;
align-items:center;`

const SearchContainer=styled.div`
border: 0.5px solid lightgray;
display: flex;
align-items: center;
margin-left: 25px;
padding: 5px;`

const Language=styled.span`
cursor:pointer;
font-size:14px;`

const Input=styled.input`
border:none;
outline:none;`

const Center=styled.div`
flex:1;
text-align:center;`

const Logo=styled.h1`
font-weight:bold;`

const Right=styled.div
`flex:1;
display:flex;
align-items:center;
justify-content:flex-end;`

const MenuItem=styled.div`
font-size:14px;
cursor:pointer;
margin:25px;`

const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Input placeholder="Search"/>
                        <Search style={{ color: "gray", fontSize: 16 }} />
                    </SearchContainer>
                    
                </Left>

                <Center><Logo>UNI CONNECT HUB.</Logo></Center>
                <Right>
                    <MenuItem>SIGN IN</MenuItem>
                    <MenuItem>REGISTER</MenuItem>
                    <MenuItem>
                        <AccountCircleIcon/>
                    </MenuItem>
                </Right>
            </Wrapper>
        </Container>
    );
}

export default Navbar;
