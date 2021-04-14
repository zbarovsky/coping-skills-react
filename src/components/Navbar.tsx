import React from 'react'
import {Link} from 'react-router-dom';

function Navbar() {

    return (
        <div className="nav-container">
            <div className='nav-ul'>
                <ul>
                    <li>Home</li>
                    <li>Resources</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;