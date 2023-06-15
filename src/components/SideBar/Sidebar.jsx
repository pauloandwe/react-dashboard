import React, { useState } from 'react'
import styled from "styled-components";
import logo from '../imgs/logosimples.png';
import { BsGrid1X2, BsPeople, BsSearch, BsStar, BsClockHistory } from "react-icons/bs";


const Container = styled.div`
    position: fixed;
    height: 100%;
    width: 90px;
    top: 0;
    left: 0;
    -webkit-box-shadow: 0px 0px 2px 2px #dcdcdc;
    z-index: 6;
    background-color:white;
  `;

const Logo = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 30px;
  `;
const IconBox = styled.div`
    display: ;
    justify-content: center;
    padding-top: 30px;
  `;

const IconsButtons = styled.div`
  &:hover{
    cursor: pointer;
  }
  margin-top: 2px;
      `;
const IconsButtonsFirst = styled.div`
    background-color: rgb(73,169,90);
    &:hover{
      cursor: pointer;
    }
    `;

export default function SideBar() {

  return (
    <Container>
      <Logo>
        <img src={logo} alt="logo" style={{ width: ' 60%' }} />
      </Logo>


      <IconBox>
        <IconsButtonsFirst><BsGrid1X2 color={'white'} style={{ width: '100%', height: '25px', paddingTop: '12px', paddingBottom: '10px' }} /></IconsButtonsFirst>
        <IconsButtons><BsPeople color={'rgb(73,169,90)'} style={{ width: '100%', height: '25px', paddingTop: '10px', paddingBottom: '12px' }} /></IconsButtons>
        <IconsButtons><BsSearch color={'rgb(73,169,90)'} style={{ width: '100%', height: '25px', paddingTop: '10px', paddingBottom: '12px' }} /></IconsButtons>
        <IconsButtons><BsStar color={'rgb(73,169,90)'} style={{ width: '100%', height: '25px', paddingTop: '10px', paddingBottom: '12px' }} /></IconsButtons>
        <IconsButtons><BsClockHistory color={'rgb(73,169,90)'} style={{ width: '100%', height: '25px', paddingTop: '10px', paddingBottom: '12px' }} /></IconsButtons>

      </IconBox>


    </Container>
  )
}
