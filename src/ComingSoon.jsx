import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTiktok } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'

export const ComingSoon = () => {

    const [days, setDays] = useState(0)
    const [hours, setHours] = useState(0)
    const [minutes, setMinutes] = useState(0)
    const [seconds, setSeconds] = useState(0)

    useEffect(() => {
        const updateCountdown = () => {
            const launchdate = new Date("Jan 1, 2024 00:00:00").getTime();
            const currentDate = new Date().getTime();
            const totalSeconds = (launchdate - currentDate);

            setDays(Math.floor(totalSeconds / (24 * 60 * 60 * 1000)));
            setHours(Math.floor(totalSeconds % (24 * 60 * 60 * 1000) / (60 * 60 * 1000)));
            setMinutes(Math.floor(totalSeconds % (60 * 60 * 1000) / (60 * 1000)));
            setSeconds(Math.floor(totalSeconds % (60 * 1000) / 1000));
        };

        const interval = setInterval(updateCountdown, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="coming-soon">
            <div className="container">
                <header>
                    <h1>Head Aura</h1>
                    <h2>Hair and scalp treatments</h2>
                </header>
                <main>
                    <div className="info">
                        <h3>COMING SOON!</h3>
                        <p>Our salon is under construction, follow our socials for updates</p>
                    </div>
                    <div className="countdown">
                        <div className="days">
                            <div className="number">{days}</div>
                            <p>Days</p>
                        </div>
                        <div className="hours">
                            <div className="number">{hours}</div>
                            <p>Hours</p>
                        </div>
                        <div className="minutes">
                            <div className="number">{minutes}</div>
                            <p>Minutes</p>
                        </div>
                        <div className="seconds">
                            <div className="number">{seconds}</div>
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
