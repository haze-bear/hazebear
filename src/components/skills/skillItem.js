import React from 'react'
import './skillItem.css'

// Want a pull forward animation on hover, 
// 3d ish efect of the card lifting upload, corresponding glow underneath
function SkillItem(props) {
    return (
        <div className='SkillItemContainer'>
            <div className="SkillImagePH">
            </div>

            <div className='SkillItemBody'>
                <p className='SkillItemTitle'>{props.Name}</p>
                <div className='SkillProgressBar'>
                    <div className='SkillProgress' style={props.CStyle}>
                    </div>
                </div>
                <p className='SkillStarted'>Skill Started: {props.Start}</p>
            </div>
        </div>
    )
}

export default SkillItem;
