import React, { useState } from 'react';
import CarAnimation from './CarAnimation';
import CarText from './CarText';

const Car = () => {
    const [speed, setSpeed] = useState('0');
    const [isOn, setIsOn] = useState(false);

    const changeSpeed = (event) => {
        setSpeed(event.target.value);

        if (event.target.value === '0') {
            setIsOn(false);
        } else {
            setIsOn(true);
        }
    };

    return (
        <div>
            <CarText isOn={isOn} changeSpeed={changeSpeed} />
            <CarAnimation speed={speed} />
        </div>
    );
};

export default Car;
