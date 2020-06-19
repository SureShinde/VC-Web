import React from 'react';
import './headtop.css'
import Footer from './footer';
import Navigation from './navbar';
import { Link } from 'react-router-dom';
let HeadTop=()=>{
  return(

   
    <section >
 <div>
                                
 <Navigation />
                                </div>
    <div className="container">
        <div className="block-title text-center">
        <h3 className="block-title__title block-title__dark-color">Appointments</h3>
        <h1 className="block-title__title block-title__dark-color">Coming soon!</h1>
           
        </div>
        
    </div>
    <div>
                                
                                <Footer />
                                </div>
</section>

  )
}

export default HeadTop;
