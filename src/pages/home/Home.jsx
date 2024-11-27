import React from "react"
import "./Home.scss"
import Featured from "../../components/featured/Featured"
import TrustedBy from "../../components/trustedBy/TrustedBy"
import Slide from "../../components/slide/Slide"

import CatCard from "../../components/catCard/CatCard";
import {cards} from "../../data";

import ProjectCard from "../../components/projectCard/ProjectCard";
import {projects} from "../../data";

const Home=() => {
    return(
        <div className="home">
            <Featured/>
            <TrustedBy/>
            <Slide slidesToShow={5} arrowsScroll={5}>
                {cards.map(card=>(
                    <CatCard key={card.id} item={card}/>
                ))}
            </Slide>
            <div className="features">
                <div className="container">
                <div className="item">
                        <h1>A whole world of freelance talent at your fingertips</h1>
                        <div className="title">
                            <img src="./img/check.png" alt="" />
                            The best for every budget
                        </div>
                        <p>
                            Find high-quality services at every price point. No hourly rates,
                            just project-based pricing.
                        </p>
                        <div className="title">
                            <img src="./img/check.png" alt="" />
                            The best for every budget
                        </div>
                        <p>
                            Find high-quality services at every price point. No hourly rates,
                            just project-based pricing.
                        </p>
                        <div className="title">
                            <img src="./img/check.png" alt="" />
                            The best for every budget
                        </div>
                        <p>
                            Find high-quality services at every price point. No hourly rates,
                            just project-based pricing.
                        </p>

                    </div>
                    
                    <div className="item">
                        <video src="./img/video.mp4" controls></video>
                    </div>
                </div>
            </div>

            <div className="features dark">
                <div className="container"><div className="item">
                        <h1>Fiverr Business</h1>
                        <h1>A business solution designed for teams</h1>
                        <p>
                            The premium freelance solution for businesses
                        </p>

                        <div className="title">
                            <img src="./img/check.png" alt="" />
                            Count on an account manager to find you the right talent and see to your project’s every need.
                        </div>
                        <div className="title">
                            <img src="./img/check.png" alt="" />
                            Count on an account manager to find you the right talent and see to your project’s every need.
                        </div>
                        <div className="title">
                            <img src="./img/check.png" alt="" />
                            Count on an account manager to find you the right talent and see to your project’s every need.
                        </div>
                            <button>Explore Fiverr Business</button>
                    </div>
                    
                    <div className="item">
                        <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_870,dpr_1.0/v1/attachments/generic_asset/asset/2321104e0c585cceea525419551d3a7c-1721984733481/fiverr-pro.png" alt="" />
                    </div>

                </div>
            </div>

            <Slide slidesToShow={4} arrowsScroll={4}>
                {projects.map(card=>(
                    <ProjectCard key={card.id} item={card}/>
                ))}
            </Slide>

        </div>
    )
}

export default Home