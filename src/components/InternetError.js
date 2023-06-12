import React from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css';


export default function InternetError() {
  return (
    <>
      <div className="container cityNotFound xl:p-40 min-[320px]:py-40 md:px-20">
        <i className="fa-regular fa-face-frown text-5xl text-blue-400"></i>
        <h3 className='text-2xl p-5 font-semibold'>Oops, Internet Connection lost!</h3>
        <p className='text-lg'>Check you internet connection and try again.</p>
      </div>
    </>
  )
}
