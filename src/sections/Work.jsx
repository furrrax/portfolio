import React from 'react';

import WorkSlider from '../components/WorkSlider';

import workBg from '../img/work-bg.svg';

import '../css/work.css';

const Work = () => {

    return (
        <section class="work">
            <WorkSlider />
            <img src={workBg} className="work__bg" alt="bg pic" />
        </section>
    )
}

export default Work;