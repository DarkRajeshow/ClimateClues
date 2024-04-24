import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Contexts } from '../App';

export default function NavBarMobile() {

    const { setProgress } = useContext(Contexts);

    let setOutTheBar = () => {
        setProgress(0);
        setProgress(100);
    }
    
    return (
        <>
            <nav className="navBar-2 z-10 fixed w-full bg-slate-400 text-gray-600 flex xl:hidden ">
                <div className="menu flex">
                    <div className="logo-ani-2 flex">
                        <i className="fa-solid fa-cloud-bolt text-4xl m-3"></i>
                    </div>
                    <div className="mx-2 font-bold items-center list-none flex">
                        <Link to="/ClimateClues" className='flex mr-5'><li className='' onClick={setOutTheBar}>Dashboard</li></Link>
                    </div>
                </div>
            </nav>
        </>
    )
}