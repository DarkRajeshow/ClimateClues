import React from 'react'
import { Line } from 'react-chartjs-2'
import { Chart as ChartJS } from 'chart.js/auto'

export default function LineChart({ data }) {

    let mintemp = Math.min(...(data.datasets[0].data)) - 4;
    let maxtemp = Math.max(...(data.datasets[0].data)) + 4;

    let stepsizeis = Math.round((maxtemp - mintemp) / 8);
    
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
            <div className="bg-[#ebfff7] rounded-xl py-4 sm:px-12 sm:py-6">
                <div className="text-[#ff9494] text-base sm:text-xl font-semibold my-3 border-b-2 border-black text-left inline-block">
                    Future Temprature Prediction.
                </div>
                <div className="realChart w-full sm:w-[75%] m-auto">
                    <Line data={data} options={options} className=''/>
                </div>
            </div>
        </>
    )
}
