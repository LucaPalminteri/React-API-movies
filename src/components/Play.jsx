
export default function Play() {


    document.body.requestFullscreen()

    return (
        <div className='play'>
            <div className='lds-ring'><div></div><div></div><div></div><div></div></div>        
        </div>
    )
}