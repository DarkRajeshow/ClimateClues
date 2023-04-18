// to include style sheet
import './App.css';

// to use react 
import React, { useState, useEffect } from 'react'

//to get the country names by using short forms
import countries from "i18n-iso-countries";

//to import NavBar component
import NavBar from './conponents/NavBar';

//to import Data component
import Data from './conponents/Data';

//to import HighLights component
import HighLights from './conponents/HighLights'

//to import and use top loading bar component
import LoadingBar from 'react-top-loading-bar';

//to use react router
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import About from './conponents/About';
import NavBarMobile from './conponents/NavBarMobile';

//i don't know the use of this but this line is very important
countries.registerLocale(require("i18n-iso-countries/langs/en.json"));


function App() {
  // all the required states
  let [city, setCity] = useState("Solapur");
  let [temp, setTemp] = useState();
  let [description, setDescription] = useState();
  let [wind, setWind] = useState();
  let [weatherStatus, setWeatherStatus] = useState();
  let [pressure, setPressure] = useState();
  let [humidity, setHumidity] = useState();
  let [country, setCountry] = useState();
  let [weatherIcon, setWeatherIcon] = useState();
  let [rainChances, setRainChances] = useState();
  let [tempList, setTempList] = useState(false);
  let [status, setStatus] = useState(true);
  let [loading, setLoading] = useState(false);
  let [topLoading, setTopLoading] = useState(0);
  let [time, setTime] = useState()

  let apiKey = process.env.REACT_APP_API;

  // create a date object and getting the current date and day
  let date = new Date();

  let fullOption = {
    month: "long",
    day: "numeric",
    year: "numeric"
  }
  let dayOption = {
    weekday: "long"
  }
  let chatDayOptions = {
    day: "numeric",
    month: "long"
  }

  //to get just day 
  let day = date.toLocaleDateString("en-US", dayOption);

  //for full date ie. date/month/year 
  let date_String = date.toLocaleDateString("en-US", fullOption);
  let returnDay = { day, date_String };
  const localDateString = date.toLocaleDateString('en-CA', { year: '2-digit', month: '2-digit', day: '2-digit' }).replace(/\//g, '-');


  //to set the the toploading bar progress when feteching of data is done
  let setProgress = (progress) => {
    setTopLoading(progress);
  }

  //to get the data when someone click on search button
  let getWeatherData = async () => {
    setCity(document.querySelector(".SearchCity").value);
    setProgress(0);
    upDateData();
    setProgress(100);
  }

  //To update the data whenever we want 
  let upDateData = async () => {

    //these are used to display the appropreate component on the screen
    setStatus(true);
    setLoading(true);
    setTempList(false);

    //this is used to get the top loading bar progress as progress 0 because the fetching of data has not begin yet 
    setProgress(0);

    //this line of code is used to display the leading animation component
    document.querySelector("#con").style.display = "block";

    //now the main part comes in below lines we are fetching the data and converting that data into json format using .json() method
    let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${document.querySelector(".SearchCity").value === "" ? "Solapur" : document.querySelector(".SearchCity").value}&units=metric&appid=${apiKey}`;

    let dataUnparsed = await fetch(apiUrl);

    //uptill now fetching of data is done so set progress as 70%
    setProgress(70);

    let parsedData = await dataUnparsed.json();

    //to check wheather the data is recieved or not cod == 200 means the code is recieved successfully
    //if data is not recieved then below if block code will run
    if (parsedData.cod !== "200") {
      setStatus(false);
    }

    //if the data get recieved then below else block code will run 
    else {
      //to filter the today's data by 3 hour's of interval
      let todaysData = await parsedData.list.filter(item => item.dt_txt.includes(localDateString));

      //to store the percentage of pricipitaion ie. POP in the array of todayPOP to display the chance of rain today for every 3 hour interval
      let todaysPOP = [];

      //to store the temperature data for the 5 days
      let tempData = []

      //to store the temperature date of the temperature which has been store in the tempData
      let tempDay = []

      // to store the datewise data into tempData and tempDay array
      let check = parsedData.list[0].dt;
      await parsedData.list.forEach(element => {
        if (element.dt === check) {
          tempData.push(Math.floor(element.main.temp))
          tempDay.push(new Date(check * 1000).toLocaleDateString("en-US", chatDayOptions));
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
          label: "Temprature in °C",
          data: tempData,
          borderColor: "#2b4c81",
          pointBorderWidth: 5,
          borderWidth: 5,
          tension: 0.3,
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

  // this is useEffect method it will run when the component first time mount inside the useEffect the upDateData fuciont is there which will update the current of data weather of solapur city
  useEffect(() => {
    upDateData();

    // the below comment is used to stop the unnecessary errors 
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  return (
    <>
      <Router>
        {/* this is under the router element  */}
        {/* this is used to add the toploading bar and to add the style to the top loading bar */}
        <LoadingBar
          color='linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)'
          height={3}
          progress={topLoading}
          onLoaderFinished={() => setProgress(0)}
        />

        {/* to set the component */}
        <div className="grid grid-cols-12">
          <NavBarMobile setProgress={setProgress} />
          <NavBar setProgress={setProgress} />
          <Routes>
            <Route path='/ClimateClue' element={[<Data key="Data" tempList={tempList} city={city} day={returnDay} getWeatherData={getWeatherData} temp={temp} description={description} wind={wind} pressure={pressure} humidity={humidity} weatherStatus={weatherStatus} status={status} loading={loading} />, <HighLights key="HighLights" dateTime={time} city={city} getWeatherData={getWeatherData} temp={temp} description={description} weatherStatus={weatherStatus} country={country} weatherIcon={weatherIcon} todaysPOP={rainChances} />]}></Route>

            <Route path='/ClimateClue/about' element={[<About key={1} setProgress={setProgress} />]}></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

//to export the the app to the main HTML file
export default App;

// handleSubmit={handleSubmit} handleChange={handleChange} resetTranscript={resetTranscript} handleVoiceSearch={""} 