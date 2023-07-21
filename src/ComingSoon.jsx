import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faTiktok } from '@fortawesome/free-brands-svg-icons'
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
                        <p>COMING SOON</p>
                        <p>Our website is under construction, follow us for updates</p>
                    </div>
                    <div className="countdown">
                        <div className="days">4</div>
                        <div className="hours">3</div>
                        <div className="minutes">2</div>
                        <div className="seconds">1</div>
                    </div>
                    <div className="subscribe">
                        <form action="">
                            <input type="email" />
                            <input type="submit" value="SUBSCRIBE" />
                        </form>
                    </div>
                    <div className="socials">
                        <FontAwesomeIcon icon={faInstagram} />
                        <FontAwesomeIcon icon={faTiktok} />
                        <FontAwesomeIcon icon={faYoutube} />
                    </div>
                </main>
                <footer>

                </footer>
            </div>
        </div>
    )
}
