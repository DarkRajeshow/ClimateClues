import React from 'react'
import { Line } from 'react-chartjs-2'
import { Chart as ChartJS, Ticks } from 'chart.js/auto'

export default function LineChart({ data }) {

    let options = {
        Plugin: {
            legend: false
        },
        scales: {
            x: {
                grid: {
                    display: false
                },
                ticks: {
                    font: {
                        family: 'Montserrat',
                        weight: 'bold', // Set the font weight to bold
                    },
                },
            },
            y: {
                min: Math.min(...(data.datasets[0].data)) - 4,
                max: Math.max(...(data.datasets[0].data)) + 4,

                ticks: {
                    stepSize: 2,
                    callback: (value) => value + '°C',
                    font: {
                        weight: 'bold',
                    },
                },
                grid: {
                    display: true
                },
            }

        }
    }
    return (
        <>
            <div className="lineChart ">
                <div className="mainHeadText text-xl text-left font-semibold my-3">
                    Avarage Daily Temprature
                </div>
                <div className="realChart md:w-8/12 min-[320px]:w-full m-auto">
                    <Line data={data} options={options} />
                </div>
            </div>
        </>
    )
}
