import React from 'react'
import { Line } from 'react-chartjs-2'
import { Pie } from 'react-chartjs-2'
import { Bar } from 'react-chartjs-2'
import { Chart as ChartJS, Ticks } from 'chart.js/auto'

export default function LineChart({ data }) {

    let mintemp = Math.min(...(data.datasets[0].data)) - 4;
    let maxtemp = Math.max(...(data.datasets[0].data)) + 4;
    console.log(mintemp, maxtemp, data.datasets[0].data);


    let stepsizeis = Math.round((maxtemp - mintemp) / 8);
    console.log(stepsizeis);
    let options = {
        responsive: true,
        Plugin: {
            legend: false
        },
        scales: {
            x: {
                grid: {
                    display: true
                },
                ticks: {
                    color: "black",
                    font: {
                        family: 'Montserrat',
                        weight: "600"
                        // weight: 'bold', // Set the font weight to bold
                    },
                },
            },
            y: {
                min: mintemp,
                max: maxtemp,
                beginAtZero: true,
                ticks: {
                    stepSize: stepsizeis,
                    callback: (value) => value + '°C',
                    color: "black",
                    font: {
                        family: 'Montserrat',
                        weight: '600',
                    },
                },
                grid: {
                    display: false
                },
            }
        }
    }
    return (
        <>
            <div className="lineChart ">
                <div className="mainHeadText text-xl font-semibold my-3 border-b-2 border-black text-left inline-block">
                    Avarage Daily Temprature
                </div>
                <div className="realChart md:w-8/12 min-[320px]:w-full m-auto">
                    <Line data={data} options={options} />
                    {/* <Bar data={data} options={options} /> */}
                </div>
            </div>
        </>
    )
}
