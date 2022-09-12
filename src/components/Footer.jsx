import React from 'react'
import './footer.css'
import { MdOutlineLocationOn } from 'react-icons/md'
import { IoCallOutline } from 'react-icons/io5'
import { FiMail } from 'react-icons/fi'
import { IoEarth } from 'react-icons/io5'

const Footer = () => {
    return (
        <footer class="page-footer font-small blue pt-4">
            <div class="container-fluid text-center text-md-left">
                <div class="row">
                    <div style={{"margin-left":"8rem"}}  class="col-md-6 mt-md-0 mt-3">
                        <h1 style={{ "margin-left": "15rem", "margin-top": "3rem", "font-size": "30px", "font-weight": "bold" }}>CHRIST</h1>
                        <p style={{ "margin-left": "-23rem" }}>(Deemed to be University)</p>
                        <div className="footer__socials">
                            <a href="https://www.google.com/maps/place/CHRIST+(Deemed+to+be+University)+Delhi+NCR/@28.6832252,77.409954,15z/data=!4m5!3m4!1s0x0:0xdc407fcde59a0d0f!8m2!3d28.6832252!4d77.409954"><MdOutlineLocationOn /> <p class="footer-text">Mariam Nagar, Meerut Road, Delhi NCR
                                Ghaziabad - 201003
                            </p> </a>
                            <a href="tel:180-012-33212"><IoCallOutline /><p class="footer-text1">Tel: 1800-123-3212</p></a>
                            <a href="mailto:mail.ncr@christuniversity.in"><FiMail /><p class="footer-text2">Email: mail.ncr@christuniversity.in</p></a>
                            <a href="http://www.ncr.christuniversity.in"><IoEarth /><p class="footer-text3">Web: http://www.ncr.christuniversity.in</p></a>
                        </div>
                    </div>
                    <div style={{"margin-left":"15rem"}} class="col-md-3 mb-md-0 mb-3">
                        <ul class="list-unstyled">
                            <li>
                                <h1 class="vison">Vision</h1>
                                <p style={{ "text-align": "inherit" }}>EXCELLENCE AND SERVICE</p>
                                <h2 class="mission">Mission</h2><p style={{ "text-align": "inherit" }}>
                                    CHRIST (Deemed to be University) is a nurturing ground for an individual's holistic development to make effective contribution to the society in a dynamic environment.</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="footer-copyright text-center py-1"><h1 style={{ "font-size": "17px", "margin-top": "3rem" }}>Copyright © CHRIST (Deemed to be University) 2020</h1><p>Website developed by <a href="http://ombhatt.com">Om Sharma</a>, <a href="https://samyak003.in">Samyak Jain</a>, Mohammad Abbas.</p>
            </div>
        </footer>

    )
}

export default Footer