import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Header(props) {

  const [width, setWidth] = useState(window.innerWidth)
  const [showMenu,setShowMenu] = useState(false)

  function toggleMenu() {
    setShowMenu(prev => !prev)
  }
  
  useEffect(()=>{
    if (width >= 980) setShowMenu(false)
    function handleResize() {
      setWidth(window.innerWidth)
    }
    window.addEventListener('resize',handleResize)
  })
  
  return (
    <>
    <div className="header">
      <h1><Link to='/' className='link'>Pelipedia</Link></h1>
      {width < 980 ?
      <>
        <div className='menuButton' onClick={toggleMenu}>☰</div>
      </> :
      <>
      <ul className='navbar'>
        <li><Link to='/movies' className='link'>Movies</Link></li>
        <li><Link to='/most-streamed' className='link'>Most streamed</Link></li>
        <li><Link to='categories' className='link'>Categories</Link></li>
      </ul>
      <input 
        placeholder='Search movie'
        type='text' 
        name='input'
        value={props.input}
        onChange={props.changeInput}
      />
      <button className='submit' type='submit'>Search</button>
      </>
      }
    </div>
    <div className='menuRender'>
      {showMenu ? 
      <div>
      <ul className='navbarRender'>
        <li><Link to='/movies' className='link' onClick={toggleMenu}>Movies</Link></li>
        <li><Link to='/most-streamed' className='link' onClick={toggleMenu}>Most streamed</Link></li>
        <li><Link to='categories' className='link' onClick={toggleMenu}>Categories</Link></li>
      </ul>
      <div >
      <input 
      className='searchRender'
        placeholder='Search movie'
        type='text' 
        name='input'
        value={props.input}
        onChange={props.changeInput}
      />
      <button className='submit searchRender' type='submit' onClick={toggleMenu}>Search</button>
      
      </div>
      </div> :
      showMenu}
    </div>
    </>
  )
}

export default Header
