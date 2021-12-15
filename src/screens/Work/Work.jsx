import { Link } from 'react-router-dom'
import './Work.css'

export default function Work() {


    return (
        <div className="work-div">
            <div className="box">
                <div className="title">
                <h1>Projects</h1>
                </div>
                <div className='btn-group'>
                    <div className="btn-select">
                        <div className="presentation">
                            <div id="carouselExampleCaptions" class="carousel carousel-dark slide" data-bs-ride="carousel">
                                <div class="carousel-indicators">
                                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <Link to="/nightly"><img src="https://res.cloudinary.com/ddid7dngp/image/upload/v1639065930/LANding_tnssbl.jpg" class="d-block w-100" alt="NIGHTLY"/></Link>
                        <div class="carousel-caption d-none d-md-block">
                            <h5 style={{color: "white", "font-family": 'Bakbak One'}}>Nightly</h5>
                            <p style={{color: "white", "font-family": 'Bakbak One'}}>Open Source application that encourages users to share sleep/mediation advice</p>
                        </div>
                        </div>
                        <div class="carousel-item">
                        <Link to="/thedocks"><img src="https://res.cloudinary.com/ddid7dngp/image/upload/v1638984194/The_Docks_Assets_f89j7x.jpg" class="d-block w-100" alt="The Docks"/></Link>
                        <div class="carousel-caption d-none d-md-block">
                            <h5 style={{"font-family": 'Bakbak One'}}>The Docks</h5>
                            <p style={{"font-family": 'Bakbak One'}}>An application that aims to allow people to perform peer to peer renting.</p>
                            </div>
                            </div>
                        <div class="carousel-item">
                        <Link to="/samplerewind"><img src="https://res.cloudinary.com/ddid7dngp/image/upload/v1638966120/RECENT_RECORDS_mkopyd.jpg" class="d-block w-100" alt="RECENT RECORDS"/></Link>
                        <div class="carousel-caption d-none d-md-block">
                            <h5 style={{"font-family": 'Bakbak One'}}>RECENT RECORDS</h5>
                            <p style={{"font-family": 'Bakbak One'}}>An application that allows users to type in their favorite artists and see a carousel of all of their most recent albums.</p>
                                </div>
                                </div>
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                            </div>
                            </div>
                        </div>
                        {/* <Link to="/colab"><button>Co-Lab</button></Link> */}
                        {/* <div className="portal">
                        <Link to="/nightly"><img src="https://res.cloudinary.com/ddid7dngp/image/upload/v1639065930/LANding_tnssbl.jpg" style={{height: "200px", width:"350px"}}/>Nightly</Link>
                        </div>
                        <div className="portal">
                        <Link to="/thedocks"><img src="https://res.cloudinary.com/ddid7dngp/image/upload/v1638984194/The_Docks_Assets_f89j7x.jpg" style={{height: "200px", width:"350px"}}/>The Docks</Link>
                        </div>
                        <div className="portal">
                        <Link to="/samplerewind"><img src="https://res.cloudinary.com/ddid7dngp/image/upload/v1638966120/RECENT_RECORDS_mkopyd.jpg" style={{height: "200px", width:"300px"}}/>RECENT RECORDS</Link>
                        </div> */}
                        </div>
                        </div> 
        </div>
    )
}
