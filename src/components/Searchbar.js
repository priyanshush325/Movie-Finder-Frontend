import React, {useState} from "react";
import './Searchbar.scss';
export const Searchbar = ({updateMovie}) => {

    const [movieQuery, setMovieQuery] = useState(null);

    const searchSubmit = (movie) =>{
        updateMovie(movie);
    }

    return (
       <div className = "container">
            <form className = "search" onSubmit = {(e) => {
                    e.preventDefault();
                    searchSubmit(movieQuery);
                }
                }>
                <input type = "text" className = "movieQuery" name = "movieQuery" placeholder = "Search for a movie to get started..."
                onChange={(e) => setMovieQuery(e.target.value)}>
                </input>
            </form>
       </div>
    );
}