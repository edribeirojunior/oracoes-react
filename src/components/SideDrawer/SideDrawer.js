import React from 'react';
import './SideDrawer.css'

const sideDrawer = props => {
    let drawerClasses = ['side-drawer'];
    if (props.show) {
        drawerClasses = 'side-drawer open';
    }
    return (
     <nav className={drawerClasses}>
        <ul>
            <li>
                <a href="/">Home</a>
            </li>
            <li>
                <a href="/oficio-da-paixao">Oficio da Paixão</a>
            </li>
            <li>
                <a href="/oracao-padre-pio">Oração Padre Pio</a>
            </li>
            <li>
                <a href="/oracao-agostinho">Oração Santo Agostinho</a>
            </li>
            <li>
                <a href="/oracao-tomas">Oração Santo Tomas</a>
            </li>
            <li>
                <a href="/divino-coracao">Divino Coração de Jesus</a>
            </li>
            <li>
                <a href="/eucaristico">Eucaristico</a>
            </li>
            <li>
                <a href="/sacramento">Sacramento</a>
            </li>
        </ul>
     </nav>
    );
}

export default sideDrawer;