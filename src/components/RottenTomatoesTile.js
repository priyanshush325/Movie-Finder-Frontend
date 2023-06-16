import React, {useState, useEffect} from "react";
import './RottenTomatoes.scss';

export const RottenTomatoesTile = (props) => {
    let movie = props.movie;
    const [userReviews, setUserReviews] = useState([]);
    const [criticReviews, setCriticReviews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [activeButton, setActiveButton] = useState("critic");

    let userState;
    let criticState;
    let activeReviews = ["test1", "test2", "test3", "test4"];

    useEffect(() => {
        fetch("https://movie-finder-backend.onrender.com/rottenTomatoes/user/" + movie)
        .then((res) => res.json())
        .then((json) => {
            console.log("got user reviews", json);
            setUserReviews(json["reviews"]);
        });
        fetch("https://movie-finder-backend.onrender.com/rottenTomatoes/critic/" + movie)
        .then((res) => res.json())
        .then((json => {
            console.log("got critic reviews", json);
            setCriticReviews(json["reviews"]);
        }))
    }, [movie]);

    if (activeButton === "critic"){
        userState = "";
        criticState = "selected";
        activeReviews = criticReviews;
    }
    else{
        userState = "selected";
        criticState = "";
        activeReviews = userReviews;
    }

    const handleClick = (buttonType) => {
        if (buttonType === 1){
            setActiveButton("critic");
            activeReviews = criticReviews;
        }
        if (buttonType === 2){
            setActiveButton("user");
            activeReviews = userReviews;
        }
    }

    return (
        <div className = "rottenTomatoesTile">
            <div className = "buttonContainer">
                <button className = {`criticButton ${criticState}`} onClick = {() => {handleClick(1)}}>Critic Reviews</button>
                <button className = {`userButton ${userState}`} onClick = {() => {handleClick(2)}}>User Reviews</button>
            </div>
            <div className = "reviewContainer">
                    {activeReviews.map((review, index) => {
                        return <div className = "reviewBox">{review}</div>
                    })}
            </div>
        </div>
    )
}