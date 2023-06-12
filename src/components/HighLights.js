import React, { useContext } from 'react'
import ProgressBar from './ProgressBar';
import { Contexts } from '../App';


export default function HighLights() {
  const { time, city, temp, description, country, weatherIcon, rainChances } = useContext(Contexts);

  return (
    <div className='bg-white min-[320px]:mt-20 xl:mt-0 xl:col-start-10 xl:col-end-13 md:col-start-9 md:col-end-13 min-[320px]:col-span-full highlight_class'>
      <div className="headerInfo flex p-10 justify-between">
        <div className="textHeader ">
          <h3 className='font-semibold text-2xl'>{city.toUpperCase()}</h3>
          <p className='font-semibold text-xl'>{country}</p>
        </div>
        <div className="timeBar">
          <p className='font-semibol text-xl'>{time}</p>
        </div>
      </div>
      <div className="tempReport px-10">
        <img src={weatherIcon} className='h-20' />
        <div className="temp flex pb-5 justify-between">
          <h3 className='font-normal lg:text-5xl min-[320px]:text-3xl'>{Math.round(temp)}° C</h3>
          <p className='font-semibold text-2xl w-32 sm:text-xl text-right'>{description}</p>
        </div>
      </div>
      <div className="progressBar">
        <h3 className='font-semibold text-xl pb-3 pt-7 px-6 text-center'>Chance Of Rain</h3>
        {rainChances && (rainChances).map((item, idx) => {
          return <div key={idx} className="singleChance grid grid-cols-9 gap-2 px-5 items-center">
            <p className='col-span-2 text-sm font-semibold'>{item.time}</p>
            <ProgressBar bgcolor={"#8cb2fb"} completed={item.POP} />
          </div>
        })}
      </div>
    </div>
  )
}
