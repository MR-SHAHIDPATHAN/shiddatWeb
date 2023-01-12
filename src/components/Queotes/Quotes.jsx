import React from 'react'
import './Quotes.css'

const Quotes = (props) => {
  return (
    <div>
    <p className='dialogues'>
  
       " { props.dialogue} " 
      
    </p>



    </div>
  )
}

export default Quotes;