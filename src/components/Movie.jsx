import { useEffect, useState } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"
import {Link} from 'react-router-dom'

export default function Movie() {

    const {id} = useParams()
    const [data,setData] = useState([])

    useEffect(()=>{
        for (let i = 1; i < 500; i++) {
            axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=81733fbe56cb4b598fe53cdb888c5fe8&page=${i}`)
            .then(data => {
                data.data.results.forEach(x => {
                    if(x.id == id) {
                        setData(x)
                        return
                    }
                })
            })
        }
    },[id])

    const style= {
        backgroundImage: typeof(data) == 'undefined' ? '' : `url('https://image.tmdb.org/t/p/w500/${data.backdrop_path}')`,
        backgroundSize: 'cover'
    }

    function openFullscreen(e) {
        var elem = document.getElementById("poster");
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        } else if (elem.webkitRequestFullscreen) { /* Safari */
            elem.webkitRequestFullscreen();
        } else if (elem.msRequestFullscreen) { /* IE11 */
            elem.msRequestFullscreen();
        
}
      }

    return (
        <div className="poster" style={style}>
                <div className="info">
                    <h2>{typeof(data) == 'undefined' ? 'Loading...' : data.title}</h2>
                    <p>{typeof(data) == 'undefined' ? 'Loading...' : data.overview}</p>
                    <div>
                        <Link to='/streaming' className="link"><button>Play</button></Link>
                    </div>
                </div>
            </div>
    )
}