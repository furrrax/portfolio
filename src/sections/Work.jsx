import React from 'react';

import WorkSlider from '../components/WorkSlider';

const Work = () => {

    return (
        <section class="work">
            <WorkSlider />
            <img src className="work__bg1" alt="bg pic" />
            <img src className="work__bg2" alt="bg pic" />
        </section>
    )
}

export default Work;