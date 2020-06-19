import React from 'react';
import './headtop.css'
import { Link } from 'react-router-dom';
let HeadTop=()=>{
  return(
    <section className="topbar-one">
            <div className="container">
                <ul className="topbar-one__contact">
                    <li className="topbar-one__contact-item"><a href="mailto:help@example.com"><i className="far fa-envelope"></i>v.virtualclinic@gmail.com</a></li>
                    <li className="topbar-one__contact-item"><a href="callto:123456789101"><i className="fas fa-phone"></i>+92 -3350338893</a></li>
                </ul>
                <div className="topbar-one__buttons">
                <Link to="/appointment" className="topbar-one__btn">Get Appointment</Link>
                   
                </div>
            </div>
        </section>
  )
}

export default HeadTop;
