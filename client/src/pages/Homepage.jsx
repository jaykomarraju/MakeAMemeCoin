import styled from 'styled-components';

// Here are the components:
// 1. Logo = available in assets folder named "logoBlack.png"
// 2. Company Name = "Make A Change Now"
// 3. Tag Line = "Create your own change in 5 minutes"
// 4. Learn More Button
// 5. Get Started Button

// Here is the layout:
// - Everything is centered in the page
// - Logo to the left of Name and Tag Line
// - 2 Buttons under
// - When the width is less than 600px, everything (including buttons) becomes in a column

import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logoBlack.png';

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Logo = styled.img`
    width: 150px;
    // height: 200px;
`;

const Texter = styled.div`
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: center;
    margin-left: 50px;
    color:#2d2d2d;
`;


const CompanyName = styled.h1`
    font-size: 50px;
    font-weight: 700;
    margin: 0;
`;

const TagLine = styled.h2`
    font-size: 25px;
    font-weight: 400;
    margin: 0;
`;

const Button = styled.button`
    width: 200px;
    height: 50px;
    background-color: #2d2d2d;
    color: #fff;
    border: none;
    border-radius: 50px;
    font-size: 20px;
    font-weight: 300;
    margin: 10px;
    margin-top: 50px;
    cursor: pointer;
    border: 3px solid #2d2d2d;

    &:hover {
        background-color: #fff;
        color: #2d2d2d;
        border: 3px solid #2d2d2d;
    }

`;

const Button2 = styled.button`
    width: 200px;
    height: 50px;
    background-color: #fff;
    color: #2d2d2d;
    border: none;
    border-radius: 50px;
    font-size: 20px;
    font-weight: 300;
    margin: 10px;
    margin-top: 50px;
    cursor: pointer;
    border: 3px solid #2d2d2d;

    &:hover {
        background-color: #2d2d2d;
        color: #fff;
        border: 3px solid #fff;
    }

`;

const Flexer = styled.div`
    display: flex;
    justify-content:center;
    width: 100%;
`;

const Homepage = () => {

    return (
        <Container>
            <Flexer>
            <Logo src={logo} alt="logo" /><Texter>
            <CompanyName>Make A Meme Coin</CompanyName>
            <TagLine>Create your own ERC20 token in 5 minutes</TagLine></Texter></Flexer>
            <Flexer>
                <Button>Learn More</Button>
                <Button2>Get Started</Button2>
            </Flexer> 
        </Container>
    )
}

export default Homepage;



