import { useState,useEffect  } from 'react'
import axios from 'axios'
import { nanoid } from 'nanoid'
import {Link} from 'react-router-dom'

function Cards(props) {

  const [data, setData] = useState([])
  const [aux, setAux] = useState([])
 
  useEffect(()=>{
      axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=81733fbe56cb4b598fe53cdb888c5fe8&language=es-AR&page=${props.page}`)
      .then(data => setData(data.data.results))
      .catch(error => setData([]))
  },[props.page])

  const newCards = data.filter(card => {
      return card.title.toLowerCase().includes(props.input.toLowerCase());
  })

  useEffect(()=>{
    for (let i = 1; i < 1000; i++) {
      setAux([])
      if(props.input !== '') {
        axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=81733fbe56cb4b598fe53cdb888c5fe8&language=es-AR&page=${props.page+i}`)
        .then(data => {
          let eachPage = data.data.results
          let newArr = eachPage.filter(x => {
            console.log(x.title.toLowerCase());
            if(x.title.toLowerCase().includes(props.input.toLowerCase())) {
              setAux(prev => [...prev,x])
            }
          })
        })
        .catch(error => setData([]))
      }
    }
  },[props.input])

  console.log(data);


    // var unique = arr.filter(function(elem, index, self) {
    //   return index === self.indexOf(elem);
    // })

  const cards = (props.input === '' ? newCards : aux.slice(0,20)).map(info => {
      return(
        <Link to={`/movies/${info.id}`} key={nanoid()} className='link'>
          <div className='card'>
            <img src={`https://image.tmdb.org/t/p/w500/${info.poster_path}`}/>
            <h2>{info.title}</h2>
          </div>
        </Link>
        
          
      )
  })

  data == [] ? cards = (<h1>Error</h1>) : data

  return (
    <div className="cards">
      {cards}
    </div>
  )
}

export default Cards
