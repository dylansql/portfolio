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
                    <p>An Atlanta based full-stack developer with a 
                    background in music and customer-service. I 
                    believe my success comes from my ability to 
                    be flexible within the workplace once having 
                    a solid foundation. Investing emotional labor 
                    and not skill alone, I am able to bring the 
                    best out of my team members becoming a problem
                    seeker instead of a problem solver.</p>
                    </div>
                 </div>
            </div>
        </div>
    )
}
