import React from 'react';

import WorkSlider from '../components/WorkSlider';

const Work = () => {

    return (
        <section class="work">
            <h5 className='work__title'>
                Мои работы
            </h5>
            <WorkSlider />
            <img src className="work__bg" alt="bg pic" />
        </section>
    )
}

export default Work;