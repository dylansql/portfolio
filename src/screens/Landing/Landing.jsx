import './Landing.css'
import Typewriter from 'typewriter-effect'
import bootstrap from 'bootstrap'


export default function Landing() {
    return (
        <div className="Landing">
            
            <div className="intro-page">
                <h1>Hi. Im Dylan!</h1>
                <h1>Full Stack Engineer</h1>
                <h1>A little About Me: </h1>
                <p class="h1">
                <Typewriter 
                className="typer"
                onInit={(Typewriter) => {
                    Typewriter.typeString("Full Stack Engineer")
                    .pauseFor(2000)
                    .deleteAll()
                    .typeString("Musician")
                    .pauseFor(2000)
                    .deleteAll()
                    .typeString("Web-Developer")
                    .pauseFor(2000)
                    .deleteAll()
                    .typeString("Artist")
                    .pauseFor(8000)
                    .deleteAll()
                    .start()
                }}
                />
                </p>
                </div>
                {/* <div className='secret-message'>
                    <h2>This will be a secret message.</h2>
                    <h2>There will be more to this.</h2>
                    <p class="h2">Quixk message</p>
                </div> */}

        </div>
    )
}
