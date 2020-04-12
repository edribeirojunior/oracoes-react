import React, { Component } from 'react';
import Header from './components/Header';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';
import './styles.css';


class Eucaristico extends Component {
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
                <p className="Oracoes-Eucaristico">

<h2>
Oração para iniciar a adoração a Jesus
</h2>                
<p>
Meus Senhor Jesus Cristo, que por amor aos homens ficais dia e noite nesse sacramento, todo cheio de misericórdia e amor, esperando, chamando e acolhendo todos os que vêm visitar-­Vos, eu creio que estais presente no sacramento do altar.
</p>
<p>
Adoro-Vos do abismo do meu nada e dou-­Vos graças por todos os Vossos benefícios, especialmente por Vos terdes dado a mim neste sacramento, por me terdes concedido por advogada Maria, Vossa Mãe Santíssima, e, finalmente, por me haverdes chamado para Vos visitar nessa igreja.
</p>
<p>
Saúdo, hoje, Vosso coração amantíssimo. Primeiro, em agradecimento pelo grande dom de Vós mesmos; segundo, em reparação pelas injúrias que tendes recebido neste sacramento.
</p>
<p>
Meu Jesus, amo-­Vos de todo o meu coração. Arrependo-­me de, no passado, ter ofendido tantas vezes Vossa bondade infinita. Proponho, com Vossa graça, não mais Vos ofender no futuro. Nesta hora, miserável como sou, consagro-­me todo a Vós, dou e entrego-Vos minha vontade, meus afetos, meus desejos e tudo o que me pertence. Daqui em diante, fazei de mim e de tudo o que sou eu o que Vos aprouver.
</p>
<p>
Somente Vos peço e quero Vosso amor, a perseverança final e o perfeito cumprimento da Vossa vontade.
</p>
<p>
Recomendo-Vos as almas do purgatório, especialmente as mais devotas do Santíssimo Sacramento e da Virgem Maria. Recomendo-­Vos também todos os pobres pecadores. Enfim, amado Salvador meu, uno todos os meus afetos aos afetos do Vosso coração amantíssimo e, assim unidos, eu os ofereço a Vosso eterno Pai, pedindo-­Lhe em Vosso nome e, por Vosso amor, que se digne a aceitá-­los e atendê-­los.
</p>
<p>
Ó Jesus, Pão vivo descido do Céu, como é grande Vossa bondade! Para perpetuar a fé em Vossa presença real na Eucaristia, com extraordinário poder, dignastes-Vos mudar as espécies do pão e do vinho em Carne e Sangue, como se conservam no Santuário Eucarístico de Lanciano.
</p>
<p>
Aumentai sempre mais a nossa fé em Vós, Senhor sacramentado! Ardendo de amor por Vós, fazei com que, nos perigos, nas angústias e necessidades, só em Vós encontremos auxílio e consolação, ó divino Prisioneiro dos nossos tabernáculos, ó fonte inesgotável de todas as graças.
</p>
<p>
Suscitai em nós a fome e a sede do Vosso alimento eucarístico, para que, saboreando este pão celeste, possamos gozar da verdadeira vida, agora e sempre. Amém.
</p>
<h2>
Oração ao Coração de Jesus na Eucaristia
</h2>
<p>
Coração de Jesus na Eucaristia, amável companheiro do nosso exílio, eu Vos adoro! Coração Eucarístico de Jesus, Coração solitário, eu Vos adoro!<br></br>
Coração humilhado, eu Vos adoro!<br></br>
Coração abandonado, Coração esquecido, Coração desprezado, Coração ultrajado, eu Vos adoro!<br></br>
Coração desconhecido dos homens, Coração amante, eu Vos adoro! Coração bondoso, eu Vos adoro!<br></br>
Coração que desejais ser amado, Coração paciente em esperar-nos, eu Vos adoro!<br></br>
Coração interessado em atender-­nos, Coração desejoso de ser suplicado, eu Vos adoro!<br></br>
Coração, fonte de novas graças, silencioso, que desejais falar às almas, eu Vos adoro!<br></br>
Coração, doce refúgio dos pecadores, eu Vos adoro!<br></br>
Coração, que ensinais os segredos da união divina, eu Vos adoro!<br></br>
Coração Eucarístico de Jesus, eu Vos adoro!<br></br>
</p>
<h2>
Oração a Jesus Sacramentado
</h2>
<p>
Meu Jesus Cristo, Filho de Deus vivo, eis-­me aqui em companhia da Santíssima Virgem, dos Anjos, dos Santos do Céu e dos justos da Terra, para visitar-­Vos e adorar-Vos nesta Hóstia Consagrada. Creio firmemente que estais tão presente, poderoso e glorioso como estais no Céu; e pelos Vossos méritos, espero alcançar a glória eterna, seguindo em tudo Vossas divinas inspirações; e em agradecimento de Vosso divino amor, quero amar-­Vos com todo o meu coração e minha alma, potências e sentidos.
</p>
<p>
Suplico-­Vos, Salvador de minha alma, pelo Sangue precioso que derramastes em Vossa circuncisão e em Vossa Santíssima Paixão, que exerciteis comigo este ofício de Salvador, dando-­me, pela intercessão de Vossa Santíssima Mãe, os dons da oração juntamente com a perseverança, para que, quando deixar esta vida, me guieis à glória eterna que gozais no Céu. Amém.
</p>
<h2>
Oração a Nossa Senhora do Santíssimo Sacramento
</h2>
<p>
Ó Virgem Maria, Nossa Senhora do Santíssimo Sacramento, glória do povo cristão, alegria da Igreja Universal, Salvação do mundo, rogai por nós e despertai em todos os fiéis a devoção à Santíssima Eucaristia, a fim de que se tornem dignos de comungar todos os dias.
</p>
<p>
Ó Santíssima e Imaculada Senhora, Mãe de Nosso Senhor Jesus Cristo e nossa, nós, os pecadores, pedimos-vos que nos alcanceis de vosso Divino Filho Sacramentado todos os dons e graças de que necessitamos, para vivermos sustentados de Seu amor, para adquirirmos os merecimentos de Seus fiéis escravos e para termos a felicidade de, com Ele e convosco, viver por todos os séculos dos séculos. Amém.
</p>
<p>
Salve, Rainha…
</p>
<p>
Eu Te adoro, ó Cristo, Deus no Santo Altar. Em Teu Sacramento vivo a palpitar!<br></br>
Dou-Te partilha, vida e coração, pois de amor me inflamo na contemplação!<br></br>
Tato e vista falham, bem como o sabor; só por meu ouvido tem a fé vigor. Creio no que disseste, ó Jesus, meu Deus!<br></br>
Verbo da Verdade vindo a nós dos céus!<br></br>
Tua divindade não se viu na cruz, nem a humanidade vê-se aqui, Jesus!<br></br>
Ambas eu confesso como o bom ladrão, e um lugar espero na eterna mansão!<br></br>
Não me deste a dita, como a São Tomé, de tocar-­Te as chagas, mas eu tenho fé!<br></br>
Faze que ela cresça como o meu amor, e a minha esperança tenha novo ardor!<br></br>
Dos Teus sofrimentos é memorial esse Pão de Vida, Pão Celestial!<br></br>
Dele eu sempre queira mais me alimentar, sentir-­Lhe a doçura divinal sem par!<br></br>
Bom Pastor piedoso, Cristo, meu Senhor, lava no Teu Sangue a mim, tão pecador!<br></br>
Pois que uma só gota pode resgatar do pecado o mundo e o purificar!<br></br>
Ora Te contemplo sob espesso véu, mas desejo ver-­Te, Bom Jesus, no Céu, face a face.<br></br>
Um dia, poderei de Ti gozar, nessa doce pátria, e sem fim Te amar.
</p>
<p>
Oração retirada do livro “Uma visita ao Santíssimo Sacramento“
</p>
               </p>
                </div>
            </div>
        );
    }
}

export default Eucaristico;