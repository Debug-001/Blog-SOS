import React from 'react'
import Eve1 from '../assets/Event1.png'

const Event1 = () => {
  return (
    <div class="container-fluid mt-5 about-style" id="techgenx">
                    <div class="row">
                        <div class="col-md-6 col-12 hero-text ">
                            <figure>
                                <img src={Eve1} className="event1-icon" alt="herosection_image" />
                            </figure>
                        </div>
                        <div class="col-md-6 col-12 hero-text  d-flex justify-content-center align-items-start flex-column">
                            <h1>TechGen-X</h1>
                            <p><span class="bold-style">TechGen-X </span>
                            TechGenX will be a combination of fun and learning as we go through Technical and Non-Technical events. The fest will provide a perfect platform to showcase the talent of students from colleges and universities across India and win exciting cash prizes. Hurry up and register yourself!!  You may register through the scan code provided in the brochure or use the following  link:  https://forms.gle/nqqiMsM7wTETbcXv6</p>
                            <button class="btn-style btn-primary">Read more</button>
                        </div>
                    </div>
                </div>
  )
}

export default Event1
