import React from 'react';
import { Link } from 'react-router-dom';
import './../css/style.css'

let HomeAbout=()=>{
  return(
    <section className="about-three">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="about-three__content">
                            <h3 className="about-three__title">About Our Hospital</h3>
                            <p className="about-three__tag-line">Better health care with efficient cost is the main <br /> focuse of our hospital. </p>
                            <p className="about-three__text" >Virtual Clinic is a Pakistan healthcare company that brings you a greater healthcare experience. Patients can use Virtual Clinic Patient app to find nearby doctors, book doctor's appointments online, read doctors review online, and more!.</p>
                            <p className="about-three__text">Health provider can also benefit from Virtual Clinic Doctor app by optimizing doctors’ schedules and reduce no-shows. Practitioner can publicize their background as well as their expertise through Virtual clinic, strengthening their online presence to attract more patients. </p>
                            <p className="about-three__text">Virtual Clinic app has a 24/7 medical calendar system that helps patients manage their bookings online, search doctors by location, see detailed doctors profile, and get doctor's appointment reminders. </p>

                            <Link className="about-three__btn thm-btn" to="/">Learn More</Link>
                        </div>
                    </div>
                    <div className="col-lg-6 d-flex">
                        <div className="my-auto">
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-12">
                                    <div className="about-three__box">
                                        <div className="about-three__box-icon">
                                        <i class="fas fa-hospital-user text-danger"></i>
                                        </div>
                                        <h3 className="about-three__box-title"><Link  to="/">Reduce your no show</Link></h3>
                                        <p className="about-three__box-text">Your patients can make an appointment, reschedule, or cancel it, directly with a couple of clicks.</p>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12">
                                    <div className="about-three__box">
                                        <div className="about-three__box-icon">
                                            <i className="clainc-icon-operating-room"></i>
                                        </div>
                                        <h3 className="about-three__box-title"><Link  to="/">Optimize your booking</Link></h3>
                                        <p className="about-three__box-text">Patients can check your real-time availability and book an appointment with a click.</p>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12">
                                    <div className="about-three__box">
                                        <div className="about-three__box-icon">
                                            <i className="clainc-icon-microscope"></i>
                                        </div>
                                        <h3 className="about-three__box-title"><Link  to="/">Online Video Consultation</Link></h3>
                                        <p className="about-three__box-text">Start a video consultation with doctor imedately and shedule it.</p>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12">
                                    <div className="about-three__box">
                                        <div className="about-three__box-icon">
                                            <i className="clainc-icon-doctor"></i>
                                        </div>
                                        <h3 className="about-three__box-title"><Link  to="/">24/7 Dedicated Doctors</Link></h3>
                                        <p className="about-three__box-text">We have a dedicated doctor 24/7</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default HomeAbout;
