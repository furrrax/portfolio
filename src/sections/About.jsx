import React from 'react';

const About = () => {

    return (
        <section className="about">
            <div className='about__desc'>
                <h5 className='about__desc__title'>
                    Обо мне
                </h5>
                <div className='about__desc__text'>
                    Привет! Меня зовут Виталий. I’m a UI Designer and a instrutor based in Montreal. I’m curently working with Design+Code. I’m passionate about creating digital experiences and teaching design. My goal is to help beginners to grow their skills...read more
                </div>
                <img src className="about__bg1" alt="bg pic" />
                <img src className="about__bg2" alt="bg pic" />
            </div>
        </section>
    )
}

export default About;