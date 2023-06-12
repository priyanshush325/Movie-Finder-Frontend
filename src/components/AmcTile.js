import React, {useState, useEffect} from "react";
import "./AmcTile.scss";

export const AmcTile = (props) =>{
    let movie = props.movie;
    const [poster, setPoster] = useState(null);
    const [showPoster, setShowPoster] = useState();
    const [playing, setPlaying] = useState();
    useEffect(() => {
        setPlaying("loading...");
        setShowPoster(false);
        fetch("https://movie-finder-backend.onrender.com/amc/" + movie)
        .then((res) => res.json())
        .then((json) =>{
            // console.log("yes", json)
            // console.log("poster is " + json["poster"])
            setPoster(json["poster"])
            if (json["playing"] === false){
                setPlaying("Not playing at AMC")
                setShowPoster(false);
            }
            else{
                setPlaying("Now playing at AMC");
                setShowPoster(true);
            }
        });
    }, [movie]);

    return (
        <div className = "amcTile">
            <div className = "movieName">{movie}</div>
            {showPoster && (<img className = "poster" src = {poster} alt="poster is loading..."></img>)}
            <div className = "playingText">{playing}</div>
            {showPoster && <button className = "tickets" onClick = {() => {window.location.href = "//amctheatres.com/movies"}}>Get Tickets</button>}
        </div>
    );
}