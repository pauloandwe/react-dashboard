import React from 'react'
import styled from 'styled-components';
import Grafics from './Grafics/GraficCircle';
import GraficColumn from './Grafics/GraficColumn';
import GraficPizza from './Grafics/GraficPizza';

const DashBoardPageContainer = styled.div`
  margin: 0;
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: #e9e9e9;
  grid-area: 2 / 2 / 2 / 2 ;
  `;

const TableDashBoard = styled.div`
    background-color: white;
    margin: 20px;
    `;

const TableDashBoardFirst = styled.div`    
    display: grid;
    width: 100%;
    display:grid
    grid-template-area:
    "est1 est2 est3 est4";
    grid-template-rows: 200px;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    // background-color:rgb(03,109,00);
    z-index:1;
    `;


const TableDashBoardSecundary = styled.div`   
    display: grid;
    width: 100%;
    grid-template-rows: 250px 250px ;
    grid-template-columns: 1fr 1fr 1fr;
    // background-color:rgb(73,169,90);
    z-index:1;
    `;

const TableDashBoardTerceary = styled.div`   
    display: grid;
    width: 100%;
    grid-template-rows: 250px;
    grid-auto-rows: 250px;
    grid-template-columns: 1fr 1fr 1fr;
    // background-color:rgb(73,169,90);
    z-index:1;

    `;

const CircleEstatistic = styled.div`
    background-color: white;
    margin: 20px;
    -webkit-box-shadow: 0px 0px 10px 2px #dcdcdc;
`;

const BlockEstatistic1 = styled.div`
    background-color:white;
    margin: 20px;
    -webkit-box-shadow: 0px 0px 10px 2px #dcdcdc;
    `;

const BlockEstatistic2 = styled.div`
    background-color:white;
    grid-area: 2;
    margin: 20px;
    -webkit-box-shadow: 0px 0px 10px 2px #dcdcdc;
    `;

const BlockEstatistic3 = styled.div`
    background-color:white;
    margin: 20px;
    -webkit-box-shadow: 0px 0px 10px 2px #dcdcdc;
    `;

const PizzaEstatistic = styled.div`
    background-color:white;
    grid-row: span 2;
    margin: 20px;
    -webkit-box-shadow: 0px 0px 10px 2px #dcdcdc;
    `;

export default function DashBoard() {
    return (

        <DashBoardPageContainer>
            <TableDashBoard>

                <TableDashBoardFirst>

                    <CircleEstatistic><Grafics /></CircleEstatistic>
                    <CircleEstatistic><Grafics /></CircleEstatistic>
                    <CircleEstatistic><Grafics /></CircleEstatistic>
                    <CircleEstatistic><Grafics /></CircleEstatistic>

                </TableDashBoardFirst>

                <TableDashBoardSecundary>

                    <BlockEstatistic1><GraficColumn /></BlockEstatistic1>
                    <BlockEstatistic1><GraficColumn /></BlockEstatistic1>
                    <BlockEstatistic2><GraficColumn /></BlockEstatistic2>
                    <BlockEstatistic2><GraficColumn /></BlockEstatistic2>
                    <PizzaEstatistic><GraficPizza /></PizzaEstatistic>

                </TableDashBoardSecundary>

                <TableDashBoardTerceary>

                    <BlockEstatistic3><GraficColumn /></BlockEstatistic3>
                    <BlockEstatistic3><GraficColumn /></BlockEstatistic3>
                    <BlockEstatistic3><GraficColumn /></BlockEstatistic3>


                </TableDashBoardTerceary>

            </TableDashBoard>
        </DashBoardPageContainer>
    )
}
