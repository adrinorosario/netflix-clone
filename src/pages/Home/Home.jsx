import React from "react";
import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";
import heroBanner from "../../assets/hero_banner.jpg";
import heroTitle from "../../assets/hero_title.png";
import playicon from "../../assets/play_icon.png";
import infoicon from "../../assets/info_icon.png";
import Footer from "../../components/Footer/Footer";
import Titilecards from "../../components/TitleCards/Titilcards";

function Home() {
    return(
        <div className="home">
            <Navbar />
            <div className="hero">
                <img src={heroBanner} className="banner-img"/>
                <div className="hero-caption">
                    <img src={heroTitle} className="caption-img"/>
                    <p>Discovering his ties to a secret ancient order, a young man living in modern Istanbul embarks on a quest to save the city from an immortal enemy.</p>
                    <div className="hero-btns">
                        <button className="btn"><img src={playicon} />Play</button>
                        <button className="btn dark-btn"><img src={infoicon} />More info</button>
                    </div>
                    <Titilecards />
                </div>
            </div>
            <div className="more-cards">
                <Titilecards title={"Blockbuster Movies"} category="top_rated"/>
                <Titilecards title={"Only on Netflix"} category="popular"/>
                <Titilecards title={"Upcoming"} category="upcoming"/>
                <Titilecards title={"Top Picks for You"} category="now_playing"/>
            </div>
            <Footer />
        </div>
    )
}

export default Home;