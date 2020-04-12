import React, { Component } from 'react';
import Header from './components/Header';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';
import './styles.css';


class OracaoAgostinho extends Component {
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
                <p className="Oracoes-Agostinho">
                Santo Agostinho, Doutor da Igreja, após um longo período de vida devassa, por intercessão de sua mãe, Santa Mônica, constatou quanto tempo havia perdido por viver seu intervalo na carne, e não no Espírito, e ergueu essa belíssima oração: <br></br>
                </p>
                <p>
                <span>
                    <i>
                    Tarde Te amei, ó Beleza tão antiga e tão nova. Tarde Te amei!<br></br>
                    Trinta anos estive longe de Deus, mas, durante esse tempo, algo se movia dentro do meu coração.<br></br>
                    Eu era inquieto, alguém que buscava a felicidade, buscava algo que não achava.<br></br> 
                    Mas Tu Te compadeceste de mim e tudo mudou, porque Tu me deixaste conhecer-Te.<br></br> 
                    Entrei no meu íntimo sob a Tua Guia e consegui, porque Tu Te fizeste meu auxílio.<br></br>
                    Tu estavas dentro de mim e eu fora. “Os homens saem para fazer passeios, a fim de admirar o alto dos montes, o ruído incessante dos mares, o belo e ininterrupto curso dos rios, os majestosos movimentos dos astros.<br></br>
                    E, no entanto, passam ao largo de si mesmos. Não se arriscam na aventura de um passeio interior”.<br></br>
                    Durante os anos de minha juventude, pus meu coração em coisas exteriores que só faziam me afastar, cada vez mais, d’Aquele a Quem meu coração, sem saber, desejava. <br></br> 
                    Eis que estavas dentro e eu fora! <br></br>
                    Seguravam-me longe de Ti as coisas que não existiriam senão em Ti. Estavas comigo e não eu Contigo. <br></br>
                    Mas Tu me chamaste, clamaste por mim e Teu grito rompeu a minha surdez. “Fizeste-me entrar em mim mesmo.<br></br> 
                    Para não olhar para dentro de mim, eu tinha me escondido.<br></br>
                    Mas Tu me arrancaste do meu esconderijo e me puseste diante de mim mesmo, a fim de que eu enxergasse o indigno que era, o quão deformado, manchado e sujo eu estava”.<br></br> 
                    Em meio à luta, recorri a meu grande amigo Alípio e lhe disse:<br></br>
                    “Os ignorantes nos arrebatam o céu e nós,<br></br>
                    com toda a nossa ciência, nos debatemos em nossa carne”.<br></br>
                    Assim me encontrava, chorando desconsolado, enquanto perguntava a mim mesmo quando deixaria de dizer “Amanhã, amanhã”.<br></br>
                    Foi então que escutei uma voz que vinha da casa vizinha. Uma voz que dizia: “Pega e lê. Pega e lê!”.<br></br>
                    Brilhaste, resplandeceste sobre mim e afugentaste a minha cegueira.<br></br> 
                    Então, corri à Bíblia, abri-a e li o primeiro capítulo sobre o qual caiu o meu olhar. <br></br>
                    Pertencia à carta de São Paulo aos Romanos e dizia assim: “Não em orgias e bebedeiras, nem na devassidão e libertinagem, nem nas rixas e ciúmes.<br></br>
                    Mas revesti-vos do Senhor Jesus Cristo” (Rm 13,13s). <br></br>
                    Aquelas Palavras ressoaram dentro de mim. Pareciam escritas por uma pessoa que me conhecia, que sabia da minha vida.<br></br>
                    Exalaste Teu Perfume e respirei. Agora suspiro por Ti, anseio por Ti! Deu de Quem separar-se é morrer, de Quem aproximar-se é ressuscitar, com Quem habitar é viver. <br></br>
                    Deus de Quem fugir é cair, a Quem voltar é levantar-se, em Quem apoiar-se é estar seguro.<br></br>
                    Deus a Quem esquecer é perecer, a Quem buscar é renascer, a Quem conhecer é possuir.<br></br>
                    Foi assim que descobri a Deus e me dei conta de que, no fundo, era a Ele, mesmo sem saber, a Quem buscava ardentemente o meu coração.<br></br>
                    Provei-Te, e, agora, tenho fome e sede de Ti.<br></br> 
                    Tocaste-me, e agora ardo por Tua Paz. “Deus começa a habitar em ti quando tu começas a amá-Lo”.<br></br>
                    Vi dentro de mim a Luz Imutável, Forte e Brilhante!<br></br> 
                    Quem conhece a Verdade conhece esta Luz. Ó Eterna Verdade! Verdadeira Caridade! Tu és o meu Deus!<br></br>
                    Por Ti suspiro dia e noite desde que Te conheci.<br></br>
                    E mostraste-me então Quem eras. E irradiaste sobre mim a Tua Força dando-me o Teu Amor!<br></br>
                    E agora, Senhor, só amo a Ti! Só sigo a Ti! Só busco a Ti! Só ardo por Ti!<br></br>
                    Tarde te amei! <br></br>
                    Tarde Te amei, ó Beleza tão antiga e tão nova!<br></br> 
                    Tarde demais eu Te amei!<br></br> 
                    Eis que estavas dentro, e eu, fora – e fora Te buscava, e me lançava disforme e nada belo, perante a beleza de tudo e de todos que criaste.<br></br>
                    Estavas comigo, e eu não estava Contigo.<br></br>
                    Seguravam-me longe de Ti as coisas que não existiriam senão em Ti.<br></br>
                    Chamaste, clamaste por mim e rompeste a minha surdez.<br></br>
                    Brilhaste, resplandeceste, e a Tua Luz afugentou minha cegueira.<br></br>
                    Exalaste o Teu Perfume e, respirando-o, suspirei por Ti, Te desejei.<br></br>
                    Eu Te provei, Te saboreei e, agora, tenho fome e sede de Ti.<br></br>
                    Tocaste-me e agora ardo em desejos por Tua Paz!<br></br>
                    </i>
                    <p>
                    <b>(Santo Agostinho, Confissões 10, 27-29)</b><br></br>
                    </p>
                </span>
                </p>
                </div>
            </div>
        );
    }
}

export default OracaoAgostinho;