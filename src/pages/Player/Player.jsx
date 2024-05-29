import React, { useEffect, useState } from "react";
import "./Player.css";
import backIcon from "../../assets/back_arrow_icon.png";
import { useNavigate, useParams } from "react-router-dom";

function Player() {
    const [apiData, setApiData] = useState({
        name: "",
        key: "",
        publishedAt: "",
        type: ""
    });

    const {id} = useParams();

    const navigate = useNavigate();


    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMmNjNTMwM2EzY2MzN2UzZWZmNzhjNTExYWY3ZjJjNyIsInN1YiI6IjY2NTVmMWMyZDA5MjUzMjIwNmU0YmViZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kvRwPIDRZ3C0LoDkI96QDvQtWSzrD4DBm5MMsa-DsRE'
        }
      };
      

      useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}/videos`, options)
        .then(response => response.json())
        .then(response => setApiData(response.results[0]))
        .catch(err => console.error(err));
      },[])




    return(
        <div className="player">
            <img src={backIcon} onClick={() => {navigate(-2)}}/>
            <iframe width="90%" height="90%" src={`https://www.youtube.com/embed/${apiData.key}`} title="Trailer" frameBorder="0" allowFullScreen></iframe>
            <div className="player-info">
                <p>{apiData.publishedAt.slice(0,10)}</p>
                <p>{apiData.name}</p>
                <p>{apiData.type}</p>
            </div>
        </div>
    )
}

export default Player;