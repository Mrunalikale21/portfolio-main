import React from 'react'
import portfolio from '../assets/portfolio.png'
import movix from '../assets/movix.png';
import gitinsight from '../assets/gitinsight.jpeg';
import netflix from '../assets/netflix.png';


const Projects = () => {
    return (
        <section id="portfolio">
            <h2>Portfolio</h2>
            <div className="container projects__container">
                <article className="projects__item hover">
                    <div className="projects-img">
                        <img src={portfolio} alt="project image" />
                    </div>
                    <h3>Portfolio Website</h3>
                    <a href="https://github.com/deepakrvg/portfolio" className="btn" target="_blank">Github</a>
                </article>
                <article className="projects__item">
                    <div className="projects-img">
                        <img src={movix} alt="project image" />
                    </div>
                    <h3>Movix: Trailer streaming platform</h3>
                    <a href="https://movix-ashy-iota.vercel.app/" className="btn" target="_blank">Github</a>
                </article>
                <article className="projects__item">
                    <div className="projects-img">
                        <img src={gitinsight} alt="project image" />
                    </div>
                    <h3>Git insight: Git insight about git projects</h3>
                    <a href="https://github.com/Mrunalikale21/gitinsight-frontend" className="btn" target="_blank">Github</a>
                </article>
                <article className="projects__item">
                    <div className="projects-img">
                        <img src={netflix} alt="project image" />
                    </div>
                    <h3>Netflix Clone</h3>
                    <a href="https://github.com/Mrunalikale21/Projects" className="btn" target="_blank">Github</a>
                </article>
            </div>
            <div className="more">
                <a href="https://github.com/Mrunalikale21?tab=repositories" target="_blank" className="btn btn-primary center">See More</a>
            </div>
        </section>
    )
}

export default Projects