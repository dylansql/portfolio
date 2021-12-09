import { Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom'
import './Work.css'

export default function Work() {







    return (
        <div className="work-div">
            <div className="title">
            <h1>Projects</h1>
            </div>
            <div className="btn-select">
            <Link to="/colab"><button>Co-Lab</button></Link>
            <Link to="/nightly"><button>Nightly</button></Link>
            <Link to="/thedocks"><button>The Docks</button></Link>
            <Link to="/samplerewind"><button>RECENT RECORDS</button></Link>
            </div>
        </div>
    )
}
