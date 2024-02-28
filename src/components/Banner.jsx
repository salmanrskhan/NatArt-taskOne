import React from 'react';
import ImgThree from "../assets/img/3.png";

const Banner = () => {
  return (
    <div className='section text-center'>
        <p>INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION. </p>
        <img className='px-md-4' src={ImgThree} alt="" />
        <p className='mt-4 mb-2'>Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors</p>
        <div className='borderBtm'></div>
    </div>
  )
}

export default Banner