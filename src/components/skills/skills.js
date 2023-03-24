import React from 'react'
import './skills.css'

import SkillItem from './skillItem';

function Skills() {
    return (
        <div className='skillsContainer'>
            <p className='SkillsContainerTitle'>This is the skills block</p>
            <div className='SkillItemWrapper'>
                <SkillItem></SkillItem>
                <SkillItem></SkillItem>
                <SkillItem></SkillItem>
                <SkillItem></SkillItem>
                <SkillItem></SkillItem>
                <SkillItem></SkillItem>
            </div>

        </div>
    )
}

export default Skills;