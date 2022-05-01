import { useEffect } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"

export default function Movie(props) {

    const {id} = useParams()

    console.log(props);

    // useEffect(()=>{
    //     axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=81733fbe56cb4b598fe53cdb888c5fe8&page=${id}`)
    //     .then(data => console.log(data))
    // },[])


    return (
        <div>
            <h2>Movie: {id}</h2>
        </div>
    )
}