// to include style sheet
import './App.css';

// to use react 
import React, { useState, useEffect, lazy, Suspense, createContext } from 'react'

//to get the country names by using short forms
import countries from "i18n-iso-countries";

//to import NavBar component
import NavBar from './components/NavBar';

//to import Data component
import Data from './components/Data';

//to import HighLights component
import HighLights from './components/HighLights'

//to import and use top loading bar component
import LoadingBar from 'react-top-loading-bar';

//to use react router
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

// import About from './conponents/About';

import NavBarMobile from './components/NavBarMobile';
import Spinner from './components/Spinner';

const About = lazy(() => import('./components/About'));

//i don't know the use of this but this line is very important
countries.registerLocale(require("i18n-iso-countries/langs/en.json"));



//to create the context which contains all the variables and states
export const Contexts = createContext();

function App() {
  // all the required states which are further converted into context states.
  const [city, setCity] = useState("Solapur");
  const [temp, setTemp] = useState();
  const [description, setDescription] = useState();
  const [wind, setWind] = useState();
  const [weatherStatus, setWeatherStatus] = useState();
  const [pressure, setPressure] = useState();
  const [humidity, setHumidity] = useState();
  const [country, setCountry] = useState();
  const [weatherIcon, setWeatherIcon] = useState();
  const [rainChances, setRainChances] = useState();
  const [tempList, setTempList] = useState(false);
  const [status, setStatus] = useState(true);
  const [loading, setLoading] = useState(false);
  const [topLoading, setTopLoading] = useState(0);
  const [time, setTime] = useState();
  const [hasInternet, setInternet] = useState(true);

  const apiKey = process.env.REACT_APP_API;

  // create a date object and getting the current date and day
  const date = new Date();

  const fullOption = {
    month: "long",
    day: "numeric",
    year: "numeric"
  }
  const dayOption = {
    weekday: "long"
  }
  const chatDayOptions = {
    day: "numeric",
    month: "long"
  }

  //to get just day 
  const day = date.toLocaleDateString("en-US", dayOption);

  //for full date ie. date/month/year 
  const date_String = date.toLocaleDateString("en-US", fullOption);
  const returnDay = { day, date_String };
  const localDateString = date.toLocaleDateString('en-CA', { year: '2-digit', month: '2-digit', day: '2-digit' }).replace(/\//g, '-');


  //to set the the toploading bar progress when feteching of data is done
  const setProgress = (progress) => {
    setTopLoading(progress);
  }

  //to get the data when someone click on search button
  const getWeatherData = async () => {
    setCity(document.querySelector(".SearchCity").value);
    upDateData();
  }

  //To update the data whenever we want 
  const upDateData = async () => {

    //these are used to display the appropreate component on the screen
    setStatus(true);
    setLoading(true);
    setTempList(false);

    //this is used to get the top loading bar progress as progress 0 because the fetching of data has not begin yet 
    setProgress(0);

    //this line of code is used to display the leading animation component
    document.querySelector("#con").style.display = "block";

    setProgress(30);
    //now the main part comes in below lines we are fetching the data and converting that data into json format using .json() method
    const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${document.querySelector(".SearchCity").value === "" ? "Solapur" : document.querySelector(".SearchCity").value}&units=metric&appid=${apiKey}`;

    const dataUnparsed = await fetch(apiUrl);

    //uptill now fetching of data is done so set progress as 70%
    setProgress(70);

    const parsedData = await dataUnparsed.json();

    //to check wheather the data is recieved or not cod == 200 means the code is recieved successfully
    //if data is not recieved then below if block code will run
    if (parsedData.cod !== "200") {
      setStatus(false);
    }

    //if the data get recieved then below else block code will run 
    else {
      //to filter the today's data by 3 hour's of interval
      const todaysData = await parsedData.list.filter(item => item.dt_txt.includes(localDateString));

      //to store the percentage of pricipitaion ie. POP in the array of todayPOP to display the chance of rain today for every 3 hour interval
      const todaysPOP = [];

      //to store the temperature data for the 5 days
      const tempData = []

      //to store the temperature date of the temperature which has been store in the tempData
      const tempDay = []

      // to store the datewise data into tempData and tempDay array
      let check = parsedData.list[0].dt;
      await parsedData.list.forEach(element => {
        if (element.dt === check) {
          tempData.push(Math.floor(element.main.temp))
          tempDay.push((new Date(check * 1000).toLocaleDateString("en-US", chatDayOptions).slice(0, 4) + "." + (new Date(check * 1000).toLocaleDateString("en-US", chatDayOptions).slice((new Date(check * 1000).toLocaleDateString("en-US", chatDayOptions).length - 4)))));
          check += 86400;
        }
      });

      //to store the POP data and time of POP data
      await todaysData.forEach(element => {
        if (todaysPOP.length <= 4) {
          todaysPOP.push({ time: Number(element.dt_txt.slice(11, 13)) > 12 ? (Number(element.dt_txt.slice(11, 13)) % 12) + ":00 PM" : element.dt_txt.slice(11, 13) + ":00 AM", POP: (Math.round(element.pop * 100)) });
        }
        setTime(todaysPOP[0].time);
      });

      //to set the POP data to rainChance state
      setRainChances(todaysPOP)

      //to set the all the required styling and data of temp and date for each day
      setTempList({
        labels: tempDay,
        datasets: [{
          label: "°C",
          data: tempData,
          pointBackgroundColor: "black",
          pointBorderWidth: 4,
          pointRadius: 3,
          pointHoverRadius: 8,
          borderColor: "black",
          borderWidth: 3,
          tension: 0.5,
          fill: false,
        }]
      });


      //following all are the data of time list which is most nearest data to current time when we fetch
      //to set the temperature for current time
      setTemp(parsedData.list[0].main.temp);

      //to set the description for the weather and make the first letter of the description uppercase
      setDescription((parsedData.list[0].weather[0].description).charAt(0).toUpperCase() + parsedData.list[0].weather[0].description.slice(1));

      //to set the pressure data using weather data 
      setPressure(parsedData.list[0].main.pressure);

      //to set the wind speed and to display it into the Data component
      setWind(parsedData.list[0].wind.speed);

      //to set the one word status of the weather 
      setWeatherStatus((parsedData.list[0].weather[0].main).charAt(0).toUpperCase() + parsedData.list[0].weather[0].main.slice(1))

      //to set the Humidity / moisture % of the city 
      setHumidity(parsedData.list[0].main.humidity);

      //to find the country name using the api and "i18n-iso-countries" package, the package is used to get he full name of the country beacuse we only get the short name of the country for example we get IN from the api and then we will pass IN as input to getName so we will get the full name of the country
      setCountry(countries.getName(`${parsedData.city.country}`, 'en'));

      //this is used to get the appropreate icon as per the weathe condition, the icons are officially published by the open weather 
      setWeatherIcon(`https://openweathermap.org/img/w/${parsedData.list[0].weather[0].icon}.png`)

      //this means the data deployment and rendering is done successfully so the value of status should be true 
      setStatus(true);
    }

    //as loading and feting and deployment has done so set progress as 100% and set loading as false
    setProgress(100);
    setLoading(false);

    //this line of code is used to hide the leading animation component
    document.querySelector("#con").style.display = "none"
  }

  // this is useEffect method it will run when the component first time mount inside the useEffect the upDateData function is exist which will update the current weather data of solapur city
  useEffect(() => {
    try {
      upDateData();
      setLoading(false);
      setInternet(true);
    }
    catch (error) {
      setLoading(false);
      setInternet(false);
      console.log("Error : ");
    }
    // the below comment is used to stop the unnecessary errors 
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  return (
    <>
      <Contexts.Provider value={{ city, setCity, temp, setTemp, description, setDescription, wind, setWind, weatherStatus, setWeatherStatus, pressure, setPressure, humidity, setHumidity, country, setCountry, country, setCountry, weatherIcon, setWeatherIcon, rainChances, setRainChances, tempList, setTempList, status, setStatus, loading, setLoading, topLoading, setTopLoading, time, setTime, hasInternet, setInternet, setProgress, returnDay, getWeatherData }}>

        {/* this is under the router element  */}
        {/* this is used to add the toploading bar and to add the style to the top loading bar */}
        <LoadingBar
          color='linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)'
          height={3}
          progress={topLoading}
          onLoaderFinished={() => setProgress(0)}
        />

        <div className="grid grid-cols-12">
          <NavBarMobile />
          <NavBar />
          <Suspense fallback={<Spinner />}>
            <Routes>
              <Route path='/ClimateClues' element={[<Data key={1} />, <HighLights key={2} />]}></Route>
              <Route path='/ClimateClues/about' element={<About />}></Route>
            </Routes>
          </Suspense>
        </div>
      </Contexts.Provider>
    </>
  );
}

function MainApp() {
  return (
    <Router>
      <App />
    </Router>
  )
}


//to export the the app to the main HTML file
export default MainApp;

// handleSubmit={handleSubmit} handleChange={handleChange} resetTranscript={resetTranscript} handleVoiceSearch={""} 
