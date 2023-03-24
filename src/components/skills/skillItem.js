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
                <p className='SkillItemTitle'>HTML</p>
                <div className='SkillProgressBar'>
                    <div className='SkillProgress'>
                    </div>
                </div>
                <p className='SkillStarted'>Skill Started: 2019</p>
            </div>
        </div>
    )
}

export default SkillItem;
