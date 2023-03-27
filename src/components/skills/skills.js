import React from 'react'
import './skills.css'

import SkillItem from './skillItem';

// import SkillData from '../../data/skills.json'

const SkillData = require('../../data/skills.json');

const mapped = SkillData.d.map((i) =>
    <SkillItem Name={i.Name} Start={i.Start}/>
    )

function Skills() {
    return (
        <div className='skillsContainer'>
            <p className='SkillsContainerTitle'>This is the skills block</p>
            <div className='SkillItemWrapper'>
                {mapped}
            </div>
        </div>
    )
}

export default Skills;