import React from "react";

const MovieList = (props)=>{
    return (
    props.movies.map((movie,index)=>{
        return (
            <div className="rowse" >
            <img src={movie.Poster} alt="imageof movie" height="475" width="300" ></img>
            </div>
        )
    })
    )
}
export default MovieList;