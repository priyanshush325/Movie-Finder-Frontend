import React, {useState} from "react";
import './RottenTomatoes.scss';

export const RottenTomatoesTile = (props) => {
    let movie = props.movie;
    const [userReviews, setUserReviews] = useState([]);
    const [criticReviews, setCriticReviews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [activeButton, setActiveButton] = useState("critic");

    let userState;
    let criticState;

    if (activeButton === "critic"){
        userState = "";
        criticState = "selected";
    }
    else{
        userState = "selected";
        criticState = "";
    }

    return (
        <div className = "rottenTomatoesTile">
            <div className = "buttonContainer">
                <button className = {`criticButton ${criticState}`} onClick = {() => {setActiveButton("critic")}}>Critic Reviews</button>
                <button className = {`userButton ${userState}`} onClick = {() => {setActiveButton("user")}}>User Reviews</button>
            </div>
        </div>
    )
}