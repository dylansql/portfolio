import './Nightly.css'

export default function Nightly() {
    return (
        <div className="main-container">
            <div className="box">
                <div className="title">
                    <h1>Nightly</h1>
                </div>
                <div className="prev-pics">
                    <div id="nightly-pic-1" className="pic">
                        <img src="https://res.cloudinary.com/ddid7dngp/image/upload/v1639065930/Listing_cwrsni.jpg" style={{height: "200px", width:"350px"}}/>
                    </div>
                    <div id="nightly-pic-2" className="pic">
                        <img src="https://res.cloudinary.com/ddid7dngp/image/upload/v1639065930/LANding_tnssbl.jpg" style={{height: "200px", width:"350px"}}/>
                    </div>
                    <div id="nightly-pic-3" className="pic">
                        <img src="https://res.cloudinary.com/ddid7dngp/image/upload/v1639065930/Help_mi74rk.jpg" style={{height: "200px", width:"350px"}}/>
                    </div>
                    </div>
                <div className="summary">
                    <h1>Summary</h1>
                    <p> Nightly is an online forum where people 
                        can find sources from others in the community 
                        who have a hard time sleeping. 
                        {/* </p>
                        <h2>Team Role</h2>
                        <p>In this team project, My role included the following: 
                        <ul>
                            <li>Assiting in Backend Development and Configuration using mongo DB</li>
                            <li>Curating the Landing</li>
                            <li>Listing page</li>
                            <li>Assisted in project management ensuring the team was hitting their goals each day</li>
                        </ul> */}
                        </p>
                </div>
                <div className="stack-sum">
                    <h1>Stack Used</h1>
                    <div className="site-button">
                        <ul>
                        <li>Deployed via Netflify</li>
                        <li>React Frontend</li>
                        <li>Ruby on Rails Backend</li>
                        </ul>
                    </div>
                    <div className="top-pics">
                        <img src="https://res.cloudinary.com/ddid7dngp/image/upload/v1639145148/pngwing.com_do2dyw.png" style={{height: "200px", width:"200px"}}/>
                        {/* <img src="https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png" style={{height: "125px", width:"400px"}}/> */}
                        <img src="https://download.logo.wine/logo/Ruby_on_Rails/Ruby_on_Rails-Logo.wine.png" style={{height: "200px", width:"300px"}}/>
                        <img src="https://res.cloudinary.com/ddid7dngp/image/upload/v1638987762/toppng.com-react-logo-396x134_h7anmj.png" style={{height: "150px", width:"350px"}}/>
                    </div>
                        <div className='work-link'>
                            <button id="btn"><a href="https://nightlyy.netlify.app/">site</a></button>
                            <button id="btn"><a href="https://github.com/dylansql/Nightly">github</a></button>
                        </div>
                </div>
            </div>
        </div>
    )
}
