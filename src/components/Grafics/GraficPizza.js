import React, { useState } from 'react'
import ReactApexChart from 'react-apexcharts';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 95%;
  padding-top: 20px;
`;

const Informations = styled.h1`

color: #191919;
font-size:20px;
margin:0;
margin-left:10px;
Font-family: MS Sans Serif, sans-serif;
text-shadow: #999 0.5px 1px 1px;

`;

const Grafic = styled.div`
margin-top: 40px;
display:flex;

justify-content: center;
`;

const InformationsData = styled.div`
font-size:10px;
margin-left: 20px;
Font-family: MS Sans Serif, sans-serif;
color: #191919;
margin-top: 65px;
`;

export default function GraficPizza() {


    const randomNumberStatistic1 = Math.floor(Math.random() * 100);
    const randomNumberStatistic2 = Math.floor(Math.random() * 100);
    const randomNumberStatistic3 = Math.floor(Math.random() * 100);

    const [state, setState] = useState({
        series: [randomNumberStatistic1, randomNumberStatistic2, randomNumberStatistic3],
        options: {
            stroke: {
                width: 0,
            },
            chart: {
                width: 380,
                type: 'pie',
            },

            colors: ['#2e8552', '#49a95a', '#4c4c4c'],
            labels: ['Status1', 'Status2', 'Status3'],
            responsive: [{
                breakpoint: 480,
                options: {
                    chart: {
                        width: 200
                    },
                }
            }],
            legend: {
                position: 'bottom',
                horizontalAlign: 'center',
                offsetY: 0,
                offsetX: 0,
                fontSize: '12px',
            }
        },
    });

    return (
        <Container>
            <Informations>Grafico de pizza</Informations>
            <Grafic>
                <ReactApexChart options={state.options} series={state.series} type="pie" width={380} />
            </Grafic>
            <InformationsData>06/03/2007</InformationsData>
        </Container>
    )
}
