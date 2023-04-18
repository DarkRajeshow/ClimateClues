import React from 'react'
import { Link } from 'react-router-dom'
import '@fortawesome/fontawesome-free/css/all.min.css';


export default function NavBarMobile(props) {

    let setOutTheBar = () => {
        props.setProgress(0);
        props.setProgress(100);
    }
    return (
        <>
            <nav className="navBar-2 z-10 fixed w-full h-20 col-span-full bg-slate-400 xl:hidden min-[320px]:flex">
                <div className="menu flex">
                    <div className="logo-ani-2 flex">
                        <i className="fa-solid fa-cloud-bolt logoImg text-5xl m-5"></i>
                    </div>
                    <div className="choices flex">
                        <Link to="/ClimateClue" className='flex mr-10'><li className='relative bottom-3' onClick={setOutTheBar}>Dashboard</li></Link>

                        <Link to="/ClimateClue/about" className='grid grid-cols-8'><li className='relative bottom-3' onClick={setOutTheBar}>About</li></Link>
                    </div>
                </div>
            </nav>
        </>
    )
}