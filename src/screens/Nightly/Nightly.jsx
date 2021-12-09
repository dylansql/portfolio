import './Nightly.css'

export default function Nightly() {
    return (
        <div className="main-container">
            <div className="box">
                <div className="title">
                    <h1>Nightly</h1>
                </div>
                <div className="prev-pics">
                <img src="https://res.cloudinary.com/ddid7dngp/image/upload/v1639065930/Listing_cwrsni.jpg" style={{height: "200px", width:"350px"}}/>
                <img src="https://res.cloudinary.com/ddid7dngp/image/upload/v1639065930/LANding_tnssbl.jpg" style={{height: "200px", width:"350px"}}/>
                <img src="https://res.cloudinary.com/ddid7dngp/image/upload/v1639065930/Help_mi74rk.jpg" style={{height: "200px", width:"350px"}}/>
                </div>
                <div className="summary">
                    <h1>Summary</h1>
                    <p> The Docks is an application that aimed 
                        to let people perform peer to peer renting. 
                        This application allows users to take items 
                        they do not use in the house and start an 
                        online market where they are.
                        </p>
                        <h2>Team Role</h2>
                        <p>In this team project, My role included the following: 
                        <ul>
                            <li>Assiting in Backend Development and Configuration using mongo DB</li>
                            <li>Curating the Landing</li>
                            <li>Listing page</li>
                            <li>Assisted in project management ensuring the team was hitting their goals each day</li>
                        </ul>
                        </p>
                </div>
                <div className="stack-sum">
                    <h1>Stack Used</h1>
                    <img src="https://res.cloudinary.com/ddid7dngp/image/upload/v1637167417/pngegg_xd7333.png" style={{height: "125px", width:"375px"}}/>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png" style={{height: "125px", width:"400px"}}/>
                    <img src="https://res.cloudinary.com/ddid7dngp/image/upload/v1638987762/toppng.com-react-logo-396x134_h7anmj.png" style={{height: "150px", width:"350px"}}/>
                    <img src="https://res.cloudinary.com/ddid7dngp/image/upload/v1637167264/kisspng-web-development-node-js-javascript-software-develo-node-js-icon-5b4aff47d622e1.0467371515316416718771_ottt8t.png" style={{height: "200px", width:"200px"}}/>
                    <ul>
                        <li>Heroku Frontend</li>
                        <li>Mongo DB Backend</li>
                    </ul>
                    <div className="site-button">
                        <button><a href="https://nightlyy.netlify.app/">Link to Site</a></button>
                    </div>
                </div>
            </div>
        </div>
    )
}
