import React, { useState } from 'react'
import CardComponent from '../cardComponent'

const SearchMovies = () => {

    const [query, setQuery] = useState('')
    const [movies, setMovie] = useState([])
    const url = `https://api.themoviedb.org/3/search/movie?api_key=ca68e162d7ecfa6fb28408ba722f0fd4&language=en-US&query=${query}&page=1&include_adult=false`

    const searchMovies = async (e) => {
        e.preventDefault()
        try {
            const res = await fetch(url)
            const data = await res.json()
            // console.log(data)
            setMovie(data.results)
        } catch (err) {
            console.error(err)
        }
    }

    return (
        <>
            <form className='form' onSubmit={searchMovies}>
                <label className='label' htmlFor='query'>Movie name</label>
                <input type='text' name='query' placeholder='type here' className='input' onChange={(e) => setQuery(e.target.value)} value={query} />
                <button type='submit' className='button'>Search</button>
            </form>
            {movies.filter(movie => movie.poster_path).map((movie,ind) => (
                <CardComponent movie={movie} key={movie.id}/>
            ))}
        </>
    )
}

export default SearchMovies