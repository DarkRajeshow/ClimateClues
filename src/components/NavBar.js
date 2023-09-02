import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Contexts } from '../App';

export default function NavBar() {

  const { setProgress } = useContext(Contexts);

  let setOutTheBar = () => {
    setProgress(0);
    setProgress(70)
    setProgress(100);
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
            <Link to="/ClimateClues" className='flex items-center' onClick={setOutTheBar}><i className="fa-solid fa-image mr-2 transition-all text-2xl"></i><li className='transition-all'>Dashboard</li></Link>
            {/* <Link to="/ClimateClues" className='flex' onClick={setOutTheBar}><i className="fa-regular fa-map mr-6 mt-2 transition-all text-2xl"></i><li className='transition-all'>Maps</li></Link>
            <Link to="/ClimateClues" className='flex' onClick={setOutTheBar}><i className="fa-solid fa-location-crosshairs mr-6  mt-2  transition-all text-2xl"></i><li className='transition-all'>Something</li></Link> */}
            <Link to="/ClimateClues/about" className='flex items-center' onClick={setOutTheBar}><i className="fa-regular fa-address-card mr-2 transition-all text-2xl"></i><li className='transition-all'>About</li></Link>
          </div>
        </div>
      </nav>
    </>
  )
}