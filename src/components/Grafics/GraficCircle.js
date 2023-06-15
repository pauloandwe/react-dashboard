
import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import styled from 'styled-components';

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  height: 100%; 
  
`;

const BoxInformations = styled.div`
display: grid;
`;

const InformationsTitle = styled.h1`
  font-size: 15px;
  display: flex;
  justify-content: center;
  margin-bottom:0;
  Font-family: MS Sans Serif, sans-serif;
  text-shadow: #999 0.5px 1px 1px;
`;

const InformationsPorcentage = styled.h1`
  display: flexbox;
  justify-content: center;
  align-items: center;
  margin:0;
  font-size:60px;
  font-weight: bold;
  Font-family: MS Sans Serif, sans-serif;
  text-shadow: #999 1px 2px 2px;
`;

const InformationsData = styled.p`
  font-size:10px;
  display: flex;
  justify-content: center;
  Font-family: MS Sans Serif, sans-serif;
  


`;

const BoxGrafic = styled.div`


`;



export default function Grafics() {

  var randomNumber = Math.floor(Math.random() * 100);
  const [state, setState] = useState({

    series: [randomNumber],
    options: {
      chart: {
        height: 350,
        type: 'radialBar',
      },
      plotOptions: {
        radialBar: {
          startAngle: -135,
          endAngle: 225,
          hollow: {
            margin: 0,
            size: '70%',
            background: '#fff',
            image: undefined,
            imageOffsetX: 0,
            imageOffsetY: 0,
            position: 'front',

          },
          track: {
            background: '#dcdcdc',
            strokeWidth: '67%',
            margin: 0, // margin is in pixels
          },

          dataLabels: {
            show: true,
            name: {
              offsetY: -10,
              show: true,
              color: 'rgb(73,169,90)',
              fontSize: '10px'
            },
            value: {
              formatter: function (val) {
                return parseInt(val) + '%';
              },
              color: '#111',
              fontSize: '18px',
              show: true,
              offsetY: 0,
            }
          }
        }
      },
      fill: {
        colors: ['rgb(73,169,90)'],
      },
      stroke: {
        lineCap: 'round'
      },
      labels: ['Aumento de'],
    },


  });

  return (
    <Container>
      <BoxInformations>
        <InformationsTitle>Informations</InformationsTitle>
        <InformationsPorcentage>{state.series}</InformationsPorcentage>
        <InformationsData>06/03/2007</InformationsData>

      </BoxInformations>
      <BoxGrafic>
        <ReactApexChart
          options={state.options}
          series={state.series}
          type="radialBar"
          height={165} />
      </BoxGrafic>

    </Container>
  )
}





