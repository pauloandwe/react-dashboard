import React, { useState } from 'react'
import ReactApexChart from 'react-apexcharts';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 10px;

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
width: 98%;
`;
const InformationsData = styled.div`
font-size:10px;
margin-left: 20px;
Font-family: MS Sans Serif, sans-serif;
color: #191919;
`;


export default function GraficColumn() {
    const RNJA = Math.floor(Math.random() * 500) + 500;
    const RNFE = Math.floor(Math.random() * 450) + 550;
    const RNMR = Math.floor(Math.random() * 400) + 600;
    const RNAB = Math.floor(Math.random() * 350) + 650;
    const RNMI = Math.floor(Math.random() * 350) + 650;
    const RNJN = Math.floor(Math.random() * 300) + 700;
    const RNJL = Math.floor(Math.random() * 200) + 800;
    const RNAG = Math.floor(Math.random() * 200) + 800;
    const RNSE = Math.floor(Math.random() * 300) + 700;
    const RNOU = Math.floor(Math.random() * 300) + 700;
    const RNNO = Math.floor(Math.random() * 400) + 600;
    const RNDE = Math.floor(Math.random() * 500) + 500;
    const [state, setState] = useState({
        series: [{

            name: "sales",
            data: [{
                x: '',
                y: RNJA
            }, {
                x: '',
                y: RNFE
            }, {
                x: '',
                y: RNMR
            }, {
                x: '',
                y: RNAB
            }, {
                x: '',
                y: RNMI
            }, {
                x: '',
                y: RNJN
            }, {
                x: '',
                y: RNJL
            }, {
                x: '',
                y: RNAG
            },{
                x: '',
                y: RNSE
            },{
                x: '',
                y: RNOU
            },{
                x: '',
                y: RNNO
            },{
                x: '',
                y: RNDE
            },],

        }],
        options: {
            plotOptions: {
                bar: {
                  borderRadius: 2,
                  dataLabels: {
                    position: 'bottom', // top, center, bottom
                  },
                }
              },
              dataLabels: {
                enabled: true,
                style: {
                  fontSize: '10px',
                  colors: ["white"]
                }
              },
            grid: {
                xaxis: {
                    lines: {
                        show: false
                    }
                },
                yaxis: {
                    lines: {
                        show: false
                    }
                }
            },
            xaxis: {
                tickPlacement: 'off'
            },
            chart: {
                type: 'bar',
                height: 380,
                toolbar: {
                    show: false
                },
            },
            fill: {
                colors: ['rgb(73,169,90)'],
            },

            dropShadow: {
                enabled: true,
            },
            yaxis: {
                axisBorder: {
                    show: false
                },
                axisTicks: {
                    show: false,
                },
                labels: {
                    show: false,
                    formatter: function (val) {
                        return val;
                    }
                }
            },

            xaxis: {
                type: 'category',
                group: {
                    style: {
                        fontSize: '10px',
                        fontWeight: 700
                    },
                }
            },
        },
    });



    return (
        <Container>
            <Informations>Grafico de vendas</Informations>
            <Grafic><ReactApexChart options={state.options} series={state.series} type="bar" height={140} /></Grafic>
            <InformationsData>06/03/2007</InformationsData>
        </Container>
    )
}
