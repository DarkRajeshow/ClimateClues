import React, { useContext } from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Contexts } from '../App';


export default function TodayOverview() {

    const { wind, pressure, humidity, weatherStatus } = useContext(Contexts);

    return (
        <>
            <div className="mainData my-2 sm:my-6">
                <div className="mainHeadText text-lg sm:text-xl text-left font-semibold my-3">
                    Today's Overview
                </div>
                <div className="weatherData grid grid-cols-2 gap-1 sm:gap-4">
                    <div className="wind h-20 rounded-md flex items-center justify-evenly">
                        <i className="dataIcon fa-solid fa-wind"></i>
                        <div className="dataText">
                            <div className="dataTextHeading sm:text-lg min[320px]:text-sm">Wind</div>
                            <div className="dataTextData sm:text-2xl min[320px]:text-xl">{wind} m/s</div>
                        </div>
                    </div>
                    <div className="rain h-20 rounded-md flex items-center justify-evenly">
                        <i className="dataIcon fa-solid fa-umbrella"></i>
                        <div className="dataText">
                            <div className="dataTextHeading sm:text-lg min[320px]:text-sm">Status</div>
                            <div className="dataTextData sm:text-2xl min[320px]:text-xl">{weatherStatus}</div>
                        </div>
                    </div>
                    <div className="pressure h-20 rounded-md flex items-center justify-evenly">
                        <i className="dataIcon fa-solid fa-cloud-showers-water"></i>
                        <div className="dataText">
                            <div className="dataTextHeading sm:text-lg min[320px]:text-sm">Pressure</div>
                            <div className="dataTextData sm:text-2xl min[320px]:text-xl" >{pressure} hPa</div>
                        </div>
                    </div>
                    <div className="uvIndex h-20 rounded-md flex items-center justify-evenly">
                        <i className="dataIcon fa-solid fa-droplet"></i>
                        <div className="dataText">
                            <div className="dataTextHeading sm:text-lg min[320px]:text-sm">Humidity</div>
                            <div className="dataTextData sm:text-2xl min[320px]:text-xl">{humidity} %</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
