import React, { Component } from 'react';
import Header from './components/Header';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';
import './styles.css';


class Oficio extends Component {
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
                <p className="Oracoes-intro">
                    <h3>
                    OFICIO DA PAIXÃO DE NOSSO SENHOR 
                    </h3>
                    <span>
                    <b>D:</b> Deus vos salve Virgem<br></br> 
                         Filha de Deus Pai. <br>
                    </br>
                    <b>D:</b> Deus vos salve Virgem <br></br>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Mãe do Deus Filho.<br>
                    </br>
                    <b>D:</b> Deus vos salve Virgem<br></br> 
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Esposa do Espírito Santo.<br>
                    </br>
                    <b>D:</b> Deus vos salve Virgem <br></br>
                        Templo da S.S. Trindade.<br>
                   </br>
                    </span>
                   
                    <h3>
                    MATINAS
                    </h3>
                    
                    <span>
                    Abri os meus lábios, Divino Senhor,<br></br>
                    Cante a minha boca, o vosso louvor.<br></br>
                    Sede em meu favor, Deus Onipotente,<br></br>
                    Vinde socorrer-me, sede diligente. <br></br>
                    Glória ao Pai, ao Filho, e ao Amor também, <br></br>
                    Que são um só Deus, em Pessoas três. <br></br>
                    Como no princípio, agora e sempre, <br></br>
                    Por todos os séculos, e sem fim. Amém.<br></br>
                    </span>
                    
                    <h3>
                    HINO
                    </h3>
                    
                    <span>
                    Do Pai esplendor, do Céu alegria,<br></br>
                    Pelo nosso amor mui triste se via.<br></br>
                    No Horto suando, com grande agonia,<br></br>
                    Sangue que em gotas na terra corria.<br></br>
                    Lavar nossas culpas, com Ele queria,<br></br>
                    Mas temendo a morte, aflito jazia.<br></br>
                    Confortando um anjo, então lhe dizia,<br></br>
                    Que por nós morrendo, Vida nos daria.<br></br>
                    Para que gozemos o Céu, algum dia,<br></br>
                    A Jesus dos Passos tomemos por guia.<br></br>
                    Benditosejais, Senhor Bom Jesus<br></br>
                    Que o mundo remistes pela Santa Cruz.<br></br>
                    Dos fiéis as almas, Divino Senhor,<br></br>
                    Convosco descansem, em paz e amor.<br></br>
                    Ouvi bom Jesus minha oração. <br></br>
                    Cheguem os meus brados ao vosso Coração.<br></br>
                    </span>
                    

                    <h3>
                    ORAÇÃO
                    </h3>

                    Senhor Jesus Cristo,
                    Filho do Deus vivo, ponde diante de vossos pés a minha alma, em vossa Paixão sagrada e
                    acerba Morte de Cruz. Agora e na hora da minha morte, dignai-vos dar-me os socorros
                    da vossa divina Graça; aos vivos e defuntos, perdão e descanso; à vossa Igreja,
                    paz e concórdia; a nós, pecadores, gloria e vida eterna. Vós que viveis e
                    reinais na unidade do Pai e do Espírito Santo, por todos os séculos dos
                    séculos. Amém.

                    <h3>
                    PRIMA
                    </h3>
                    
                    <span>
                    Sede
                    em meu favor, Deus Onipotente,<br></br>

                    Vinde
                    socorrer-me, sede diligente. <br></br>



                    Glória
                    ao Pai, ao Filho, e ao Amor também, <br></br>

                    Que
                    são um só Deus, em Pessoas três. <br></br>



                    Como
                    no princípio, agora e sempre, <br></br>

                    Por
                    todos os séculos, e sem fim. Amém.<br></br>

                    </span>
                    
                    <h3>
                        HINO
                    </h3>

                    <span>
                    Por pagar por nós ao Pai ofendido<br></br>

                    Quis o Rei da Glória, ser preso e vendido.<br></br>


                    Entregue por Judas, a Anás levado,<br></br>

                    Como malfeitor com cordas atado. <br></br>



                    Onde testemunhas falsas se achavam,<br></br>

                    E a mesma inocência de culpa acusavam.<br></br>



                    E por Caifás, blasfemo julgado,<br></br>

                    Logo dos ministros foi atormentado.<br></br>



                    Falsos testemunhos tem Jesus sofrido,<br></br>

                    Testemunhas eram os seus escolhidos.<br></br>



                    Bendito sejais, Senhor Bom Jesus<br></br>

