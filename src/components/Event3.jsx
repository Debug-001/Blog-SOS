import React from 'react'

const Event3 = () => {
  return (
       <div className="row">
        <div className="col-md-10 col-12 mx-auto">
            <h1 className="text-center main-heading">About Us</h1>
            <p className="text-center sub-heading">grow your business with us</p>
            <div className="row">
                <div className="col-md-6 col-12 hero-text ">
                    <figure>
                        <img src="images/about.svg" alt="herosection_image"/>
                    </figure>
                </div>

                <div className="col-md-6 col-12 hero-text  d-flex justify-content-center align-items-start flex-column"/>
                    <h1>WE ARE THE PROFESSIONAL DEVELOPER</h1>

                    <p>Welcome To <span className="bold-style">ThapaTechnical </span>
                        , Your Number One Source For All Things. We're Dedicated To Giving
                        You The Very Best Of Work, With A Focus On [Three Characteristics, Ie: Dependability,
                        Customer Service And Uniqueness.]</p>
                    <button className="btn-style btn-primary">Read more</button>
                </div>
            </div>
        </div>
  )
}

export default Event3