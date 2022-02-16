import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Movie from "./Movie";
import { useState } from 'react';



export default function MovieList({ movies }) {

    const [show, setShow] = useState(false);

    const [chosenMovie, setChosenMovie] = useState();

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    function handleShowMovie(movieData) {
        console.log(movieData);
        handleShow();
        setChosenMovie(movieData)
    }

    return (
        <>
            <h1>Movies List</h1>

            {
                movies.map(movie => {
                    return (
                        <>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={movie.poster_path} />
                                <Card.Body>
                                    <Card.Title>{movie.title}</Card.Title>
                                    <Card.Text>
                                        Release date:  {movie.release_date}
                                    </Card.Text>
                                    <Card.Text>
                                        Overview:
                                        <br></br>
                                        {movie.overview}
                                    </Card.Text>
                                    <Button variant="primary" onClick={() => { handleShowMovie(movie) }}>Show Movie</Button>
                                </Card.Body>
                            </Card>
                            {
                                chosenMovie && <Movie show={show} handleClose={handleClose} chosenMovie={chosenMovie} />
                            }
                        </>
                    )
                })
            }


        </>
    );
}