import React from 'react'

function Resources() {

    return (
        <div>
            <div className='resources'>
                <h2 className='resource-title'>Listed below are some of the many resources available</h2>
                <p className='resource-text'>Note: If you or someone you know is experiencing a crisis, <strong>call 911</strong>, or go to the nearest emergency room</p>
            </div>
            <div className='resources'>
                <h3 className='resource-title'>National Suicide Prevention Lifeline:</h3>
                <p className='resource-text'>Call: 1-800-TALK(8255)</p>
            </div>
            <div className='resources'>
                <h3 className='resource-title'>Crisis Text Line:</h3>
                <p className='resource-text'>Text: "Hello" to 741741</p>
            </div>
            <div className='resources'>
                <h3 className='resource-title'>Veterans Crisis Line:</h3>
                <p className='resource-text'>Call: 1-800-273-TALK(8255) and press 1 OR text to 838255</p>
            </div>
            <div className='resources'>
                <h3 className='resource-title'>Want to know how to support someone in Emotional Pain, visit the link below</h3>
                <a className='resource-link' rel='noopener noreferrer' target='_blank' href='https://www.nimh.nih.gov/health/publications/5-action-steps-for-helping-someone-in-emotional-pain/index.shtml'>5 Action Steps for Helping Someone in Emotional Pain</a>
            </div>
            <div className='resources'>
                <p>For additional rescources visit <a className='resource-link' rel='noopener noreferrer' target='_blank' href='https://www.nimh.nih.gov/health/index.shtml'>The National Institute of Mental Health</a></p>
            </div>
        </div>
    )
}
export default Resources