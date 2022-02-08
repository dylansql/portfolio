import './Aboutme.css'

export default function Aboutme() {
    return (
        <div className="Aboutme">
            <div className="Summary">
                <div className="manipulate">
                    <div className="img-tag">
                    <img id="profile" src="https://res.cloudinary.com/ddid7dngp/image/upload/v1637080785/3B633958-79B7-4111-A132-E0C435463CEA_1_201_a_snpddg.jpg" alt="portrait-Dylan" style={{height: "350px", width: "300px"}}/>
                    </div>
                    <div className="sum-title">
                    <h1>About Me</h1>
                    </div>
                    <div className="paragraph">
                    <p>An Atlanta raised full-stack developer with a background
                         in music and customer service. As a quick learner, my 
                         success comes from my ability to be flexible in the workplace. 
                         Investing both emotional labor and technical skill, I am able to 
                         bring the best out of my team members. I am proactive in seeking 
                         out problems and strive to solve them quickly and efficiently.</p>
                    </div>
                 </div>
            </div>
        </div>
    )
}
