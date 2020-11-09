import React from 'react';

const Card = ({movie}) => {
    return (
        <div className="col-md-4 mb-4">
            <div className="card">
                <img className="card-img-top" src={movie.Poster} alt={movie.Title}/>
                <div className="card-body">
                    <h4 style={{"color":"white"}}>{movie.Title}</h4>
                    <p>{movie.Type} - {movie.Year}</p>
                </div>
            </div>
        </div>
    );
}

export default Card;