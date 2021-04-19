import React from 'react'
import {Link} from 'react-router-dom';

function Navbar() {

    return (
        <div className="nav-container">
            <div className='nav-ul'>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/resources'>Resources</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;