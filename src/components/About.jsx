import React from 'react'
import Ab from '../assets/about.png'


function About() {
    return (
        <div class="container-fluid mt-5 about-style" id="darpan">
            <div class="row">
                <div class="col-md-10 col-12 mx-auto">
                    <h1 class="text-center main-heading">School Of Sciences</h1>
                   
                    <div class="row">
                        <div class="col-md-6 col-12 hero-text ">
                            <figure>
                                <img src={Ab} className="-about-icon" alt="herosection_image" />
                            </figure>
                        </div>

                        <div class="col-md-6 col-12 hero-text  d-flex justify-content-center align-items-start flex-column">
                            <h1 className="top-text">Darpan 2022</h1>

                            <p><span class="bold-style">Darpan </span>
                                is an Intra - University Festthattakes place every odd semester. Itis a boiling pointin
                                which the best students are chosen to form the culturalteam, who will go on to representthe
                                university in various inter-college fests. This Talent Hunt provides the students a platform to
                                exhibittheir skills. Darpan is a major fest consisting of a number of competitions that are held to
                                satiate every facet of artistic expression, including Art, Literature, Theatre, Dance, and Music</p>
                            <button class="btn-style btn-primary"  onClick={(e) => { e.preventDefault(); window.location.href='https://docs.google.com/forms/d/e/1FAIpQLSee52Ql3ayqbIBBedDQ8oTPQxLa4fIXGGcvVl1Lg7LrsMTcXw/closedform';}}>Read more</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About