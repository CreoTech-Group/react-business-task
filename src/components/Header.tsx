import React from 'react';

import 'components/Header.scss';
import logo from 'assets/logo.png';
import { FormattedMessage } from 'react-intl';

const Header: React.FC = () => {
    return (
        <div className='header'>
            <div className='header-container'>
                <img className='header-image' src={logo} alt='logo' />
                <span><FormattedMessage id="app.name" /></span>
            </div>
        </div>
    );
};

export default Header;
