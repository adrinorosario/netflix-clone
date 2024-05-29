import React, { useEffect, useRef, useState } from "react";
import "./Titilecards.css";
import { Link } from "react-router-dom";
//import cardsData from "../../assets/cards/Cards_data";



function Titilecards(props) {
    const cardsRef = useRef();
    const [apiData, setApiData] = useState([]);

    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMmNjNTMwM2EzY2MzN2UzZWZmNzhjNTExYWY3ZjJjNyIsInN1YiI6IjY2NTVmMWMyZDA5MjUzMjIwNmU0YmViZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kvRwPIDRZ3C0LoDkI96QDvQtWSzrD4DBm5MMsa-DsRE'
        }
      };
      


    const handleWheel = (event) => {
        event.preventDefault();
        cardsRef.current.scrollLeft += event.deltaY;
    }

    useEffect(()=>{

        fetch(`https://api.themoviedb.org/3/movie/${props.category?props.category:"now_playing"}`, options)
        .then(response => response.json())
        .then(response => setApiData(response.results))
        .catch(err => console.error(err));


        cardsRef.current.addEventListener("wheel", handleWheel);
    }, [])

    return(
        <div className="titlecards">
            <h2>{props.title?props.title : "Popular on Netflix"}</h2>
            <div className="card-list" ref={cardsRef}>
                {apiData.map((card, index)=> {
                    return <Link to={`/player/${card.id}`} className="card" key={index}>
                        <img src={`https://image.tmdb.org/t/p/w500`+ card.backdrop_path} />
                        <p>{card.original_title}</p>
                    </Link>
                })}
            </div>
        </div>
    )
}

export default Titilecards;