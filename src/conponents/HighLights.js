import React from 'react'
import ProgressBar from './ProgressBar';


export default function HighLights(props) {
  return (
    <div className='bg-white min-[320px]:mt-20 xl:mt-0 xl:col-start-10 xl:col-end-13 md:col-start-9 md:col-end-13 min-[320px]:col-span-full highlight_class'>
      <div className="headerInfo flex p-10 justify-between">
        <div className="textHeader ">
          <h3 className='font-semibold text-2xl'>{props.city.toUpperCase()}</h3>
          <p className='font-semibold text-xl'>{props.country}</p>
        </div>
        <div className="timeBar">
          <p className='font-semibol text-xl'>{props.dateTime}</p>
        </div>
      </div>
      <div className="tempReport px-10">
        <img src={props.weatherIcon} className='h-20' />
        <div className="temp flex pb-5 justify-between">
          <h3 className='font-normal lg:text-5xl min-[320px]:text-3xl'>{Math.round(props.temp)}° C</h3>
          <p className='font-semibold text-2xl w-32 sm:text-xl text-right'>{props.description}</p>
        </div>
      </div>
      <div className="progressBar">
        <h3 className='font-semibold text-xl pb-3 pt-7 px-6 text-center'>Chance Of Rain</h3>
        {props.todaysPOP && (props.todaysPOP).map((item, idx) => {
          return <div key={idx} className="singleChance grid grid-cols-9 gap-2 px-5 items-center">
            <p className='col-span-2 text-sm font-semibold'>{item.time}</p>
            <ProgressBar bgcolor={"#8cb2fb"} completed={item.POP} />
          </div>
        })}
      </div>
    </div>
  )
}
