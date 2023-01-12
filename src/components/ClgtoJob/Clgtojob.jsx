import React from 'react';
import './Clgtojob.css';
import Qe from './../Queotes/Qe.js';
import Quotes from './../Queotes/Quotes.jsx';
import Step_One from './Step_One/Step_One.jsx';
import Step_two from './Step_two/Step_two.jsx';
import Step_Three from './Step_Three/Step_Three.jsx';


const Clgtojob = () => {
  return (
    <>

      <div className="parent">
        <h1> College to Dream JOB</h1>
        <p> Provide complete Roadmap F.Y TO T.Y in 3 STEP</p>
        <div className="slider">
						<div className="slide-track">
							<div className="slide">
								<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png" height="100" width="250" alt="" />
							</div>
							<div className="slide">
								<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png" height="100" width="250" alt="" />
							</div>
							<div className="slide">
								<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png" height="100" width="250" alt="" />
							</div>
							<div className="slide">
								<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png" height="100" width="250" alt="" />
							</div>
							<div className="slide">
								<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png" height="100" width="250" alt="" />
							</div>
							<div className="slide">
								<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png" height="100" width="250" alt="" />
							</div>
							<div className="slide">
								<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/7.png" height="100" width="250" alt="" />
							</div>
							<div className="slide">
								<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png" height="100" width="250" alt="" />
							</div>
							<div className="slide">
								<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png" height="100" width="250" alt="" />
							</div>
							<div className="slide">
								<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png" height="100" width="250" alt="" />
							</div>
							<div className="slide">
								<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png" height="100" width="250" alt="" />
							</div>
							<div className="slide">
								<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png" height="100" width="250" alt="" />
							</div>
							<div className="slide">
								<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png" height="100" width="250" alt="" />
							</div>
							<div className="slide">
								<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/7.png" height="100" width="250" alt="" />
							</div>
						</div>
        </div>
      
      </div>




    <div className="All_steps">

		     <div className="steps_one">
				 <Step_One />
				 </div>
				 <div className="steps_two">
				 <Step_two />
				 </div>
				 <div className="steps_three">	
					<Step_Three/>
				 </div>

		 
		
		</div>
     

    </>



	



  )
}

export default Clgtojob;