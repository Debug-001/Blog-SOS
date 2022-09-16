import React from 'react'
import Ab from '../assets/ideathon.png'


function Event3() {
    return (
        <div class="container-fluid mt-5 about-style" id="ideathon">
                    <div class="row">
                        <div class="col-md-6 col-12 hero-text ">
                            <figure>
                                <img src={Ab} className="-about-icon" style={{"margin-left":"15rem", "width":"60%"}} alt="herosection_image" />
                            </figure>
                        </div>

                        <div class="col-md-6 col-12 hero-text  d-flex justify-content-center align-items-start flex-column">
                            <h1>Ideathon for Soceity 5.0</h1>

                            <p><span class="bold-style"> Christ Innovation and Incubation Centre (CIIC)</span>
                            is organizing an event called <span class="bold-style">'Ideathon for Society 5.0'</span> on Saturday, 17th September 2022.
Some stalls will also be set up on the new basketball court, which will be an opportunity for all the small business owners and budding entrepreneurs to promote their business, be it food, product sales, or services. Since the number of stalls will be limited, they will be allotted on a first come first serve basis.</p>
                            <button class="btn-style btn-primary"  onClick={(e) => { e.preventDefault(); window.location.href='https://docs.google.com/forms/d/e/1FAIpQLSdJmKi2SWWRbUDn1SZo_iD-turNw4c73TF3EQsRQ5oEyTdSVw/viewform';}}>Read more</button>
                        </div>
                    </div>
                </div>
    )
}


export default Event3