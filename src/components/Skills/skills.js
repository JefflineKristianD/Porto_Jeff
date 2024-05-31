import React from 'react';
import './skills.css';
import HTMLDesign from '../../assets/htmlicon1.png';
import GifpyDesign from '../../assets/py.png';
import ReactDesign from '../../assets/Reactpic1.png';
import JavaDesign from '../../assets/Java.png'

const Skills = () => {
  return (
    <section id='skills'>
        <span className='skillTitle'>My Skills Overall</span>
        <span className='skillDesc'>I am skilled and passionate as a web Developer</span>
        <div className='skillBars'>
            <div className='skillBar'>
            <img src={HTMLDesign} alt='HTMLDesign' className='skillBarImg'/>
            <h2>HTML</h2>
            </div>

            <div className='skillBar'>
            <img src={GifpyDesign} alt='GifpyDesign' className='skillBarImg'/>
            <h2>Python</h2>
            </div>

            <div className='skillBar'>
            <img src={ReactDesign} alt='ReactDesign' className='skillBarImg'/>
            <h2>React</h2>
            </div>
            <div className='skillBar'>
            <img src={JavaDesign} alt='JavaDesign' className='skillBarImg'/>
            <h2>Java</h2>
            </div>
        </div>
    </section>
    )
}

export default Skills;