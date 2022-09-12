import React from 'react'
import Ab from '../assets/about.png'


const Event3 = () => {
  return (
    <div class="container-fluid mt-5 about-style" id="aboutid">
    <div class="row">
        <div class="col-md-10 col-12 mx-auto">
            <div class="row">
                <div class="col-md-6 col-12 hero-text ">
                    <figure>
                        <img src={Ab} class="-about-icon" alt="herosection_image"/>
                    </figure>
                </div>

                <div class="col-md-6 col-12 hero-text  d-flex justify-content-center align-items-start flex-column">
                    <h1>Darpan</h1>

                    <p>Welcome To <span class="bold-style">Darpan </span>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia exercitationem deleniti tempora quae? Voluptatibus tempore incidunt ducimus dolorem voluptatum deleniti, magnam vel alias est qui error fuga reiciendis nesciunt ut expedita numquam? Voluptatem, in.</p>
                    <button class="btn-style btn-primary">Read more</button>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Event3