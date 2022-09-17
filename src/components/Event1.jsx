import React from 'react'
import Eve1 from '../assets/Event1.png'

const Event1 = () => {
  return (
    <div class="container-fluid mt-5 about-style" id="shahmat">
    <div class="row">
        <div class="col-md-10 col-12 mx-auto">
            <div class="row">
                <div class="col-md-6 col-12 hero-text" style={{maxWidth: "400px"}}>
                    <figure>
                        <img src={Eve1} className="img-fluid" alt="herosection_image"/>
                    </figure>
                </div>

                <div class="col-md-6 col-12 hero-text  d-flex justify-content-center align-items-start flex-column">
                    <h1>TechGen-X</h1>

                    <p><span class="bold-style">TechGen-X </span>
                    TechGenX will be a combination of fun and learning as we go through Technical and Non-Technical events. The fest will provide a perfect platform to showcase the talent of students from colleges and universities across India and win exciting cash prizes. Hurry up and register yourself!!  You may register through the scan code provided in the brochure or use the following  link:  https://forms.gle/nqqiMsM7wTETbcXv6</p>
                   <button class="btn-style btn-primary"  onClick={(e) => { e.preventDefault(); window.location.href='https://docs.google.com/forms/d/e/1FAIpQLSfGB4_yPPxakuaiSVA6fiYXguagmlaCZLPe3HxuMlSj6wXVrQ/closedform';}} >Read more</button>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Event1
