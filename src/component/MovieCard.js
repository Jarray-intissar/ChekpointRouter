
import React from 'react';
 import './MovieCard.css';
import ReactStars from 'react-rating-stars-component';
import { Link } from 'react-router-dom';

const MovieCard = ({movie}) => {
  return (
    <div className='App'>
		<Link to={`/trailer/${movie.name}`}>
       <figure>
	<h1>{movie.name}</h1>
	<img src={movie.posterurl} alt="" />
	<figcaption>
		<p>{movie.description}</p>
        	<ReactStars
    count={5}
    size={24}
    activeColor="#ffd700"
	edit={false}
	value={movie.rating}
  />
	 {/* <button>
			More Info
		</button>  */}
	</figcaption>
</figure> 
</Link>
    </div>
  )
}

export default MovieCard
