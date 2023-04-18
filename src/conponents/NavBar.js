import React from 'react'
import { Link } from 'react-router-dom'
import '@fortawesome/fontawesome-free/css/all.min.css';


export default function NavBar(props) {

  let setOutTheBar = () => {
    props.setProgress(0)
    props.setProgress(100)
  }
  return (
    <>
      <nav className="navBar-1 bg-slate-400 col-start-1 col-end-3 sm:col-start-1 xl:block min-[320px]:hidden">
        <div className="menu">

          <div className="logo-ani flex">
            <i className="fa-solid fa-cloud-bolt logoImg text-5xl m-2 ml-5 my-6"></i>
            <p className="logo-text text-xl mt-6 m-2 align-middle pt-2">Climate Clues</p>
          </div>
          <div className="choices">
            <Link to="/ClimateClue" className='flex' onClick={setOutTheBar}><i className="fa-solid fa-image mr-6 mt-2 transition-all text-2xl"></i><li className='transition-all'>Dashboard</li></Link>
            <Link to="/ClimateClue" className='flex' onClick={setOutTheBar}><i className="fa-regular fa-map mr-6 mt-2 transition-all text-2xl"></i><li className='transition-all'>Maps</li></Link>
            <Link to="/ClimateClue" className='flex' onClick={setOutTheBar}><i className="fa-solid fa-location-crosshairs mr-6  mt-2  transition-all text-2xl"></i><li className='transition-all'>Something</li></Link>
            <Link to="/ClimateClue/about" className='flex' onClick={setOutTheBar}><i className="fa-regular fa-address-card mr-6 mt-2 transition-all text-2xl"></i><li className='transition-all'>About</li></Link>
          </div>
        </div>
      </nav>
    </>
  )
}