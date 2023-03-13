import React from 'react';
import './CarAnimation.css';

const CarAnimation = ({ speed }) => {
    return (
        <div>
            <img
                className={`speed-${speed} car-image`}
                src={process.env.PUBLIC_URL + '/car-image.png'}
                alt='car animation'
            />
        </div>
    );
};

export default CarAnimation;
