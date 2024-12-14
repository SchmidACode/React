import React from 'react';
import MovieList from '../components/MovieList';

import './Main.css';

class Main extends React.Component
{
    state = {
        movies:[]
    }

    componentDidMount()
    {
        fetch('https://www.omdbapi.com/?i=tt3896198&apikey=76f238f9')
        .then(Response => Response.json)
        .then(data => this.setState({movies:data}))
        console.log(this.state.movies);
    }

    render()
    {
        const {movies} = this.state;
        return(
            <div className='main'>
                <div className='wrap'>
                    {
                        this.state.movies.length ? <MovieList movies={movies}/> : <h3>Loading Data...</h3>
                    }
                </div>
            </div>
        )
    }

}

export default Main;