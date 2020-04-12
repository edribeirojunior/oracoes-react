import React from 'react';
import './styles.css';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';

const Header = props => (
    <header className='toolbar'>
        <nav className="toolbar__navigation">
            <div className="toolbar__toggle-button">
                <DrawerToggleButton click={props.drawerClickHandler}/>
            </div>
            <div className="toolbar__logo"><a href="/">Orações Gil</a></div>
            <div className="spacer"></div>
            <div className="toolbar_navigation-items">
                <ul>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/oficio-da-paixao">Oficio</a>
                    </li>
                    <li>
                        <a href="/oracao-padre-pio">Padre Pio</a>
                    </li>
                    <li>
                        <a href="/oracao-agostinho">Agostinho</a>
                    </li>
                    <li>
                        <a href="/oracao-tomas">Tomas</a>
                    </li>
                    <li>
                        <a href="/divino-coracao">Coração de Jesus</a>
                    </li>
                    <li>
                        <a href="/eucaristico">Eucaristico</a>
                    </li>
                    <li>
                        <a href="/sacramento">Sacramento</a>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
);

export default Header;