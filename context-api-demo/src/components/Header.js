import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import Toggle from './Toggle/Toggle';

const Header = () => {

    const { dispatch } = useContext(ThemeContext);

    const handleTheme = () => {
        dispatch({ type: 'CHANGE_THEME' })
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