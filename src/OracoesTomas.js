import React, { Component } from 'react';
import Header from './components/Header';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';
import './styles.css';


class OracaoTomas extends Component {
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
                <p className="Oracoes-Tomas">
                <h2>Uma oração de Santo Tomás para fazer todos os dias</h2>
                <h4><i>O Doutor Angélico compôs certa vez uma oração para pedir a Deus as virtudes necessárias para a nossa vida, e tinha o costume de recitá-la diariamente e com grande devoção.</i></h4>
                <span>
                <p>
                    Concedei-me, ó Deus onipotente e misericordioso, <b>ardentemente desejar, prudentemente descobrir, verazmente conhecer e perfeitamente realizar</b> o que for do vosso agrado.
                </p>
                <p>
                    Para louvor e glória do vosso nome, ordenai meu estado de vida e dai-me <b>saber, poder e querer</b> o que me pedis que faça. E dai-me levá-lo a cabo como convém à salvação de minha alma.
                </p>
                <p>
                    Que o meu caminho até vós seja reto e seguro. Que eu não sucumba na prosperidade nem na adversidade, a fim de <b>não me ensoberbecer na primeira nem desesperar na segunda</b>. Que na fortuna eu vos renda graças e na dificuldade mantenha a paciência. <b>Que eu de nada me alegre ou entristeça senão do que me leve a vós ou afaste de vós</b>. Que a ninguém deseje agradar nem tema aborrecer senão somente a vós.
                </p>
                <p>
                    Dai-me tudo fazer com caridade e o que não diz respeito ao vosso culto, reputá-lo como morto. Dai-me praticar minhas ações, não por costume, <b>mas referindo-as a vós com devoção.</b>
                </p>
                <p>
                    Que por vós eu não dê valor às coisas transitórias, e me seja caro tudo o que vos diz respeito. Que me compraza, mais do que tudo, todo trabalho que for para vós e <b>me aborreça todo descanso que não seja em vós.</b>
                </p>
                <p>
                    Dai-me, dulcíssimo Senhor, dirigir-vos meu coração frequente e ferventemente e, de alma contrita, emendar com firme propósito a minha fraqueza.
                </p>
                <p>
                    Fazei-me, ó Deus, <i>humilde</i> sem fingimento; <i>alegre</i> sem dissipação; <i>grave</i> sem depressão; <i>maduro</i> sem severidade; <i>vivaz</i> sem leviandade; <i>veraz</i> sem duplicidade; <i>temente</i> sem desespero; <i>confiante</i> sem presunção; <i>casto</i> sem corrupção; <i>corrigir</i> ao próximo sem indignação e <i>edificá-lo</i> por exemplo e palavra sem exageração; <i>obediente</i> sem contradição; <i>paciente</i> sem murmuração.
                </p>
                <p>
                    Dai-me, dulcíssimo Jesus, um coração <i>desperto</i>, para que nenhuma vã curiosidade o afaste de vós; <i>imóvel</i>, para que não ceda a nenhum afeto indigno; <i>infatigável</i>, <b>para que não sucumba em nenhuma tribulação</b>;<i> livre</i>, para que dele não se apodere nenhum prazer violento; e <i>reto</i>, para que não o faça desviar-se nenhuma má intenção.
                </p>
                <p>
                Concedei-me, dulcíssimo Deus, <i>inteligência</i> para conhecer-vos; <i>diligência</i> para buscar-vos; <i>sabedoria</i> para encontrar-vos; <i>bondade</i> para agradar-vos; <i>perseverança</i> para esperar-vos doce e fielmente; <i>confiança</i> para alcançar-vos felizmente. Fazei-me, pela penitência, suportar vossas penas; utilizar vossos benefícios nesta vida pela graça; e por fim, na pátria eterna, desfrutar de vossos gozos pela glória.
                </p>
                <p>
                Vós, que com o Pai e o Espírito Santo viveis e reinais pelos séculos dos séculos.<br></br>
                Amém.
                </p>
                </span>
                </p>
                </div>
            </div>
        );
    }
}

export default OracaoTomas;