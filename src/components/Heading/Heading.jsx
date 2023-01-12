import React from 'react'
import dsa from './../../images/dsa.png';
import cpp from './../../images/c-.png';
import js from './../../images/js-file.png';
import java from './../../images/java.png';
import python from './../../images/python.png';
import react from './../../images/science.png';
import csharp from './../../images/hashtag.png';
import dotnet from './../../images/website.png';

import Qe from './../Queotes/Qe.js';
import Quotes from './../Queotes/Quotes.jsx';


import './Heading.css';

const Heading = () => {
  return (
    <>
      
      <div className="parent">
        <h1 className='text-focus-in'>Shiddat Programming Karad</h1>
        <p>No.1 Logic Building & Placement Training Center in your city </p>
          <div className="icons">
            <div className="icon rotate-center"><img src={dsa} width="40" height="40"   alt="" /></div>
            <div className="icon rotate-center"><img src={cpp} width="40" height="40"  alt="" /></div>
            <div className="icon rotate-center"><img src={js} width="40" height="40"  alt="" /></div>
            <div className="icon rotate-center"><img src={java} width="40" height="40"  alt="" /></div>
            <div className="icon rotate-center"><img src={python} width="40" height="40"  alt="" /></div>
            <div className="icon rotate-center"><img src={react} width="40" height="40"  alt="" /></div>
            <div className="icon rotate-center"><img src={csharp} width="40" height="40"  alt="" /></div>
            <div className="icon rotate-center"><img src={dotnet} width="40" height="40"  alt="" /></div>
          </div>

        <p>We Provide Complete Solution to Crack Your Dream Companies.</p>
        {/* slider */}
        <Quotes
        dialogue={Qe[0].Quotes_name}
        
         />
        
          
      </div>



    </>
  )
}

export default Heading;