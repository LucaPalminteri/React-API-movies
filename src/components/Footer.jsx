import { useState,useContext, useEffect  } from 'react'

function Footer(props) {
  const [isRender, setIsRender] = useState(true)

  useEffect(()=>{
    if(props.input !== '') setIsRender(false)
    else if(props.input === '') setIsRender(true)
  },[props.input])

  function render(){
    if(props.input === '') {
      return (
        <>
          <button onClick={ () => props.changePage(-1)}>Previous</button>
          <span>{props.page}</span>
          <button onClick={() => props.changePage(1)}>Next</button> 
        </>
      )
    }
  }

  return (
    <div className={isRender ? 'footer' : 'zero'}>
      {render()}
    </div>
  )
}

export default Footer
