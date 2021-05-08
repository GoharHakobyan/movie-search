import React from 'react'
import './index.css'

const CardComponent = ({ movie }) => {
    return (
        <div className='card-list' >
            <div className='card' >
                <img className='card-name'
                    src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
                    alt={movie.title + 'posts'}/>
                <div className='card--content'>
                    <h3 className='card--title'>{movie.title}</h3>
                    <p><small>Release date: {movie.rlease_date}</small></p>
                    <p><small>rating: {movie.vote_average}</small></p>
                    <p className='card--desc'>{movie.overview}</p>
                </div>
            </div>

        </div>)
}

export default CardComponent