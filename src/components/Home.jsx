import axios from "axios"
import { useEffect, useState } from "react"
import {Link} from 'react-router-dom'

export default function Home(props) {

    const [data,setData] = useState([])
    const [page,setPage] = useState(Math.ceil(Math.random()*400))
    let movie = []

    useEffect(()=>{
        axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=81733fbe56cb4b598fe53cdb888c5fe8&language=es-AR&page=${page}`)
        .then(data => setData(data.data.results))
        .catch(error => setData([]))
    },[changeMovie])

    const aux = []
    data.map(x => aux.push(x.vote_average))
    const ordered = aux.sort(function(a, b){return b-a});

    movie = data.find(x => x.vote_average === aux[0])

    const style= {
        backgroundImage: typeof(movie) == 'undefined' ? '' : `url('https://image.tmdb.org/t/p/w500/${movie.backdrop_path}')`,
        backgroundSize: 'cover'
    }

    function changeMovie() {
        setPage(Math.ceil(Math.random()*400))
    }

    


    return (
        <div>
            <div className="poster" style={style}>
                <div className="info">
                    <h2>{typeof(movie) == 'undefined' ? 'Loading...' : movie.title}</h2>
                    <p>{typeof(movie) == 'undefined' ? 'Loading...' : movie.overview}</p>
                    <div>
                        <Link to='/streaming' className="link"><button>Play</button></Link>
                        <Link className="link" to={typeof(movie) == 'undefined' ? '/' : `/movies/${movie.id}`}><button>Info</button></Link>
                    </div>
                </div>
                <button onClick={changeMovie}>Random</button>
            </div>
        </div>
    )
}