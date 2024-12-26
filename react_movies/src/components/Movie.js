import './Movie.css'

function Movie(props)
{
    return(
<<<<<<< HEAD
        <div className='card'>
            <img src={props.Poster} alt={props.imdbID}/>
            <div>
                <h3>{props.Title}</h3>
                <h3>{props.Year}</h3>
=======
        <div className="card">
            <img src={props.Poster} alt={props.Title} />
            <div>
                <h3>{props.Title}</h3>
                <p>{props.Year}</p>
>>>>>>> f642b9a (init)
            </div>
        </div>
    )
}
export default Movie;