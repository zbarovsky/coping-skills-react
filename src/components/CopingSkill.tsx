import axios from 'axios'
import React, {useState, useEffect} from 'react'
import {useSpring, animated} from 'react-spring'

function CopingSkill() {

    const [copingSkill, setCopingSkill] = useState<string>('')

    // const spring:any = useSpring({opacity: 1, from: {opacity: 0}})

    function GenerateSkill(e:any):void {
        e.preventDefault()
        let copingSkillId: number = Math.floor(Math.random() * 100)
        console.log(copingSkillId)
        axios.get(`${process.env.REACT_APP_API}/copingskill/`, {params: {id: copingSkillId}})
        .then(response => {
            console.log(response, typeof response)
            setCopingSkill(response.data.skill)
        })
    }

    return (
        <div className="coping-skill-container">
            <div className='instructions'>
                <h2>How it Works</h2>
                <p>Need a quick coping skill? Click the button below to get a brand new skill to try out. Don't like that one? Click it again until you find one that works for you</p>
            </div>
            <div className='coping-skill'>
                {/* <animated.p style={spring}>{copingSkill}</animated.p> */}
                <p className='skill'>{copingSkill}</p>
            </div>
            <div className='coping-skills-button'>
                <button className='button' onClick={GenerateSkill}>Generate Coping Skill</button>
            </div>
        </div>
    )
}
export default CopingSkill