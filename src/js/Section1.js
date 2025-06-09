import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDesktop, faClock, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import '../css/Section1.css'

const Section1 = () => {
    return (
        <section>
            <article className="section1-article1">
                <div
                    className="desktop"
                >
                    <FontAwesomeIcon className="fa-desktop" icon={faDesktop} />
                    <h1>DGcom</h1>
                </div>



                <div
                    className="clock-icon"
                >
                    <FontAwesomeIcon className="fa-clock" icon={faClock} />

                    <div>
                        <p>
                            Opening hour
                        </p>
                        <h3>Mon - Fri, 8:00 - 9:00</h3>
                    </div>
                </div>
                <div
                    className="phone-icon"
                >
                    <FontAwesomeIcon icon={faPhone} />

                    <div>
                        <p>
                            Call Us
                        </p>
                        <h3>+234 903 805 1512</h3>
                    </div>
                </div>

                <div
                    className="envelope-icon"
                >
                    <FontAwesomeIcon className="fa-envelope" icon={faEnvelope} />
                    <div>
                        <p>
                            Email Us
                        </p>
                        <h3>Uzonduokey30@gmail.com</h3>
                    </div>
                </div>


            </article>
        </section>
    )
}

export default Section1