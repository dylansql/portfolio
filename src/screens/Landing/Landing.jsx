import './Landing.css'
import Typewriter from 'typewriter-effect'

export default function Landing() {
    return (
        <div className="Landing">
            <div className="intro-page">
                <h1>Hi. Im Dylan!</h1>
                <h1>Full Stack Engineer</h1>
                <h1>A little About Me: </h1>
                <Typewriter 
                className="typer"
                onInit={(Typewriter) => {
                    Typewriter.typeString("Full Stack Engineer")
                    .pauseFor(2000)
                    .deleteAll()
                    .typeString("Musician")
                    .pauseFor(2000)
                    .deleteAll()
                    .typeString("Artist")
                    .pauseFor(2000)
                    .deleteAll()
                    .start()
                }}
                />
            </div>
        </div>
    )
}
