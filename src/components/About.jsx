import React from 'react'
import Image from '../assets/mb.png'


function About() {
    return (
        <div class="container-fluid mt-5 about-style">
            <div class="row">
                <div class="col-md-10 col-12 mx-auto">
                    <div id="triangle-down" class=""></div>
                    <div id="triangle-down2" class=""></div>
                    <h1 style={{ "margin-top": "-20rem", "color": "white", "text-shadow": "-3px 2px 7px #00000082", "font-size": "4rem" }} class="text-center main-heading">School Of Sciences</h1>
                    <h2 style={{ "margin-top": "20rem" }}>About</h2> <p class="subclass">
                        School of Sciences at CHRIST (Deemed to be University) Delhi- NCR has created a niche in the realm of higher education in India through its programmes. Currently, the School of Sciences offers a wide array of undergraduate courses with multiple specializations.  It offers undergraduate and doctoral programmes in the disciplines of Computer Science, Statistics & Mathematics. A dedicated research block with all the latest research facilities boosts the morale of the faculty and research scholars alike. This is an ideal place for students with a research bent of mind to explore his/her passion. Apart from academics, students are moulded holistically through various co-curricular and extracurricular activities.
                    </p>   <h1 class="text-left main-heading" id="mb">Live / Upcoming Events</h1>

                    <div class="row">
                        <div class="col-md-6 col-12 hero-text ">
                            <figure>
                                <img src={Image} className="top-image" style={{ "width": "65%", "margin-left": "6rem", "margin-top": "10rem" }} alt="herosection_image" />
                            </figure>
                        </div>
                        <div class="col-md-6 col-12 hero-text  d-flex justify-content-center align-items-start flex-column">
                            <h1 style={{ "margin-top": "6rem" }}>MOBILE-SHIKSHA</h1>

                            <p><span class="bold-">Greetings from School of Sciences,  CHRIST (Deemed to be University) Delhi NCR.

                                This is to inform you that the School of sciences is conducting an Awareness Activity for supporting staff "MOBILE-SHIKSHA " on 17 September 2022 at 01:30 PM (Indian Standard Time). The training will be delivered by the BCA students.

                                • Venue - Block A , First Floor, Computer Lab
                                • Date - 17th September 2022
                                • Time - 01:30 PM onwards
                                </span>
                            </p>
                            <button class="btn-style btn-primary" onClick={(e) => { e.preventDefault(); window.location.href = 'https://docs.google.com/forms/d/e/1FAIpQLSdJmKi2SWWRbUDn1SZo_iD-turNw4c73TF3EQsRQ5oEyTdSVw/viewform'; }}>Read more</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default About
