import { useState } from 'react'
import './App.css'
import Cards from './Cards'
import Header from './Header'
import Footer from './Footer'

function App() {

  const [page, setPage] = useState(1)
  const [input,setInput] = useState('')

  function changePage(n) {
    page === 1 && n === -1 ?
    page :
    setPage(prev => prev + n)
  }

  function changeInput(newInput) {
    setInput(newInput.target.value)
  }

  return (
      <div className="App">
        <Header input={input} changeInput={changeInput}/>
        <Cards 
          page={page} 
          changePage={changePage} 
          input={input}
        />
        <Footer 
          page={page} 
          changePage={changePage} 
          input={input}
        />
      </div>
  )
}

export default App
