import React from 'react'

function Footer() {

    return (
        <div className='footer-container'>
            <div className='copyright'>
               <p>© Zack Barovsky 2021</p> 
            </div>
            <div className='footer-social-media'>
                <ul>
                    <li>
                        <a rel='noopener noreferrer' target='_blank' href='https://www.linkedin.com/in/zbarovsky/'>LinkedIn</a>
                    </li>
                    <li>
                        <a rel='noopener noreferrer' target='_blank' href='https://github.com/zbarovsky'>GitHub</a>
                    </li>
                    <li>
                        <a rel='noopener noreferrer' target='_blank' href='https://twitter.com/zbarovsky'>Twitter</a>
                    </li>
                    <li>
                        <a rel='noopener noreferrer' target='_blank' href='https://www.instagram.com/zbarovsky/'>Instagram</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default Footer;