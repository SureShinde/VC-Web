import React from 'react';
// import { Link } from 'react-router-dom';
import './../css/style.css'

let Achievements=()=>{
  return(
    <section className="fun-fact-two">

    <div className="container">
        <div className="block-title text-center">
            <h2 className="block-title__title block-title__light-color">Our Achievements</h2>
           
        </div>
        <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="fun-fact-two__single">
                    <i className="clainc-icon-medical fun-fact-two__icon"></i>
                    <h3 className="fun-fact-two__title"><span className="counter">100</span>+</h3>
                    <p className="fun-fact-two__text">Satisfied Patients</p>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="fun-fact-two__single">
                    <i className="clainc-icon-stethoscope-1 fun-fact-two__icon"></i>
                    <h3 className="fun-fact-two__title"><span className="counter">25</span>+</h3>
                    <p className="fun-fact-two__text">Expert Doctors</p>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="fun-fact-two__single">
                    <i className="clainc-icon-electrocardiogram-inside-heart fun-fact-two__icon"></i>
                    <h3 className="fun-fact-two__title"><span className="counter">20</span>+</h3>
                    <p className="fun-fact-two__text">Repeat Patients</p>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="fun-fact-two__single">
                    <i className="clainc-icon-prize-badge-with-star-and-ribbon fun-fact-two__icon"></i>
                    <h3 className="fun-fact-two__title"><span className="counter">2</span>+</h3>
                    <p className="fun-fact-two__text">National Awards</p>
                </div>
            </div>
        </div>
    </div>
</section>

  )
}

export default Achievements;