                    Que o mundo remistes pela Santa Cruz.<br></br>



                    Dos fiéis as almas, Divino Senhor,<br></br>

                    Convosco descansem em paz e amor.<br></br>



                    Ouvi bom Jesus minha oração. <br></br>

                    Cheguem os meus brados ao vosso Coração.<br></br>

                    </span>
                    
                    <h3>
                    ORAÇÃO
                    </h3>
                    
                    Senhor Jesus Cristo, Filho do Deus vivo, ponde diante de
                    vossos pés a minha alma, em
                    vossa Paixão sagrada e acerba Morte de Cruz. Agora e na hora
                    da minha morte, dignai-vos dar-me os socorros da vossa divina Graça; aos vivos
                    e defuntos, perdão e descanso; à vossa Igreja, paz e concórdia; a nós, pecadores,
                    gloria e vida eterna. Vós que viveis e reinais na unidade do Pai e do Espírito
                    Santo, por todos os séculos dos séculos. Amém.


                    <h3>
                    A TERÇA
                    </h3>
                    
                    <span>
                    Sede em meu favor, Deus Onipotente,<br></br>

                    Vinde socorrer-me, sede diligente. <br></br>

                    Glória ao Pai, ao Filho, e ao Amor também, <br></br>

                    Que são um só Deus, em Pessoas três. <br></br>

                    Como no princípio, agora e sempre, <br></br>

                    Por todos os séculos, e sem fim. Amém.<br></br>

                    </span>
                    
                    <h3>
                    HINO
                    </h3>
                    
                    <span>
                    As garras lançaram, quais lobos sinistros,<br></br>

                    No manso Cordeiro, os ímpios ministros.<br></br>

                    Cruéis bofetadas em seu rosto deram,<br></br>

                    Outros vilipêndios muitos lhe fizeram.<br></br>

                    Para que com vida não lhes escapasse,<br></br>

                    A Pilatos foram que o condenasse.<br></br>

                    Pilatos, querendo de sangue os fartar,<br></br>

                    Com cruéis açoites, O fez derramar.<br></br>

                    Sangue de Jesus por nós derramado,<br></br>

                    Precioso óleo é contra o pecado.<br></br>


                    Bendito sejais, Senhor Bom Jesus<br></br>

                    Que o mundo remistes pela Santa Cruz.<br></br>



                    Dos fiéis as almas, Divino Senhor,<br></br>

                    Convosco descansem em paz e amor.<br></br>



                    Ouvi bom Jesus minha oração. <br></br>

                    Cheguem os meus brados ao vosso Coração.<br></br>

                    </span>
                    
                    <h3>
                    ORAÇÃO
                    </h3>
                    
                    Senhor Jesus Cristo,
                    Filho do Deus vivo, ponde diante de vossos pés a minha alma, em vossa Paixão sagrada
                    e acerba Morte de Cruz. Agora e na hora da minha morte, dignai-vos dar-me os
                    socorros da vossa divina Graça; aos vivos e defuntos, perdão e descanso; à
                    vossa Igreja, paz e concórdia; a nós, pecadores, gloria e vida eterna. Vós que
                    viveis e reinais na unidade do Pai e do Espírito Santo, por todos os séculos
                    dos séculos. Amém.


                    <h3>
                    A SEXTA
                    </h3>
                     
                    <span>
                    Sede em meu favor, Deus onipotente, <br></br>

                    Vinde socorrer-me, sede diligente. <br></br>

                    Glória ao Pai, ao Filho, e ao Amor também, <br></br>

                    Que são um só Deus, em Pessoas três. <br></br>

                    Como no princípio, agora e sempre, <br></br>

                    Por todos os séculos, e sem fim. Amém.<br></br>

                    </span>
                    

                    <h3>
                    HINO
                    </h3>
                    
                    <span>
                    De açoitar cansados os cruéis verdugos,<br></br>

                    Lhe assentam coroa de espinhos agudos.<br></br>



                    Na mão uma cana, por cetro lhe deram<br></br>

                    E, zombando dele, rei falso o fizeram.<br></br>

                    Temendo Pilatos, que assim o matassem,<br></br>

                    Ao povo o mostrou pra que se abrandassem<br></br>



                    Mas o cruel povo, não bem saciado,<br></br>

                    Clama que, na Cruz, morresse cravado.<br></br>



                    Ó povo feroz! Ó ódio tão forte!<br></br>

