import React from "react";
import Navbar from "../components/Navbar";
import Clogo from "../assets/clogo.png";
import Footer from "../components/Footer";
import Image from '../assets/profile.png';
import Image1 from '../assets/sanskriti.png';
import Image2 from '../assets/vs.png';

const ScienceClub = () => {
  return (
    <div>
      <Navbar />
      <div class="container-fluid mt-5 about-style">
            <div class="row">
              <div class="col-md-6 col-12 hero-text ">
                <figure>
                  <img src={Clogo}
                    className="clogo" style={{ width: "90%", marginTop: "-25rem", "padding-left": "0px"
                    }}
                    alt="herosection_image"
                  />
                </figure>
              </div>
              <div class="row-sub">
                <div class="col-md-10 col-12 hero-text  d-flex justify-content-center align-items-center flex-column">
                  <h1 style={{ "margin-top": "-6rem","margin-left": "10rem"}} className="text-center main-heading">Eulim Science Club</h1>

                  <p class="imp">
                    <span class="bold"> EULIM Science club 
                    is an initiative by the School of Sciences where the members
                    with the help of the faculty incharges host vairous events.
                    They plan and organize various activities and events related
                    Science, Environment etc.., and also webinars.We also
                    Organise a where other students get to display their science
                    projects and models.
                    </span>
                  </p>
                </div>
              </div>
              <div class="containee-fluid mt-5 service-style" id="serviceid">
    <div class="row">
        <div class="col-md-10  col-12 mx-auto">
            <h1 class="text-center main-heading">Faculty Co-ordinators </h1>

            <div class="row">
                <div class="col-md-6">
                    <div class="box" style={{"margin-left":"30rem"}}>
                        <div class="our-services ssl">
                            <div class="icon"> <img class="image" src={Image} alt="profile_image" /> </div>
                            <h4>Dr STEPHENRAJ S</h4>
                            <p class="small" style={{"padding-bottom":"30px"}} >MSc, PhD <small>(School of Sciences), Delhi NCR campus</small></p>
                        </div>
                    </div>
                </div>
            </div> 
        </div>
        <div class="col-md-10  col-12 mx-auto">
            <h1 class="text-center main-heading">Student Co-ordinators </h1>

            <div class="row">
                <div class="col-md-6">
                    <div class="box">
                        <div class="our-services privacy">
                            <div class="icon"> <img class="image" src={Image1} alt="profile_image" /> </div>
                            <h4>Sanskriti Saran</h4>
                            <p style={{"padding-bottom":"30px"}}>Course: BCA (3BCANCR)</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="box">
                        <div class="our-services database">
                            <div class="icon"> <img class="image" src={Image2} alt="profile_image" /> </div>
                            <h4>Vaishali Pant</h4>
                            <p style={{"padding-bottom":"30px"}}>Course: BSC EMS (3EMS) </p>
                        </div>
                    </div>
                </div>
            </div> 
        </div>
    </div>
</div>
                <div id="button"> <button class="btn-style btn-primary"   onClick={(e) => { e.preventDefault(); window.location.href="https://www.instagram.com/eulim_scienceclub/";}}>
                    Follow us on Instagram
                  </button>
                </div>
            </div>
          </div>
      <Footer/>
    </div>
  );
};

export default ScienceClub;
