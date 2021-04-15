import axios from 'axios'
import React, {useState, useEffect} from 'react'

function CopingSkill() {

    const [copingSkill, setCopingSkill] = useState<string>('')

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
                <p>{copingSkill}</p>
            </div>
            <div className='coping-skills-button'>
                <button onClick={GenerateSkill}>Generate Coping Skill</button>
            </div>
        </div>
    )
}
export default CopingSkill