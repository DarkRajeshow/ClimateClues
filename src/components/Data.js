import React, { useContext , useState} from 'react'
import TodayOverview from './TodayOverview'
import '@fortawesome/fontawesome-free/css/all.min.css';
import CityNotfound from './CityNotfound';
import Spinner from './Spinner';
import LineChart from './LineChart';
import InternetError from './InternetError';
import { Contexts } from '../App';


export default function Data() {

  const { tempList, returnDay, getWeatherData, status, loading, hasInternet, city, setCity } = useContext(Contexts)

  const [tempCityName, setTempCityName] = useState(city);
  const handleChange = (event) => {
    const newCity = event.target.value;
    setTempCityName(newCity);
  };

  return (
    <div className='mt-16 xl:mt-0 h-auto sm:h-screen bg-slate-800 xl:col-start-3 xl:col-end-10 md:col-start-1 md:col-end-9 min-[320px]:col-span-full data_class p-2 sm:p-5'>
      <div className="topHeader flex items-center flex-col sm:flex-row">
        <div className="topHeaderText sm:w-[40%] flex sm:block items-center">
          <div className="dayDetails sm:text-2xl min-[320px]:text-lg mr-2 sm:mr-0">{returnDay.day}</div>
          <div className="dateDetails sm:text-base min-[320px]:text-sm">{returnDay.date_String}</div>
        </div>
        <div className="topHeaderSerach">
          <div className="flex items-center">
            <label htmlFor="voice-search" className="sr-only"></label>
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
              </div>
              <input onKeyDown={(event) => {
                if (event.key === "Enter") {
                  setCity(tempCityName);
                  getWeatherData();
                }
              }} type="text" id="voice-search" className="SearchCity bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2 sm:py-2.5 sm:px-3p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search city..." required value={tempCityName} onChange={handleChange} />
            </div>
            <button className="inline-flex items-center p-2 sm:py-2.5 sm:px-3 ml-2 text-sm font-medium text-white bg-black rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-black dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={()=>{
              setCity(tempCityName);
              getWeatherData();
            }} >
              <svg aria-hidden="true" className="w-5 h-5 -ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            </button>

          </div>
        </div>
      </div>

      {/* Spinner will be displayed when the loading is done by making the spinner component display block intially it was nones */}
      <Spinner />
      {(status && !loading) && <TodayOverview />}

      {(!status && !loading) && <CityNotfound />}

      {(!hasInternet && !loading) && <InternetError />}


      {tempList && <LineChart data={tempList} />}
    </div>
  )
}

