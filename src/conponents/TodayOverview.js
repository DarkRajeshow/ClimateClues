import React from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css';


export default function TodayOverview(props) {

    return (
        <>
            <div className="mainData my-6">
                <div className="mainHeadText text-xl text-left font-semibold my-3">
                    Today's Overview
                </div>
                <div className="weatherData grid grid-cols-2 gap-4">
                    <div className="wind h-20 rounded-md grid grid-cols-3">
                        <i className="dataIcon fa-solid fa-wind col-span-1"></i>
                        <div className="dataText col-span-2">
                            <div className="dataTextHeading sm:text-lg min[320px]:text-sm">Wind</div>
                            <div className="dataTextData sm:text-2xl min[320px]:text-xl">{props.wind} m/s</div>
                        </div>
                    </div>
                    <div className="rain h-20 rounded-md grid grid-cols-3">
                        <i className="dataIcon fa-solid fa-umbrella col-span-1"></i>
                        <div className="dataText col-span-2">
                            <div className="dataTextHeading sm:text-lg min[320px]:text-sm">Status</div>
                            <div className="dataTextData sm:text-2xl min[320px]:text-xl">{props.weatherStatus}</div>
                        </div>
                    </div>
                    <div className="pressure h-20  rounded-md grid grid-cols-3">
                        <i className="dataIcon fa-solid fa-cloud-showers-water col-span-1"></i>
                        <div className="dataText col-span-2">
                            <div className="dataTextHeading sm:text-lg min[320px]:text-sm">Pressure</div>
                            <div className="dataTextData sm:text-2xl min[320px]:text-xl" >{props.pressure} hPa</div>
                        </div>
                    </div>
                    <div className="uvIndex h-20 rounded-md grid grid-cols-3">
                        <i className="dataIcon fa-solid fa-droplet col-span-1"></i>
                        <div className="dataText col-span-2">
                            <div className="dataTextHeading sm:text-lg min[320px]:text-sm">Humidity</div>
                            <div className="dataTextData sm:text-2xl min[320px]:text-xl">{props.humidity} %</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
