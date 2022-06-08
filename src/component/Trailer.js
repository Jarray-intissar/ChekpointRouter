import React from 'react'
import { Card } from 'react-bootstrap';
import ReactStars from 'react-rating-stars-component';
import { useParams } from 'react-router-dom';

function Trailer({movies}) {
  const params = useParams();
  const movie = movies.filter((el)=>el.name == params.name)[0];
 
  return (
    <div style={{margin:"30px 40px"}}>
      <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={movie.posterurl} width="100" height="180" />
  <Card.Body>
    <Card.Title style={{color:"red"}}>{movie.name}</Card.Title>
    <Card.Text>
    {movie.description}
    </Card.Text>
    <ReactStars
    count={5}
    size={24}
    activeColor="#ffd700"
	edit={false}
	value={movie.rating}
  />
   
  </Card.Body>
</Card>
    

    </div>
  )
}

export default Trailer