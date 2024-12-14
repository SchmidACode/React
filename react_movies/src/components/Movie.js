import './Movie.css'

function Movie(props)
{
    return(
        <div className='card'>
            <img src={props.Poster} alt={props.imdbID}/>
            <div>
                <h3>{props.Title}</h3>
                <h3>{props.Year}</h3>
            </div>
        </div>
    )
}
export default Movie;