                    Que a mesma Vida condenas à morte<br></br>


                    Bendito sejais, Senhor Bom Jesus<br></br>

                    Que o mundo remistes pela Santa Cruz.<br></br>



                    Dos fiéis as almas, Divino Senhor,<br></br>

                    Convosco descansem em paz e amor.<br></br>



                    Ouvi bom Jesus minha oração. <br></br>

                    Cheguem os meus brados ao vosso Coração.<br></br>

                    </span>

                    <h3>
                    ORAÇÃO
                    </h3>
                    

                    Senhor Jesus Cristo,
                    Filho do Deus vivo, ponde diante de vossos pés a minha alma, em vossa Paixão sagrada
                    e acerba Morte de Cruz. Agora e na hora da minha morte, dignai-vos dar-me os
                    socorros da vossa divina Graça; aos vivos e defuntos, perdão e descanso; à
                    vossa Igreja, paz e concórdia; a nós, pecadores, gloria e vida eterna. Vós que
                    viveis e reinais na unidade do Pai e do Espírito Santo, por todos os séculos
                    dos séculos. Amém.


                    <h3>A NOA</h3>

                    <span>
                    Sede em meu favor, Deus Onipotente, <br></br>

                    Vinde socorrer-me, sede diligente. <br></br>



                    Glória ao Pai, ao Filho, e ao Amor também, <br></br>

                    Que são um só Deus, em Pessoas três. <br></br>



                    Como no princípio, agora e sempre, <br></br>

                    Por todos os séculos, e sem fim. Amém.<br></br>

                    </span>
                    
                    <h3>HINO</h3>  
                    <span>
                    Corações
                    tão duros, nas vozes que deram,<br></br>

                    Conheceu
                    Pilatos que ferinos eram.<br></br>



                    Então
                    mais temendo, à morte entregou,<br></br>

                    Mas
                    as mãos lavando, limpo não ficou.<br></br>


                    Entregue aos algozes, o manso Cordeiro,<br></br>

                    Tomou
                    em seus ombros da Cruz o madeiro.<br></br>



                    Com
                    o qual ao Monte, débil e cansado,<br></br>

                    Subiu
                    para ser por nós imolado.<br></br>



                    Subir
                    com Jesus, ao monte é preciso,<br></br>

                    Para
                    entrar com Ele no seu Paraíso.<br></br>



                    Bendito
                    sejais, Senhor Bom Jesus<br></br>

                    Que
                    o mundo remistes pela Santa Cruz.<br></br>



                    Dos
                    fiéis as almas, Divino Senhor,<br></br>

                    Convosco
                    descansem em paz e amor.<br></br>



                    Ouvi
                    bom Jesus minha oração. <br></br>

                    Cheguem
                    os meus brados ao vosso Coração.<br></br>
                    </span>

                    <h3>ORAÇÃO</h3>
                    
                    Senhor Jesus Cristo,
                    Filho do Deus vivo, ponde diante de vossos pés a minha alma, em vossa Paixão sagrada
                    e acerba Morte de Cruz. Agora e na hora da minha morte, dignai-vos dar-me os
                    socorros da vossa divina Graça; aos vivos e defuntos, perdão e descanso; à
                    vossa Igreja, paz e concórdia; a nós, pecadores, gloria e vida eterna. Vós que
                    viveis e reinais na unidade do Pai e do Espírito Santo, por todos os séculos
                    dos séculos. Amém.


                    <h3>AS VESPERAS </h3>

                    <span>
                    Sede
                    em meu favor, Deus Onipotente, <br></br>

                    Vinde
                    socorrer-me, sede diligente. <br></br>



                    Glória
                    ao Pai, ao Filho, e ao Amor também,<br></br>

                    Que
                    são um só Deus, em Pessoas três. <br></br>



                    Como
                    no princípio, agora e sempre, <br></br>

                    Por
                    todos os séculos, e sem fim. Amém.<br></br>

                    </span>

                    <h3>HINO </h3>


                    <span>
                    Da
                    sagrada roupa, ao Monte subido,<br></br>

                    Por
                    cruéis algozes foi Jesus despido.<br></br>



                    E
                    com fortes cravos, foi na Cruz pregado,<br></br>

                    Entre
                    dois ladrões, nela levantado.<br></br>



                    Por
                    mais padecer estando sequioso,<br></br>

                    Vinagre
                    lhe deram e fel amargoso.<br></br>



                    Assim
                    padecendo, ao Pai, Ele orava,<br></br>

