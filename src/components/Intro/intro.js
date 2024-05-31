import React from 'react'
import './intro.css';
import Foto from '../../assets/Fotosaya.jpg';

const intro = () => {
  return (
    <section id='intro'>
        <div className='introContent'>
            <img src={Foto} alt='Foto' className='Fotosaya'/>
            <span className='Hello'>Hi! </span>
            <span className='introText'>I'm <span className='introName'>Jeffline</span> <br/>Here's</span>
            <p className='introPara'>My Portofolio</p>
        </div>
    </section>
  )
}

export default intro;