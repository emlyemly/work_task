import React from 'react';

const CarText = ({ isOn, changeSpeed }) => {
    return (
        <div>
            {console.log(isOn)}
            <p>Car is {isOn ? 'on' : 'off'}</p>
            <label htmlFor='change-speed'>Change speed: </label>
            <br />
            <select
                id='change-speed'
                name='speed-picker'
                onChange={changeSpeed}
                defaultValue='0'
            >
                <option value='0'>0</option>
                <option value='20'>20</option>
                <option value='40'>40</option>
                <option value='60'>60</option>
            </select>
        </div>
    );
};

export default CarText;
