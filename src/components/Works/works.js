import React from 'react';
import './works.css';
import Porto1 from '../../assets/Porto1.jpg';
import Porto2 from '../../assets/Porto2.jpg';

const Works = () => {
  return (
    <section id='works'>
        <h2 className='worksTitle'>All Of My <p>Portofolio</p></h2>
        <span className='worksDesc'> Here My Github
        </span>
        <a className='LinkGit' href='https://github.com/JefflineKristianD'>Github</a>
            
            <div className='worksImgs'>
            <img src={Porto1} alt='Porto1' className='worksImg'/>
            <a className='LinkPorto' href='https://github.com/JefflineKristianD/AndroidProject'>Natia</a>
            </div>

            <div className='worksImgs'>
            <img src={Porto2} alt='Porto2' className='worksImg'/>
            <a className='LinkPorto' href='https://github.com/JefflineKristianD/DatabaseCourse'> DatabaseCourse</a>
            </div>

            <div className='worksImgs'>
            <img src={Porto2} alt='Porto2' className='worksImg'/>
            <a className='LinkPorto' href='https://github.com/JefflineKristianD/DatabaseCourse'> DatabaseCourse</a>
            </div>
    </section>
  )
}

export default Works