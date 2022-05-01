import { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import './styles/App.css'
import Cards from './components/Cards'
import Header from './components/Header'
import Footer from './components/Footer'
import Movie from './components/Movie'
import Movies from './components/Movies'
import MostStreamed from './components/MostStreamed'
import Home from './components/Home'
import Categories from './components/Categories'

function App() {

  const [input,setInput] = useState('')

  function changeInput(newInput) {
    setInput(newInput.target.value)
  }

  return (
      <div className="App">
        <Header input={input} changeInput={changeInput}/>

        <Routes>
          <Route exact path='/' element={<Home />}/>
          <Route exact path='/movies' element={<Movies />}/>
          <Route path='/most-streamed' element={<MostStreamed />}/>
          <Route path='/categories' element={<Categories />}/>
          <Route path='/movies/:id' element={<Movie />} />
        </Routes>
      </div>
  )
}

export default App