                    Pelo
                    cruel povo que o crucificava.<br></br>



                    Pelos
                    inimigos devemos orar<br></br>

                    Para
                    de Jesus a glória alcançar.<br></br>



                    Bendito
                    sejais, Senhor Bom Jesus<br></br>

                    Que
                    o mundo remistes pela Santa Cruz.<br></br>


                    Dos fiéis as almas, Divino Senhor,<br></br>

                    Convosco
                    descansem em paz e amor.<br></br>



                    Ouvi
                    bom Jesus minha oração.<br></br>

                    Cheguem
                    os meus brados ao vosso Coração.<br></br>
                    </span>

                    <h3>ORAÇÃO</h3>

                    Senhor Jesus Cristo,
                    Filho do Deus vivo, ponde diante de vossos pés a minha alma, em vossa Paixão sagrada
                    e acerba Morte de Cruz. Agora e na hora da minha morte, dignai-vos dar-me os
                    socorros da vossa divina Graça; aos vivos e defuntos, perdão e descanso; à
                    vossa Igreja, paz e concórdia; a nós, pecadores, gloria e vida eterna. Vós que
                    viveis e reinais na unidade do Pai e do Espírito Santo, por todos os séculos
                    dos séculos. Amém.


                    <h3>AS COMPLETAS </h3>


                    <span>
                    Jesus
                    convertei-nos, pois sois Salvador,<br></br>

                    Apartai
                    de nós a ira e o furor. <br></br>



                    Sede
                    em meu favor, Deus Onipotente, <br></br>

                    Vinde
                    socorrer-me, sede diligente. <br></br>



                    Glória
                    ao Pai, ao Filho, e ao Amor também,<br></br>

                    Que
                    são um só Deus, em Pessoas três. <br></br>



                    Como
                    no princípio, agora e sempre, <br></br>

                    Por
                    todos os séculos, e sem fim. Amém.<br></br>


                    </span>
                    <h3>HINO</h3> 

                    <span>
                    Já
                    eram três horas que, na Cruz pendente,<br></br>

                    Padecia
                    o Filho do Onipotente.<br></br>



                    Ferido
                    de dores, de sangue exaurido,<br></br>

                    De
                    forças estava já destituído.<br></br>



                    Porque
                    a vontade, do seu Pai cumpria,<br></br>

                    Expirando
                    acaba em grande agonia.<br></br>



                    Escondeu-se
                    o sol, a terra tremeu,<br></br>

                    Mas
                    o duro povo não se arrependeu.<br></br>



                    De
                    nossos pecados, já arrependidos<br></br>

                    Por
                    Jesus seremos mui bem recebidos.<br></br>



                    Em
                    seu Coração
                    pela lança aberto,<br></br>

                    Acharemos
                    porta e o perdão certo.<br></br>



                    Bendito
                    sejais Senhor Bom Jesus,<br></br>

                    Que
                    o mundo remistes pela Santa Cruz.<br></br>



                    Dos
                    fiéis as almas, Divino Senhor,<br></br>

                    Convosco
                    descansem em paz e amor.<br></br>



                    Ouvi
                    bom Jesus minha oração. <br></br>

                    Cheguem
                    os meus brados o vosso coração.<br></br>

                    </span>
                    <h3>ORAÇÃO</h3>
                    Senhor Jesus Cristo, Filho do Deus vivo, ponde diante de
                    vossos pés a minha alma, em
                    vossa Paixão sagrada e acerba Morte de Cruz. Agora e na hora
                    da minha morte, dignai-vos dar-me os socorros da vossa divina Graça; aos vivos
                    e defuntos, perdão e descanso; à vossa Igreja, paz e concórdia; a nós,
                    pecadores, gloria e vida eterna. Vós que viveis e reinais na unidade do Pai e
                    do Espírito Santo, por todos os séculos dos séculos. Amém.


                    <h3>OFERECIMENTO</h3>

                    <span>

                    
                    A Vós, Bom Jesus, com
                    toda atenção,<br></br>

                    Dedico
                    a memória da vossa Paixão.<br></br>



                    Para
                    que por ela, como o bom ladrão,<br></br>

                    Mereça
                    das culpas plena remissão.<br></br>



                    Glória
                    ao Pai, ao Filho e ao Espírito Santo! <br></br>

                    Como
                    era no princípio, agora e sempre, Amém<br></br>
                    </span>
                </p>
                </div>
            </div>
        );
    }
}

export default Oficio;