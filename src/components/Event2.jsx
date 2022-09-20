import React from 'react'
import Chess from '../assets/logo1.png'

const Event2 = () => {
  return (
    <div class="container-fluid mt-5 about-style" id="shahmat">
    <div class="row">
                <div class="col-md-6 col-12 hero-text ">
                    <figure>
                        <img src={Chess} className="top-image" style={{"width":"50%", "margin-left":"21rem", "margin-top":"4rem"}} alt="herosection_image" />
                    </figure>
                </div>
                <div class="col-md-6 col-12 hero-text  d-flex justify-content-center align-items-start flex-column">
                    <h1>Shah-Mat</h1>

                    <p><span class="bold-style">  Chess is everything : art, culture, science and sport."♟</span>
                   with these great words by Anataly Karpov ,
   Christ University School of Business & Management and School of Sciences* invite everyone to sharpen your brain while having fun.
  So let's play a game of chess in *"Sheh-Maat 2022"* , a *Chess Tournament* being organized at the departmental level .</p>
                    <button class="btn-style btn-primary"  onClick={(e) => { e.preventDefault(); window.location.href='https://docs.google.com/forms/d/e/1FAIpQLSfGB4_yPPxakuaiSVA6fiYXguagmlaCZLPe3HxuMlSj6wXVrQ/closedform';}}>Read more</button>
                </div>
            </div>
        </div>
      )
    }


    export default Event2




    //     <div class="container-fluid mt-5 about-style" id="shahmat">
    //     <div class="row">
    //         <div class="col-md-10 col-12 mx-auto">
    //             <div class="row">
    //                 <div class="col-md-6 col-12 hero-text " style={{maxWidth: "400px"}}>
    //                     <figure>
    //                         <img src={Chess} className="img-fluid" alt="herosection_image"/>
    //                     </figure>
    //                 </div>
    
    //                 <div class="col-md-6 col-12 hero-text  d-flex justify-content-center align-items-start flex-column">
    //                     <h1>Shahmat - Chess Tournament</h1>
    
    //                     <p><span class="bold-style">Chess </span>
    //                     ♟" is everything : art, culture, science and sport."♟ with these great words by Anataly Karpov ,
    // *Christ University School of Business & Management and School of Sciences* invite everyone to sharpen your brain while having fun.
    // So let's play a game of chess in *"Sheh-Maat 2022"* , a *Chess Tournament* being organized at the departmental level .</p>
    //                     <button class="btn-style btn-primary" onClick={(e) => { e.preventDefault(); window.location.href='https://docs.google.com/forms/d/1pFRPxv7DY1oxE-7vHqBN2up2dqXOFKwZojYZljVhrtk/closedform';}}>Read more</button>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    // </div>
