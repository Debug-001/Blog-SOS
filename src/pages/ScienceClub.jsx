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
              <div className="col-md-6 col-12 hero-text ">
                <figure>
                  <img src={Clogo}
                    className="clogo" style={{ width: "90%", marginTop: "-25rem", "padding-left": "0px"
                    }}
                    alt="herosection_image"
                  />
                </figure>
              </div>
              <div className="row-sub">
                <div className="col-md-10 col-12 hero-text  d-flex justify-content-center align-items-center flex-column">
                  <h1 style={{ "margin-top": "-6rem","margin-left": "10rem"}} className="text-center main-heading">Eulim Science Club</h1>

                  <p style={{"margin-left": "13rem","margin-top":"4rem"}} color="primary">
                    <span className="bold-style"> EULIM Science club </span>
                    is an initiative by the School of Sciences where the members
                    with the help of the faculty incharges host vairous events.
                    They plan and organize various activities and events related
                    Science, Environment etc.., and also webinars.We also
                    Organise a where other students get to display their science
                    projects and models.
                  </p>
                </div>
              </div>
              <div className="containee-fluid mt-5 service-style" id="serviceid">
    <div className="row">
        <div className="col-md-10  col-12 mx-auto">
            <h1 className="text-center main-heading">Teacher Co-ordinators </h1>

            <div className="row">
                <div className="col-md-6">
                    <div className="box" style={{"margin-left":"30rem"}}>
                        <div className="our-services ssl">
                            <div className="icon"> <img className="image" src={Image} alt="profile_image" /> </div>
                            <h4>Dr STEPHENRAJ S</h4>
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
                        <div className="our-services privacy">
                            <div className="icon"> <img className="image" src={Image1} alt="profile_image" /> </div>
                            <h4>Sanskriti Saran</h4>
                            <p style={{"padding-bottom":"30px"}}>Course: BCA (3BCANCR)</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="box">
                        <div className="our-services database">
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
      <Footer/>
    </div>
  );
};

export default ScienceClub;
