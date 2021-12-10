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
                        {/* <Link to="/colab"><button>Co-Lab</button></Link> */}
                        <div className="portal">
                        <Link to="/nightly"><img src="https://res.cloudinary.com/ddid7dngp/image/upload/v1639065930/LANding_tnssbl.jpg" style={{height: "200px", width:"350px"}}/>Nightly</Link>
                        </div>
                        <div className="portal">
                        <Link to="/thedocks"><img src="https://res.cloudinary.com/ddid7dngp/image/upload/v1638984194/The_Docks_Assets_f89j7x.jpg" style={{height: "200px", width:"350px"}}/>The Docks</Link>
                        </div>
                        <div className="portal">
                        <Link to="/samplerewind"><img src="https://res.cloudinary.com/ddid7dngp/image/upload/v1638966120/RECENT_RECORDS_mkopyd.jpg" style={{height: "200px", width:"300px"}}/>RECENT RECORDS</Link>
                        </div>
                        </div>
                    </div>
            </div>
        </div>
    )
}
