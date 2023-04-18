import React from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css';


export default function CityNotfound(props) {
  return (
    <>
      <div className="container cityNotFound xl:p-40 min-[320px]:py-40 md:px-20">
        <i className="fa-regular fa-face-frown text-5xl text-blue-400"></i>
        <h3 className='text-2xl p-5 font-semibold'>Oops, No Results Found!</h3>
        <p className='text-lg'>It's because the city with name <strong>"{props.city}"</strong> does not exist, check the spelling and try again.</p>
      </div>
    </>
  )
}
