import React, { useContext } from 'react'
import ProgressBar from './ProgressBar';
import { Contexts } from '../App';


export default function HighLights() {
  const { time, city, temp, description, country, weatherIcon, rainChances } = useContext(Contexts);

  return (
    <div className='relative bg-white min-[320px]:mt-10 xl:mt-0 xl:col-start-10 xl:col-end-13 md:col-start-9 md:col-end-13 min-[320px]:col-span-full highlight_class'>
      <div className="headerInfo flex px-3 py-8 font-medium sm:p-10 items-start justify-between">
        <div className="textHeader ">
          <h3 className='font-semibold text-2xl'>{city.toUpperCase()}</h3>
          <p className='font-semibold text-xl'>{country}</p>
        </div>
        <div className="timeBar">
          <p className='font-semibol text-xl'>{time}</p>
        </div>
      </div>
      <div className="tempReport mx-3 sm:mx-10 flex items-end justify-between border-b-2 pb-5">
        <div className="text-green-400 ">
          <img src={weatherIcon} className='h-10 sm:h-20' />
          <h3 className='font-bold lg:text-5xl min-[320px]:text-3xl'>{Math.round(temp)}° C</h3>
        </div>
        <div>
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

      <div className='xl:hidden absolute bottom-5 p-2 text-xs font-semibold text-center w-full'>Made with ❤️ heart by <br /><a className='text-orange-300' target='_blank' href='https://rajesh2004.vercel.app/'>©️Rajesh Adeli</a></div>
    </div >

  )
}
