import axios from 'axios'
import React, {useState, useEffect} from 'react'

function CopingSkill() {

    const [copingSkill, setCopingSkill] = useState<object>()

    useEffect(() => {
        let copingSkillId: number = Math.floor(Math.random() * 100)
        console.log(copingSkillId)
        axios.get(`http://127.0.0.1:5000/api/copingskill/`, {params: {id: copingSkillId}})
        .then(response => {
            console.log(response, typeof response)
            setCopingSkill(response.data.skill)
        })
    }, [])

    return (
        <div className="coping-skill">
            {copingSkill}
        </div>
    )
}
export default CopingSkill