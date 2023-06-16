import React from 'react'
import styled from "styled-components";
import { BsRssFill, BsGraphUp, BsChatLeftTextFill, BsFillBellFill } from "react-icons/bs";
import imgProfile from '../imgs/profile.jpg'

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

const BoxTopIcons = styled.div`
    width: 42%;
    height: 100%;
    // background-color: pink;
    margin-right:8%;
    display: flex;
    align-items: center;
    
    `;
const BoxButtonUpgrade = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    // background-color: purple;
    height: 100%;
    width: 30%;
    margin-right: 2%;
    `;

const ButtonUpgrade = styled.button`
    width:150px;
    height: 40px;
    border-radius: 100px;
    font-size: 15px;
    color: green;
    -webkit-box-shadow: 0px 0px 5px 2px rgb(73,169,90);
    border: 1px solid rgb(73,169,90);
    Font-family: MS Sans Serif, sans-serif;

    &:hover{
      background-color: rgb(73,169,90);
      color: white;
      cursor: pointer;
    }
    `;

const BoxBottomIcons = styled.div`
    width: 110%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    
    `;

const IconsButtons = styled.div`
    margin-left: 15px; 
    margin-right: 15px; 
    &:hover{
      cursor: pointer;
    }

    `;

const ProfileBox = styled.div`
    display: grid;
    grid-template-columns: 1fr 0.4fr;
    width: 400px;
    height: 100%;

    
    `;

const ProfileBoxImg = styled.div`
display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 95%;



    `;
const ProfileBoxInfo = styled.div`

    width: 100%;
    height: 100%;
    display: flex;
    justify-content: right;
    align-items: center;


    `;

const ProfileInfo = styled.div`
    text-align: center;
    h3{
      font-weight: none;
      font-size: 12px;
      margin: 0;
    }
    p{
      font-size: 12px;
      text-decoration: none;
      margin: 0;
      color: #808080;
    };

    span{
      color: #e07f1f;
    }
        `;



export default function TopBar() {
  return (
    <Container>
      <Infos>
        <Title>DashBoard</Title>
        <BoxTopIcons>
          <BoxButtonUpgrade><ButtonUpgrade>UPGRADE</ButtonUpgrade></BoxButtonUpgrade>
          <BoxBottomIcons>
            <IconsButtons><BsRssFill color='rgb(73,169,90)' style={{ width: '27px', height: '27px' }} /></IconsButtons>
            <IconsButtons> <BsGraphUp color='rgb(73,169,90)' style={{ width: '27px', height: '27px' }} /></IconsButtons>
            <IconsButtons><BsChatLeftTextFill color='rgb(73,169,90)' style={{ width: '27px', height: '27px' }} /></IconsButtons>
            <IconsButtons><BsFillBellFill color='rgb(73,169,90)' style={{ width: '27px', height: '27px' }} /></IconsButtons>
          </BoxBottomIcons>
          <ProfileBox>
            <ProfileBoxInfo>
              <ProfileInfo>
                <h3>Paulo André Cardeal</h3>
                <p>Plano 90"
                  <span>Bronze</span></p>
              </ProfileInfo>

            </ProfileBoxInfo>
            <ProfileBoxImg><img src={imgProfile} style={{ width: '40px', borderRadius: '50px', border: '2px solid #e07f1f' }} /></ProfileBoxImg>
          </ProfileBox>
        </BoxTopIcons>
      </Infos>

    </Container>

  )
}
