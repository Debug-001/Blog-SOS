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
      <div className="container-fluid mt-5 about-style" id="darpan">
        <div className="row">
          <div className="col-md-10 col-12 mx-auto">

            <div className="row">
              <div className="col-md-6 col-12 hero-text ">
              
              </div>
              <div className="row-sub">
                <div className="col-md-12 col-12 hero-text  d-flex justify-content-center align-items-center flex-column">
                  <h1 className="text-center main-heading">Deparment Social Action Cell (DSA)</h1>

                  <p color="primary">
                    <span className="bold-style"> Deparmental Social Action </span>
                    is an initiative by the School of Sciences where the members
                    with the help of the faculty incharges host vairous events targeting Social
                    causes. They plan and organize various activities and events related
                    Science, Environment etc.., and also webinars.
                  </p>
                </div>
              </div>
              <div className="containee-fluid mt-5 service-style" id="serviceid">
    <div className="row">
        <div className="col-md-10  col-12 mx-auto">
            <h1 className="text-center main-heading">Teacher Co-ordinators </h1>

            <div className="row">
                <div className="col-md-6">
                    <div className="box">
                        <div className="our-services settings">
                            <div className="icon"> <img className="image" src={Image} alt="profile_image" /> </div>
                            <h4>Dr. Shilpa Srivastava</h4>
                            <p className="small" style={{"padding-bottom":"30px"}} >MSc, PhD <small>(School of Sciences), Delhi NCR campus</small></p>
                        </div>
                    </div>
                </div>
            </div> 
        </div>
        <div className="col-md-10  col-12 mx-auto">
            <h1 className="text-center main-heading">Student Co-ordinators </h1>

            <div className="row">
                <div className="col-md-6">
                    <div className="box">
                        <div className="our-services settings">
                            <div className="icon"> <img className="image" src={Image1} alt="profile_image" /> </div>
                            <h4>Sanskriti Saran</h4>
                            <p style={{"padding-bottom":"30px"}}>Course: BCA (3BCANCR)</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="box">
                        <div className="our-services settings">
                            <div className="icon"> <img className="image" src={Image2} alt="profile_image" /> </div>
                            <h4>Vaishali Pant</h4>
                            <p style={{"padding-bottom":"30px"}}>Course: BSC EMS (3EMS) </p>
                        </div>
                    </div>
                </div>
            </div> 
        </div>
    </div>
</div>
                <div id="button"> <button className="btn-style btn-primary"   onClick={(e) => { e.preventDefault(); window.location.href="https://www.instagram.com/eulim_scienceclub/";}}>
                    Follow us on Instagram
                  </button>
                </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default ScienceClub;
