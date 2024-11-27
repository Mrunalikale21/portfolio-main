import React from 'react'
import webdev from '../assets/webdev.png'

const About = () => {
    return (
        <section id="about">
            <div className="container about-main">
                <div className="about__container">
                    <img src={webdev} className="about-img" alt="About image" />
                </div>
                <div className="about-content">
                    <h2>About Me</h2>
                    <p>Hi I am Mrunali Kale.<br />I am Full Stack Developer and Programmer located in India.</p>
                    <p>I am CS student with a passion for technology and development. I am curious to know about how things work around.</p>                   
                </div>
            </div>
        </section>
    )
}

export default About
