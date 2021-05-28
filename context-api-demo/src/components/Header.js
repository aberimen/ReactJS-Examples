import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import Toggle from './Toggle/Toggle';

const Header = () => {

    const { changeTheme } = useContext(ThemeContext);

    const handleTheme = () => {
        changeTheme();
    }

    return (
        <header className="d-flex">
            <div className="ms-auto" >
                <Toggle callback={handleTheme} />

            </div>
        </header>
    );
};

export default Header;