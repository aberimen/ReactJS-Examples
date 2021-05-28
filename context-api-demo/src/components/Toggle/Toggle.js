import React, { useState } from 'react';
import './Toggle.css';


const Toogle = ({ callback }) => {
    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        setIsActive(!isActive);
        callback();
    }

    return (
        <button className={`toggle ${isActive && 'clicked'}`} onClick={handleClick} />

    );
};

export default Toogle;