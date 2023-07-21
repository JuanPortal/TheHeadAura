import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTiktok } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'

export const ComingSoon = () => {
    return (
        <div className="coming-soon">
            <div className="container">
                <header>
                    <h1>Head Aura</h1>
                </header>
                <main>
                    <div className="info">
                        <h2>COMING SOON</h2>
                        <p>Our website is under construction, follow us for updates</p>
                    </div>
                    <div className="countdown">
                        <div className="days">
                            <div className="number">4</div>
                            <p>Days</p>
                        </div>
                        <div className="hours">
                            <div className="number">3</div>
                            <p>Hours</p>
                        </div>
                        <div className="minutes">
                            <div className="number">2</div>
                            <p>Minutes</p>
                        </div>
                        <div className="seconds">
                            <div className="number">1</div>
                            <p>Seconds</p>
                        </div>
                    </div>
                    <div className="subscribe">
                        <form action="">
                            <input type="email" placeholder='Enter email address'/>
                            <input type="submit" value="SUBSCRIBE" />
                        </form>
                    </div>
                    <div className="socials">
                        <a href="https://www.tiktok.com/@theheadaura" target='_blank'><FontAwesomeIcon icon={faTiktok} /></a>
                        <a href="https://www.instagram.com/theheadaura/" target='_blank'><FontAwesomeIcon icon={faInstagram} /></a>
                        <a href="https://www.youtube.com/@theheadaura" target='_blank'><FontAwesomeIcon icon={faYoutube} /></a>
                    </div>
                </main>
                <footer>
                    Copyright &copy; 2023 Head Aura. All rights reserved
                </footer>
            </div>
        </div>
    )
}
