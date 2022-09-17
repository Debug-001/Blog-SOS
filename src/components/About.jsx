import React from 'react'
import Image from '../assets/mb.png'


function About() {
    return (
        <div class="container-fluid mt-5 about-style" id="ideathon">
            <div class="row">
                <div class="col-md-10 col-12 mx-auto">
                    <h1 class="text-center main-heading">School Of Sciences</h1>
                   
                    <div class="row">
                        <div class="col-md-6 col-12 hero-text ">
                            <figure>
                                <img src={Image} className="top-image" style={{"width":"65%", "margin-left":"6rem", "margin-top":"10rem"}} alt="herosection_image" />
                            </figure>
                        </div>

                        <div class="col-md-6 col-12 hero-text  d-flex justify-content-center align-items-start flex-column">
                            <h1 style={{"margin-top":"6rem"}}>MOBILE-SHIKSHA</h1>

                            <p><span class="bold-style">Greetings from School of Sciences,  CHRIST (Deemed to be University) Delhi NCR. </span>

This is to inform you that the School of sciences is conducting an Awareness Activity for supporting staff "MOBILE-SHIKSHA " on 17 September 2022 at 01:30 PM (Indian Standard Time). The training will be delivered by the BCA students.  

• Venue - Block A , First Floor, Computer Lab 
• Date - 17th September 2022
• Time - 01:30 PM onwards

                            </p>
                            <button class="btn-style btn-primary"  onClick={(e) => { e.preventDefault(); window.location.href='https://docs.google.com/forms/d/e/1FAIpQLSdJmKi2SWWRbUDn1SZo_iD-turNw4c73TF3EQsRQ5oEyTdSVw/viewform';}}>Read more</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
