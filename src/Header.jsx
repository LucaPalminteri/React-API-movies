import { useEffect, useState } from 'react'

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
      <h1>Pelipedia</h1>
      {width < 980 ?
      <>
        <div className='menuButton' onClick={toggleMenu}>☰</div>
      </> :
      <>
      <ul className='navbar'>
        <li>Home</li>
        <li>Most streamed</li>
        <li>Contact us</li>
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
        <li>Home</li>
        <li>Most streamed</li>
        <li>Contact us</li>
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
      <button className='submit searchRender' type='submit'>Search</button>
      
      </div>
      </div> :
      showMenu}
    </div>
    </>
  )
}

export default Header
