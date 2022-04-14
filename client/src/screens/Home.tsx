import React from 'react'
import { Link } from 'react-router-dom'
const Home: React.FC = () =>{
    return <div>
        <Link to="/ViewALS">
            View Activity List Sheet.
        </Link>
        
        <Link to="/EnterALS">
            Enter Activity List Sheet.
        </Link>
        
        <Link to="/EditALS">
            Edit Activity List Sheet.
        </Link>
    </div>
}

export default Home