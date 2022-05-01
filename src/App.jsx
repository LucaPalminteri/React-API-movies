import { useState,useEffect } from 'react'
import {Routes, Route} from 'react-router-dom'
import './styles/App.css'
import Header from './components/Header'
import Movie from './components/Movie'
import Movies from './components/Movies'
import MostStreamed from './components/MostStreamed'
import Home from './components/Home'
import Categories from './components/Categories'
import Play from './components/Play'

function App() {

  const [isReady,setIsReady] = useState(false)
  const [input,setInput] = useState('')

  function changeInput(newInput) {
    setInput(newInput.target.value)
  }

  useEffect(()=>{
    setTimeout(()=>{
      setIsReady(true)
    },1500)
    console.log(isReady);
  },[])
  
  const style ={
    backgroundColor: '#241744'
  }

  return (
      <div className="App">
        {!isReady ? 
        <div className='wait' style={style}>
          <div className="loader"></div>
          <h1>Peliplus</h1>
        </div>
        :
        <>
          <Header input={input} changeInput={changeInput}/>
          <Routes>
            <Route exact path='/' element={<Home />}/>
            <Route exact path='/movies' element={<Movies />}/>
            <Route path='/most-streamed' element={<MostStreamed />}/>
            <Route path='/categories' element={<Categories />}/>
            <Route path='/movies/:id' element={<Movie />} />
            <Route path='/streaming' element={<Play />} />
          </Routes>
        </>
        }
        
      </div>
  )
}

export default App
