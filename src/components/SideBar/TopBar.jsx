import React from 'react'
import styled from "styled-components";

const Container = styled.div`
    position: fixed;
    width:100%;
    height:93px;
    margin-left: 84.3px;
    overflow: hidden;
    z-index: 5;
    top: 0;
    background-color: white;
    -webkit-box-shadow: 0px 0px 5px 2px #dcdcdc;
 
    `;

    const Infos = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    Font-family: MS Sans Serif, sans-serif;
    `;

    const Title = styled.h1`
    font-size: 20px;
    margin-left:4%;
    `;

    const ButtonsItems = styled.div`
    
    margin-right:10%;
    `;



export default function TopBar() {
  return (
    <Container>
        <Infos>
            <Title>DashBoard</Title>
            <ButtonsItems>Icons</ButtonsItems>
        </Infos>

    </Container>
    
  )
}
