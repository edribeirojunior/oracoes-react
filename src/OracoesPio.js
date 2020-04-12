import React, { Component } from 'react';
import Header from './components/Header';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';
import './styles.css';


class OracaoPio extends Component {
    state = {
        sideDrawerOpen: false
    };
    drawerToggleClickHandler = () => {
        this.setState((prevState) => {
            return {sideDrawerOpen: !prevState.sideDrawerOpen};
        });
    };

    backdropClickHandler = () => {
        this.setState({sideDrawerOpen: false})
    };

    render () {
        let backdrop;

        if (this.state.sideDrawerOpen) {
        backdrop = <Backdrop click={this.backdropClickHandler}/>;
        }

        return (
            <div className="Oracoes">
                <Header drawerClickHandler={this.drawerToggleClickHandler} />
                <SideDrawer show={this.state.sideDrawerOpen}/>
                {backdrop}
                <div>
                <p className="Oracoes-Pio">
                    <h2>Fica comigo, Senhor!</h2>
                    <h4><i>Reze conosco esta belíssima oração do Santo Padre Pio de Pietrelcina, um dos maiores místicos do século XX.</i></h4>
                    <span>
                    <b>Fica Senhor comigo,</b> pois preciso da tua presença para não te esquecer.<br></br>
                    <b>Sabes quão facilmente posso te abandonar.</b><br></br>
                    <b>Fica Senhor comigo,</b> porque sou fraco e preciso da tua força para não cair.<br></br>
                    <b>Fica Senhor comigo,</b>, porque és minha vida, e sem ti perco o fervor.<br></br>
                    <b>Fica Senhor comigo,</b>, porque és minha luz, e sem ti reina a escuridão.<br></br>
                    <b>Fica Senhor comigo,</b>, para me mostrar tua vontade.<br></br>
                    <b>Fica Senhor comigo,</b>, para que ouça tua voz e te siga.<br></br>
                    <b>Fica Senhor comigo,</b>, pois desejo amar-te e permanecer sempre em tua companhia.<br></br>
                    <b>Fica Senhor comigo,</b>, se queres que te seja fiel.<br></br>
                    <b>Fica Senhor comigo,</b>, porque, por mais pobre que seja minha alma,<br></br>
                    quero que se transforme num lugar de consolação para ti, um ninho de amor.<br></br>
                    <b>Fica comigo, Jesus,</b> pois se faz tarde e o dia chega ao fim; a vida passa,<br></br>
                    e a morte, o julgamento e a eternidade se aproximam. <br></br>
                    Preciso de ti para renovar minhas energias e não parar no caminho.<br></br> 
                    Está ficando tarde, a morte avança e eu tenho medo da escuridão, das tentações, da falta de fé, da cruz, das tristezas.<br></br>
                    Oh, quanto preciso de ti, meu Jesus, nesta noite de exílio.<br></br>
                    <b>Fica comigo nesta noite, Jesus,</b> pois ao longo da vida,<br></br>
                    com todos os seus perigos, eu preciso de ti. Faze, Senhor, que te reconheça como te reconheceram teus discípulos ao partir do pão,<br></br>
                    a fim de que a Comunhão Eucarística seja a luz a dissipar a escuridão, a força a me sustentar, a única alegria do meu coração.<br></br>
                    <b>Fica comigo, Senhor,</b> porque na hora da morte quero estar unido a ti,<br></br>
                    se não pela Comunhão, ao menos pela graça e pelo amor.<br></br>
                    <b>Fica comigo, Jesus.</b> Não peço consolações divinas, porque não as mereço,<br></br>
                    mas apenas o presente da tua presença, ah, isso sim te suplico!<br></br>
                    <b>Fica Senhor comigo,</b> pois é só a ti que procuro, teu amor, tua graça, tua vontade, teu coração, teu Espírito, porque te amo, e a única recompensa que te peço é poder amar-te sempre mais. <br></br> 
                    Com este amor resoluto desejo amar-te de todo o coração enquanto estiver na terra, para continuar a te amar perfeitamente por toda a eternidade. <br></br>
                    <b>Amém.</b><br></br>
                    <b>São Padre Pio</b>, rogai por nós!
                    </span>
                </p>
                </div>
            </div>
        );
    }
}

export default OracaoPio;