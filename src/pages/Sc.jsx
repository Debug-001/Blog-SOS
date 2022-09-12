import React from 'react'
import Navbar from '../components/Navbar' 
import Clogo from '../assets/clogo.png'

const Sc = () => {
  return (
    <div>
      <Navbar/>
      <div class="container-fluid mt-5 about-style" id="darpan">
            <div class="row">
                <div class="col-md-10 col-12 mx-auto">
                    <h1 class="text-right main-heading" style={{"marginTop":"15rem"}}>Eulim Science Club</h1>
                   
                    <div class="row">
                        <div class="col-md-6 col-12 hero-text ">
                            <figure>
                                <img src={Clogo} className="clogo" style={{"width": "80%", "marginTop": "-25rem"}} alt="herosection_image" />
                            </figure>
                        </div>

                        <div class="col-md-6 col-12 hero-text  d-flex justify-content-center align-items-start flex-column">
                            {/* <h1 className="top-text">Darpan 2022</h1> */}
{/* 
                            <p><span class="bold-style">Darpan </span>
                               </p> */}
                            {/* <button class="btn-style btn-primary"  onClick={(e) => { e.preventDefault(); window.location.href='http://google.com';}}>Read more</button> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
      
      
      </div>
  )
}

export default Sc