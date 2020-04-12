import React, { Component } from 'react';
import Header from './components/Header';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';
import './styles.css';


class Divino extends Component {
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
                <p className="Oracoes-Divino">

<h2>
COROA DO DIVINO ESPÍRITO SANTO
</h2> 

<p><i>
(Oração ditada por Nosso Senhor Jesus Cristo 

à Venerável Irmã Miriam de 
					Jesus Cristo Crucificado).
</i>
</p>

<p>
Reza-se na primeira conta as três invocações seguintes:
</p>
<p><b>
Deus vinde em nosso auxílio 
Senhor, apressai-vos em socorrer-nos
Glória ao Pai ... 
</b></p>
<p> 
Em cada uma das contas maiores ou de cor diferente, reza-se 
					cada mistério: 
</p>
<p>
<b>1º Mistério: Vinde Espírito Santo de Sabedoria,</b> 

					desprendei-­nos das coisas da Terra e infundi-nos o amor e 
					gosto pelas coisas do Céu. 
</p>
<p> 
Depois de cada mistério, reza-se uma só vez: 
</p>
<p><b> 
Ó Maria, que por obra do Espírito Santo, concebestes o 
					Salvador, rogai por nós. 
</b></p>
<p> 
Em cada uma das 7 (sete) contas seguintes, reza-se a 
					seguinte invocação: 
</p> 
<p><b> 
Vinde Espírito Santo, enchei os corações dos 
					vossos fiéis e acendei neles o fogo do Vosso amor; vinde e 
					renovai a face da Terra. 
</b></p>  

<p><b> 
2º Mistério: Vinde, Espírito de Entendimento, </b>
					iluminai a nos­sa mente com a luz da Eterna Verdade e 
					enriquecei-a de puros e santos pensamentos. 
					</p>  
					<p><b> 
3º Mistério: Vinde, Espírito de Bom Conselho, </b> 
					fazei-nos dóceis às vossas santas inspirações e guiai-nos no 
					caminho da salvação. 
					 </p>
					<p><b> 
4º Mistério: Vinde, Espírito de Fortaleza, </b> 
dai-nos 
					força, constância e vitória nas batalhas contra os nossos 
					inimigos espirituais e corporais. 
					</p>  
					<p><b> 
5º Mistério: Vinde, Espírito de Ciência, </b> 
					sede o Mestre de nossas almas e ajudai-nos a praticar os 
					Vossos santos ensinamentos. 
					 </p> 
					<p><b> 
6º Mistério: Vinde, Espírito de Piedade, </b> 
					vinde morar em nossos corações, tomai conta deles e 
					santificai todos os seus afetos. 
					</p> 
					<p><b> 
7º Mistério: Vinde, Espírito do Santo Temor de Deus, </b> 
					reinai em nossa vontade e fazei que estejamos sempre 
					dispostos a antes sofrer e morrer que Vos ofender. 
					</p> 
<h2>
ORAÇÃO AO ESPÍRITO SANTO
 </h2>
<p>
	<b>
Senhor e Criador que és nosso Deus, vem inspirar estes filhos teus; em nossos corações derrama a Tua paz; um povo renovado ao mundo mostrarás. Sentimos que Tu és a nossa luz, fonte de amor, fogo abrasador. Por isso é que ao rezar, em nome de Jesus, pedi­mos nesta hora os dons do Teu amor. Se temos algum bem, virtude ou dom, não vem de nós, vem do Teu favor! Porque sem Ti, ninguém, ninguém pode ser bom. Só Tu podes criar a vida interior. Infunde pois agora, em todos nós que como irmãos vamos sempre agir à luz do Teu saber, à força do querer, a fim de que possamos juntos construir. E juntos cataremos sem cessar cantos de amor para Te exaltar! És Pai, és Filho e és Espírito de Paz. Por isso, em nossa mente sempre reinarás. Amém.
	</b>
</p>
<p><b>
Pai onipotente e eterno,</b><i> tende compaixão de nós!</i><br></br>
<b>Jesus, Filho Eterno do Pai, e Redentor do mundo,</b><i> Salvai-nos!</i><br></br>
         <b>Espírito do Pai e do Filho, amor eterno de um e de outro,</b><i> Santificai-nos!</i><br></br>
         <b>Trindade Santa,</b><i> Atendei-nos!</i><br></br>
</p>
<p>
	<b>
Espírito Santo que procedeis do Pai e do Filho,</b> Vinde a nós!<br></br>
			<b>Divino Espírito, igual ao Pai e ao Filho,</b> Vinde a nós!<br></br>  
            <b>A mais terna e generosa promessa do Pai,</b> Vinde a nós!<br></br>
			<b>Dom de Deus altíssimo,</b> Vinde a nós!<br></br>
          <b>Raio de Luz celeste,</b> Vinde a nós!<br></br>
          <b>Autor de todo o bem,</b> Vinde a nós!<br></br>
          <b>Fonte de água viva,</b> Vinde a nós!<br></br>
          <b>Fogo consumidor,</b> Vinde a nós!<br></br>
          <b>Unção espiritual,</b> Vinde a nós!<br></br>
          <b>Espírito de Amor e Verdade,</b> Vinde a nós!<br></br>
          <b>Espírito de Sabedoria e de Inteligência,</b> Vinde a nós!  <br></br>
          <b>Espírito de Conselho e de Fortaleza,</b> Vinde a nós!<br></br>
          <b>Espírito de Ciência e Piedade,</b> Vinde a nós!<br></br>
          <b>Espírito de Temor do Senhor,</b> Vinde a nós!<br></br>
          <b>Espírito de Graça e Oração,</b> Vinde a nós!<br></br>
          <b>Espírito de Paz e Doçura,</b> Vinde a nós!<br></br>
          <b>Espírito de Modéstia e Pureza,</b> Vinde a nós!<br></br>
          <b>Espírito Consolador,</b> Vinde a nós!<br></br>
          <b>Espírito Santificador,</b> Vinde a nós!<br></br>
          <b>Espírito que governais a Igreja,</b> Vinde a nós!<br></br>
          <b>Espírito de acréscimo de filhos de Deus,</b> Vinde a nós!<br></br>
          <b>Espírito Santo,</b> Atendei-nos!<br></br>
</p>
<p>
Vinde renovar a face da terra. Derramai a vossa luz nos nossos espíritos. Gravai a vossa lei nos nossos corações. Abrasai os nossos corações no fogo do vosso Amor. Abri-nos o tesouro das vossas graças, Ensinai-nos como quereis que as peçamos. Iluminai-nos pelas celestes inspirações. Concedei-nos a ci­ência que é a única necessária. Formai-nos na prática do bem. Dai-nos o merecimento das suas virtudes. Fazei-nos perseverar na justiça. Sede Vós a recompensa eterna.
</p>
<p><b>
Cordeiro de Deus, que tirais os pecados do mundo,</b> Enviai­-nos o divino consolador.  <br></br>  
<b>Cordeiro de Deus, que tirais os pecados do mundo,</b> Enchei­-nos dos dons do vosso Espírito.<br></br>
<b>Cordeiro de Deus, que tirais os pecados do mundo,</b> fazei cres­cer em nós os frutos do Espírito Santo.<br></br>
<b>Enviai o vosso Espírito e serão criados!</b> E renovareis a face da terra!<br></br>
</p>
<p>
Ó Fogo abrasador, do Puro Amor, vinde como em Pentecos­tes. Incendiai a nossa alma, o nosso coração! Queimai em nós todo ódio, toda falta de fé! Queimai em nós todo orgulho, toda vaidade, e fazei que nos prendamos às coisas do céu! Tirai de nós todo apego ao materialismo, às pessoas. Tirai de nós todo respeito humano! Inflamai e purificai o nosso cora­ção com um ardente Amor, por Jesus Cristo. Inspirai-nos o ardente desejo de alcançar o Céu! Ensinai-nos como falar e quando falar, como agir e quando agir. Que sejais vós, Se­nhor, fonte de toda santidade, a falar a nós, agir em nós, pois só assim daremos frutos, cem por um! Vinde, Espírito Santo de Amor sobre toda a terra, abrasai-a num fogo consumidor e dai-nos a Paz tão desejada nos corações para que cesse toda a violência e haja o Amor. Amém.
</p>
<p><b>
Espírito Santo!</b> Descei sobre nós e iluminai-nos!<br></br>
<b>Espírito Santo que abrasastes o Coração da Virgem Maria!</b> Abrasai também o nosso coração de amor!<br></br>
		 <b> Ó Mãezinha do céu, esposa do Divino Espírito Santo!</b> Morai sempre em meu coração. Assim o Espírito Santo sentir-se-á atraído por vós e virá morar também em meu coração!<br></br>
</p>
<p>
	<b>
          Vinde, Espírito Santo! Vinde, Espírito Santo!
	</b>
</p>

<h2>
LADAINHA DO DIVINO ESPÍRITO 
					SANTO
					 </h2>
 
<p>
Senhor, tende piedade de nós. <br></br>
Jesus Cristo, tende piedade de nós. <br></br>
Senhor, tende piedade de nós. <br></br>
</p>
<p>
Divino Espírito Santo, ouvi-nos. <br></br>
Espírito Paráclito, atendei-nos. <br></br>
</p>
<p>
Deus Pai dos céus, tende piedade de nós. <br></br>
Deus Filho, redentor do mundo tende piedade de nós. <br></br>
Deus Espírito Santo, tende piedade de nós. <br></br>
Santíssima Trindade,
que sois um só Deus, tende piedade de 
					nós. <br></br>
					</p>
					<p>
					Espírito da verdade, tende piedade de nós. <br></br>
					Espírito da sabedoria, tende piedade de nós. <br></br>
					Espírito da inteligência, tende piedade de nós. <br></br>
					Espírito da fortaleza, tende piedade de nós. <br></br>
					Espírito da piedade, tende piedade de nós. <br></br>
					Espírito do bom conselho, tende piedade de nós. <br></br>
					Espírito da ciência, tende piedade de nós. <br></br>
					Espírito do santo temor, tende piedade de nós. <br></br>
					Espírito da caridade, tende piedade de nós. <br></br>
					Espírito da alegria, tende piedade de nós. <br></br>
					Espírito da paz, tende piedade de nós. <br></br>
					Espírito das virtudes, tende piedade de nós. <br></br>
					Espírito de toda a graça, tende piedade de nós. <br></br>
					Espírito da adoção dos filhos de Deus, tende piedade de nós.<br></br>
					Purificador das nossas almas, tende piedade de nós. <br></br>
					Santificador e guia da Igreja católica, tende piedade de 
					nós. <br></br>
					Distribuidor dos bens celestes, tende piedade de nós. <br></br>
					Conhecedor dos pensamentos e das intenções do coração, tende 
					piedade de nós. <br></br>
					Doçura dos que começam a vos servir, tende piedade de nós.<br></br>
					Coroa dos perfeitos, tende piedade de nós. <br></br>
					Alegria dos anjos, tende piedade de nós. <br></br>
					Luz dos patriarcas, tende piedade de nós. <br></br>
					Inspiração dos profetas, tende piedade de nós. <br></br>
					Palavra e sabedoria dos apóstolos, tende piedade de nós. <br></br>
					Vitória dos mártires, tende piedade de nós. <br></br>
					Ciência dos confessores, tende piedade de nós. <br></br>
					Pureza das virgens, tende piedade de nós. <br></br>
					Unção de todos os santos, tende piedade de nós. <br></br>
					Sede-nos propício, perdoai-nos, Senhor. <br></br>
					Sede-nos propício, atendei-nos, Senhor. <br></br>
					De todo o pecado, livrai-nos, Senhor. <br></br>
					De todas as tentações e ciladas do demônio, livrai-nos, 
					Senhor. <br></br>
					De toda a presunção e desesperação, livrai-nos, Senhor. <br></br>
					Do ataque à verdade conhecida, livrai-nos, Senhor. <br></br>
					Da inveja da graça fraterna, livrai-nos, Senhor. <br></br>
					De toda a obstinação e impenitência, livrai-nos, Senhor. <br></br>
					De toda a negligência e tepidez do espírito, livrai-nos, 
					Senhor. <br></br>
					De toda a impureza da mente e do corpo, livrai-nos, Senhor.<br></br>
					De todas as heresias e erros, livrai-nos, Senhor. <br></br>
					De todo o mau espírito, livrai-nos, Senhor. <br></br>
					Da morte má e eterna, livrai-nos, Senhor. <br></br>
					Pela vossa eterna procedência do Pai e do Filho, livrai-nos, 
					Senhor. <br></br>
					Pela milagrosa conceição do Filho de Deus, livrai-nos, 
					Senhor. <br></br>
					Pela vossa descida sobre Jesus Cristo batizado, livrai-nos, 
					Senhor. <br></br>
					Pela vossa santa aparição na transfiguração do Senhor, 
					livrai-nos, Senhor.<br></br> 
					Pela vossa vinda sobre os discípulos do Senhor, livrai-nos, 
					Senhor. <br></br>
					No dia do juízo, livrai-nos, Senhor. <br></br>
					Ainda que pecadores, nós vos rogamos, ouvi-nos. <br></br>
					Para que nos perdoeis, nós vos rogamos, ouvi-nos. <br></br>
					Para que vos digneis santificar todos os membros da Igreja, 
					nós vos rogamos, ouvi-nos. <br></br>
					Para que vos digneis conceder-nos o dom da verdadeira 
					piedade, devoção e oração, nós vos rogamos, ouvi-nos. <br></br>
					Para que vos digneis inspirar-nos sinceros afetos de 
					misericórdia e de caridade, nós vos rogamos, ouvi-nos. <br></br>
					Para que vos digneis criar em nós um espírito novo e um 
					coração puro, nós vos rogamos, ouvi-nos. <br></br>
					Para que vos digneis conceder-nos verdadeira paz e 
					tranqüilidade do coração, nós vos rogamos, ouvi-nos.<br></br> 
					Para que vos digneis fazer-nos dignos e fortes, para 
					suportar as perseguições pela justiça, nós vos rogamos, 
					ouvi-nos. <br></br>
					Para que vos digneis confirmar-nos em vossa graça, nós vos 
					rogamos, ouvi-nos. <br></br>
					Para que vos digneis receber-nos no número dos vossos 
					eleitos, nós vos rogamos, ouvi-nos. <br></br>
					Para que vos digneis ouvir-nos, nós vos rogamos, ouvi-nos.
					Espírito de Deus, nós vos rogamos, ouvi-nos. <br></br>
					</p>
 
					<p>
					Cordeiro de Deus, que tirais os pecados do mundo, enviai-nos 
					o Espírito Santo. <br></br>
					Cordeiro de Deus, que tirais os pecados do mundo, mandai-nos 
					o Espírito prometido do Pai.<br></br> 
					Cordeiro de Deus, que tirais os pecados do mundo, dai-nos o 
					Espírito bom. <br></br>
					</p>
 
					<p>	
					Espírito Santo, ouvi-nos. <br></br>
					Espírito Consolador, atendei-nos. <br></br>
					</p>
					<p>
V. 
					Enviai o Vosso Espírito e tudo será criado. <br></br>
					R. E renovareis a face da terra. <br></br>
					</p>
					<p>
					Oremos: <br></br>

Deus, 
					que instruístes os corações dos vossos fiéis com a luz do 
					Espírito Santo, concedei-nos que no mesmo Espírito 
					conheçamos o que é reto, e gozemos sempre as suas 
					consolações. Por Cristo, Nosso Senhor. Amém. 
					</p>

<h3>
Novena oficial


em honra do Divino Espírito Santo
</h3>
 <p>
A 
					novena do Espírito Santo é o modelo de todas as novenas. Por 
					ordem de Jesus a celebrou a Virgem Maria em união com os 
					Apóstolos, como preparação à vinda do Espírito Santo 
					Consolador. O Papa Leão XIII enriqueceu-a com muitas 
					indulgências. Devemos, pois, celebrá-la, cada ano, com muito 
					fervor; e a devotíssima Seqüência, que forma parte da 
					novena, deve ser uma das nossas fórmulas de oração vocal 
					mais favoritas. 
					</p> 
 <h4>
Seqüência 
					da Missa de Pentecostes 
</h4>
<p>
Vinde, Espírito Santo e enviai do céu um raio de Vossa luz.<br></br>
					
Vinde, Pai dos pobres, vinde, distribuidor dos bens, vinde 
					luz dos corações. <br></br>
Consolador ótimo, doce hóspede das almas e suave 
					refrigério. <br></br>
Nos trabalhos sois o repouso, no calor o frescor, nas 
					lágrimas a consolação.<br></br> 
Ó luz beatíssima, inflamai o íntimo dos corações dos Vossos 
					fiéis. <br></br>
Sem a Vossa graça nada há no homem, nada de inocente.<br></br>
					
Lavai o que é sórdido, regai o que é seco, sarai quem está 
					ferido. <br></br>
Dobrai o que é duro, abrasai o que é frio e reconduzi o 
					desviado. <br></br>
Concedei aos Vossos servos, que em Vós confiam, os sete 
					dons sagrados. <br></br>
Dai-lhes o mérito das virtudes, o êxito da salvação e a 
					alegria perene.  Amém. <br></br>
					</p>
					<p>
Ó 
					Espírito Santíssimo, fogo sagrado que alumiais as almas e 
					abrasais os corações:  por misericórdia Vossa, Senhor, a 
					nossa pobre alma Vos deseja, invoca-Vos e Vos procura para 
					que a purifiqueis das suas manchas, para que a ilumineis nas 
					suas trevas e lhe comuniqueis os Vossos dons.  Sim, 
					dignai-Vos consagrar a nossa alma com a unção da Vossa 
					graça, para que ela se converta em templo Vosso.  Purificai 
					a nossa memória, para que ela sempre recorde os Vossos 
					benefícios; ilustrai o nosso entendimento, para que saiba 
					meditar a Vossa lei; inflamai a nossa vontade, para que ela, 
					respeitosa e dócil, se submeta em tudo à Vossa vontade.  E 
					visto que somos tão miseráveis, purificai todos os afetos do 
					nosso coração, para que ele se torne digno dos Vossos dons.
					</p>

					<h4>
					Jaculatórias  
					</h4>	
					<p>
					1° Vinde, Divino Espírito, <br></br>
Vinde, ó dom da ciência, <br></br>
Dispor-me para que seja <br></br>
Digno de Vossa assistência. <br></br>
Pai Nosso, Ave Maria, Glória ao Pai. <br></br>
                

					2° Vinde Divino Espírito, <br></br>
Vinde, dom de piedade <br></br>
Nesta divina virtude <br></br>
Inflamai a minha vontade. <br></br>
Pai Nosso, Ave Maria, Glória ao Pai. <br></br>
 

					3° Vinde, Divino Espírito,<br></br> 
Dar-me um santo temor, <br></br>
Para que a toda a culpa <br></br>
Tenha minha alma horror. <br></br>
Pai Nosso, Ave Maria, Glória ao Pai.  <br></br>
					</p>

					<h4>
					Oração para pedir os 7 dons do Espírito Santo
					</h4>
					<p>
Ó 
					Jesus, que antes de subirdes aos céus, prometestes aos 
					Vossos Apóstolos e discípulos enviar-lhes o Espírito Santo 
					para os consolar e fortalecer, dignai-Vos fazer descer 
					também sobre nós este Espírito consolador. <br></br>

					Vinde Espírito de sabedoria, e fazei-nos  conhecer a 
					verdadeira felicidade dando-nos os meios para consegui-la.<br></br>

					Vinde, Espírito de inteligência, que, por Vossa divina 
					luz, nos fazeis penetrar as verdades e os mistérios de nossa 
					santa Religião.<br></br>

					Vinde, Espírito de conselho, e ajudai-nos a discernir em 
					todas as ocasiões o que devemos fazer para cumprir com a 
					Vossa divina vontade.<br></br>

					Vinde, Espírito de fortaleza, e prendei-nos a Deus e aos 
					nossos deveres de maneira que nada jamais nos possa abalar.<br></br>

					Vinde, Espírito de ciência que, único, nos podeis dar o 
					perfeito conhecimento de Deus e de nós mesmos. Pedimo-Vos 
					esta ciência divina e única necessária com todo o ardor de 
					nossa alma.<br></br>

					Vinde, Espírito de piedade, para que saibamos executar 
					com alegria e prontidão o que Deus nos manda e para que, 
					pela unção de Vosso divino amor, achemos verdadeiramente 
					leve e suave o jugo do Senhor.<br></br>

					Vinde, Espírito de temor de Deus, e fazei-nos evitar com 
					o maior cuidado tudo o que possa desagradar ao nosso Pai 
					celestial.<br></br>
Glória 
					a Vós, Pai Eterno, que com o Vosso Filho único e o Espírito 
					consolador, viveis e reinais por todos os séculos dos 
					séculos.  Amém.
					</p>

<h4>
Hino "Veni Creator"
</h4> 

					 
							<p>
							
							Vinde, Espírito Criador,<br></br>


							visitai as almas dos Vossos;<br></br>

							

							enchei de graça celestial<br></br>

							

							os corações que criastes!<br></br>

							  

							  

							

							Sois o Divino Consolador,<br></br>

							

							o dom do Deus Altíssimo,<br></br>

							

							fonte viva, o fogo, a caridade,<br></br>

							

							a unção dos espirituais.<br></br>

							  

							  

							

							Com os Vossos sete dons:<br></br>

							

							sois o dedo da direita de Deus,<br></br>

							

							Solene promessa do Pai<br></br>

							

							Inspirando nossas  palavras.<br></br>

							 

							  

							

							Acendei a luz nos sentidos;<br></br>

							

							insuflai o amor nos corações,<br></br>

							

							amparai na constante virtude<br></br>

							

							a nossa carne enfraquecida.<br></br>

							  

							  

							

							Afastai para longe o inimigo;<br></br>

							

							Trazei-nos prontamente a paz<br></br>

							


							Assim guiados por Vós<br></br>

							

							Evitaremos todo o mal.<br></br>

							  

							  

							

							Por Vós explicar-se-á o Pai<br></br>

							

							E conheceremos o Filho;<br></br>

							

							Dai-nos crer sempre em Vós<br></br>

							

							Espírito do Pai e do Filho.<br></br>

							  

							  

							

							Glória ao Pai, Senhor,<br></br>

							

							Ao Filho que ressuscitou<br></br>

							

							Assim como ao Consolador.<br></br>

							

							Por todos os séculos. Amém  <br></br>

							


							


							V/  Enviai, Senhor, o vosso espírito e tudo será 
							criado<br></br>  
							 R/ E renovareis a face da terra   <br></br>

							Oração <br></br>

							Ó Deus, que ilustrastes os corações dos fiéis com as 
							luzes do Espírito Santo, dai-nos, pelo mesmo 
							Espírito, procurar o que é reto, e nos alegrarmos 
							sempre com a sua consolação.  Por Jesus Cristo Nosso 
							Senhor. Amém 
							</p>

					<h3>
                    Novena ao Espírito Santo
					</h3>
					<h4>
					Orações iniciais para todos os dias 
					</h4>	
					<p>
					Deus meu! Deus de amor e de verdade. 
					Autor da santificação de nossas almas, prostrado 
					humildemente ante vossa soberana Majestade, detesto na 
					amargura de meu coração todos os meus pecados, como ofensas 
					feitas a Vos, digno de ser amado sobre todas as coisas. 
					Oh! bondade infinita! Quem jamais vos tivera ofendido! 
					Perdoai-me, Senhor, Deus de graça e de misericórdia, 
					perdoai-me meus continuas infidelidades; o não ter tido 
					valor para executar coisa alguma boa, depois que tantas 
					vezes vossa misericórdia e graça me tem solicitado, 
					repreendido, e inspirado amorosamente. 
					Me pesa, me arrependo da ingrata correspondência e indigna 
					cegueira com que tenho resistido incessantemente a vossos 
					doces e divinos chamamentos. Mas proponho firmemente com 
					vosso auxílio de não ser rebelde a Vos, de seguir em adiante 
					vossas ternas inspirações com suma docilidade. 
					Para este fim, iluminai-me. 
					Oh! fonte de luz, meu entendimento, fortalecei minha 
					vontade, purificai meu coração, arrancai todos os meus 
					pensamentos, desejos e afetos, e concedei-me ser digno de 
					obter os frutos bem-aventurados que vossos dons produzem nas 
					almas que os possuem. 
					Concedei-me as graças que Vos peço nesta novena, se tem de 
					ser para maior glória vossa, e para que eu Vos veja, ame e 
					adore sem fim em vossa glória. Amém. 
					</p>
<h4>
Invocação ao Espírito Santo 
</h4>
<p>
Vem a nossas almas,

					Oh! Espírito Santo! e do céu enviai-me tua luz em um raio.
					
					Vem, Pai de pobres, vem, de dons Santos, vem, de corações 
					lúcido reparo. 
					Vem, consolador, doce e soberano, hóspede das almas, suave 
					presente. Nos contratempos descanso ao trabalho, temperança 
					no ardente consolo no pranto. Santíssima luz de todo 
					cristão, o íntimo do peito, cheio de amor casto. No homem 
					nada há sem teu amparo, e nada pode ter sem Vós, de puro e 
					Santo. Com tuas águas puras lava o manchado, rega o que é 
					seco põe o enfermo são. 
					Ao coração duro dobre com tua mão, e abrande as almas que 
					manchou o pecado. Volte ao bom caminho ao extraviado, e ao 
					gelado acende em teu fogo Santo. Concede aos teus fiéis em 
					Vós confiados,os dons Sacros e Centenários. Aumentai em 
					virtude para que mereçamos, do eterno gozo o feliz descanso. 
					Amém. 
					</p>
 <p>
A 
					continuação rezar a oração do dia que corresponda: 

Orações finais para todos os dias (exceto o último dia)
</p>				
 

					<h4>
					Hino ao Espírito Santo 
					</h4>
					<p>
					Vem, Oh! Criador Espírito! 
					Nossas almas visitai, nossos peitos, que Vos criastes, 
					enchei de graça celestial. Pois sois Paráclito Espírito, Dom 
					do Pai celestial, fonte viva, sacro fogo, unção santa, 
					espiritual. Em teus dons setiformes, tal promessa paternal, 
					dedo eterno de Deus Pai nossas línguas inflamai. 
					Ilustrai nossos sentidos, o coração inflamai, nossos corpos, 
					que são fracos, com vossa virtude armai. Apartai os 
					inimigos, dai-nos a divina paz e sendo Vos nosso guia 
					livrai-nos de toda maldade. Por Vos ao Pai e ao Filho, nesta 
					vida mortal convocamos, e cremos sempre em tua Divindade.
					
					A Deus Pai seja glória, ao filho glória imortal e ao 
					Espírito Paráclito por toda a eternidade. Amém. 
					</p>
					 


					<h4>
					Espírito 
					Santo!
					</h4>



					<p>
					Diviníssimo consolador de minha alma, fogo, luz e celestial 
					ardor dos corações humanos, se é para glória de vossa 
					Majestade que eu consiga o que eu desejo e peço neste dia, 
					digna-Vos conceder-me benignamente; E senão dirigi meu 
					pedido, dando-me as graças que tem de ser para vossa maior 
					glória e bem da salvação de minha alma. Amém. 
					</p>
					<p><i>
Cada um 
					se recolherá interiormente e pedirá a graça que mais 
					necessite. 
					</i></p>
					<p>
Se 
					concluirá todos os dias com a antífona, verso, resposta e 
					oração seguintes: 
					</p>
<h4>
Antífona 
 </h4>
<p>
Vos 
					desejarei, aleluia; <br></br>
					Voe e venho a nós, aleluia; <br></br>
					E se alegrará nosso coração, aleluia, aleluia. <br></br>
					 </p>
					<p>
V. 
					Enviai, Senhor, vosso Santo Espírito, e serão criados. <br></br>
R. E renovareis a face da terra. <br></br>
 </p>
<h4>
Oração 
 </h4>
<p>
Oh! Deus 
					que haveis instruído os corações dos fiéis com a ilustração 
					do Espírito Santo; dai-nos o sentir retamente com este mesmo 
					Espírito, e aproveitar sempre de sua consolação. Por Jesus 
					Cristo Senhor nosso, teu filho, que vive contigo e Reina na 
					unidade do mesmo Espírito Santo, Deus por todos os séculos 
					dos séculos. Amém. 
					 </p>


 

<h4>
					Primeiro Dia 
					 </h4>
					<p><i>
Começar com as orações 
					preparatórias para todos os dias. 
					</i></p>
 
<p>
Oh! 
					Espírito Santo! 
Fonte viva de divinas água que, na criação do mundo, 
					santificastes as imensas águas que rodeavam o mundo e as 
					águas do Jordão no batismo de Jesus Cristo, Senhor nosso; Eu 
					Vos suplico que sejais em meu Espírito, tão árido e seco, a 
					Sagrada fonte de água viva, que jamais se esgota e brota até 
					a vida eterna; E a graça que Vos peço nesta novena, se é 
					para maior glória vossa e bem de minha alma. Amém. 
					</p>
					 <p>
Rezar três vezes o Pai-Nosso e Ave-Maria em honra à 
					Santíssima Trindade, e terminar com a orações finais para 
					todos os dias. 
					</p>


 

<h4>
					Segundo Dia 
					 </h4>
<p>
Oh! 
					Espírito Santo! 
Que fazendo sombra com vossa virtude altíssima a puríssima 
					Virgem Maria, e a transbordando ao mesmo tempo de graça, 
					fizeste de um modo inefável e Onipotente a obra infinita da 
					Encarnação do Verbo Eterno, no seio virginal de vossa 
					celestial Esposa: Fazei sombra a minha alma e concedei-me a 
					graça necessária para que eu seja digno de receber ao mesmo 
					Verbo divino feito homem e Sacramentado por meu amor, e 
					também a especial que Vos peço nesta novena, se é para maior 
					glória vossa, e bem de minha alma. Amém. 
					 </p>
					<p>
Rezar três vezes o Pai-Nosso e Ave-Marias em Honra da 
					Santíssima Trindade, e terminar com a orações fim ais para 
					todos os dias. 
					</p>


 

					<h4>
					Terceiro Dia 
					 </h4>
<p>
Oh! 
					Espírito Santo! 
Celestial pomba que, abrindo de par em par os céus, 
					descestes sobre Jesus já batizado no Jordão, simbolizando: 
					que desde este momento em que tomou a natureza humana, 
					habitava Nele a plenitude da Divindade; Vem sobre a mim 
					pobre e miserável e enchei-me do dom de sabedoria de 
					conselho, de entendimento e fortaleza, de ciência, piedade e 
					de temor de Deus; E a graça que Vos peço nesta novena, se é 
					para maior glória vossa e bem de minha alma. Amém. 
					</p>
					 <p>
Rezar três vezes o Pai-Nosso e Ave-Maria em honra à 
					Santíssima Trindade, e terminar com a orações finais para 
					todos os dias. 
					 </p>


 

		<h4>
					Quarto Dia 
					 </h4>
<p>
Oh! 
					Espírito Santo! 
Nuvem lúcida que fazendo no Tabor sombra a Jesus 
					transfigurado e glorioso, ilustrastes aquele Santo monte, e 
					amparastes em seu excessivo temor aos Apóstolos, 
					comunicando-lhes depois da Ascensão de seu Divino Mestre 
					muita luz, fervor e graça; Ilustrai, protegei e fecundai 
					minha alma para que eu seja digno discípulo de Jesus, E a 
					graça que Vos peço nesta novena, se é para maior glória 
					vossa e bem de minha alma. Amém. 
					 </p>
					<p>
Rezar três vezes o Pai-Nosso e Ave-Maria em honra à 
					Santíssima Trindade, e terminar com a orações finais para 
					todos os dias. 
					 </p>


 

<h4>
					Quinto Dia 
					</h4>

					 
<p>
Oh! 
					Espírito Santo! 
Suave vento que teve o Cenáculo e deu força e valor aos 
					corações de quantos Vos esperavam, orando fervorosamente 
					unidos com alma e coração: Oh! Espírito de vida e amor! 
					Enchei toda a casa de meu pequeno espírito, minha memória, 
					entendimento e vontade: E a graça que Vos peço nesta novena, 
					se é para maior glória vossa e bem de minha alma. Amém.
					</p>
					 <p>
Rezar três vezes o Pai-Nosso e Ave-Maria em honra à 
					Santíssima Trindade, e terminar com a orações finais para 
					todos os dias. 
					 </p>


 

<h4>
					Sexto Dia 
					</h4>

					 
<p>
Oh! 
					Espírito Santo! 
Luz claríssima que ilustrou o entendimento dos Santos 
					Apóstolos, comunicando-lhes, como Sol divino, toda a luz que 
					necessitavam para sua perfeição e para a conversão do mundo: 
					Oh! Luz beatíssima! Iluminai todos os lugares tenebrosos de 
					meu interior, para que Vos conheça e dê a conhecer a todo o 
					mundo; E a graça que Vos peço nesta novena, se é para maior 
					glória vossa e bem de minha alma. Amém. 
					 </p>
					<p>
Rezar três vezes o Pai-Nosso e Ave-Maria em honra à 
					Santíssima Trindade, e terminar com a orações finais para 
					todos os dias. 
					 </p>


 

<h4>
					Sétimo Dia 
					 </h4>
<p>
Oh! 
					Espírito Santo! 
Sagrado fogo que aparecendo visível sobre os Apóstolos no 
					dia de Pentecostes, inflamastes divinamente seus corações 
					para que, abrasados em vosso amor, incendiasse depois a todo 
					o mundo nas mesmas sagradas chamas: Acendei em vossos 
					Santíssimos ardores meu coração gelado, para que, abrasado 
					meu Espírito Neles, acenda em vosso divino amor a quantos 
					pessoas eu conheça; E a graça que Vos peço nesta novena, se 
					é para maior glória vossa e bem de minha alma. Amém. 
					</p>
					 <p>
Rezar três vezes o Pai-Nosso e Ave-Maria em honra à 
					Santíssima Trindade, e terminar com a orações finais para 
					todos os dias. 
					</p>

					 


 

<h4>
					Oitavo Dia 
					</h4>

					 
<p>
Oh! 
					Espírito Santo! 
Chama ardente de caridade que com o fogo de vosso amor 
					inflamando o coração dos Santos Apóstolos e de todos os 
					homens Apostólicos, os comunicastes o dom de línguas para a 
					conversão do mundo; Inflamai Sagrado Fogo de Amor ao meu 
					coração e minha língua para que sempre governado por vosso 
					Espírito, e fervoroso na caridade, inflame a todos para que 
					observem fielmente vossos divinos mandamentos; E a graça que 
					Vos peço nesta novena, se é para maior glória vossa e bem de 
					minha alma. Amém. 
					 </p>
					<p>
Rezar três vezes o Pai-Nosso e Ave-Maria em honra à 
					Santíssima Trindade, e terminar com a orações finais para 
					todos os dias. 
					 </p>


 

<h4>
					Nono Dia 
					 </h4>
<p>
Oh! 
					Espírito Santo! 
Caridade essencial que, difundida nos corações humanos, 
					vossos divinos dons, comunicando todas as divinas graças que 
					se incluem em nossos sete dons, e compreendem tudo o quanto 
					necessita a vida espiritual, própria de cada um, e a qual 
					desejais que se comunique a todos os homens: Oh! Caridade 
					santíssima! Infundi em meu coração tão pobre de vossos sete 
					dons, e que com eles publique vossas grandezas. 
Oh! Deus misericordioso! Vos, que antigamente enchestes 
					neste dia os peitos apostólicos de vossa graça, dai-nos 
					Vossos divinos carismas, Concedei-nos tempos tranqüilos, 
					confirmai as graças que Vos temos pedido nesta novena, se 
					são para maior glória vossa e bem de nossas almas. Amém.
					</p>				
					 <p>
Depois desta Oração, em lugar da antífona, verso, resposta 
					e oração de todos os dias, se digam as seguintes: 
					</p>
 

<h4>
Antífona para o Nono Dia 
 </h4>
<p>
Hoje se 
					completaram os dias de Pentecostes, aleluia; Hoje se 
					reproduzem as felizes alegrias, quando o Espírito Consolador 
					baixou sobre seus Apóstolos, aleluia; Hoje, raiou o 
					resplendor do divino fogo, repousou o Espírito Santo em 
					forma de línguas sobre eles, aleluia; Hoje lhes concedeu 
					palavras edificadoras, lhes inflamou de seu amor e lhes 
					encheu de seus inumeráveis carismas, aleluia; aleluia. 
					 </p>
					<p>
V.
Foram 
					todos cheios do Espírito Santo; aleluia. <br></br>

R. E começaram a falar em várias línguas; aleluia.<br></br>
					
 </p>
<h4>
Oração 
 </h4>
<p>
Oh! Deus 
					que haveis instruído neste dia os corações dos fiéis com a 
					ilustração do Espírito Santo, dai-me o sentir retamente com 
					este mesmo Espírito, e aproveitar sempre de sua consolação. 
					Por Jesus Cristo Senhor Nosso, teu Filho, que vive contigo e 
					reina na unidade do mesmo Espírito Santo; Deus por todos os 
					séculos dos séculos. Amém. 
					</p>
<h3>
Novena Breve ao Espírito Santo  
</h3>
<h4>
Orações 
					para todos os dias 
					</h4>
 <p>
Vem, Espírito Santo, enchei os corações de teus fiéis e 
					acende neles a chama de teu amor. Oh! Deus, que com a luz do 
					Espírito Santo iluminas os corações de teus fiéis, 
					concedei-nos que guiados pelo mesmo Espírito, desfrutemos do 
					que é reto e tenhamos sua alegria celestial. 
					 </p>
					<p>
Vem, Espírito Santo, por teu Dom de Sabedoria, 
					concedei-nos a graça de apreciar e estimar os bens do céu e 
					mostrai-nos os meios para alcançá-los. Glória. <br></br>
Vem, Espírito Santo, por teu Dom de Entendimento, 
					ilumina nossas mentes a respeito dos mistérios da salvação, 
					para que possamos compreendê-los perfeitamente e abraçá-los 
					com fervor. Glória. <br></br>
Vem, Espírito Santo, por teu Dom de Conselho, 
					inclina nossos corações a atuar com retidão e justiça para 
					benefício de nós mesmos e de nossos semelhantes. Glória.<br></br>
					
Vem, Espírito Santo, por teu Dom de Fortaleza, 
					fortalecei-nos com tua graça contra os inimigos de nossa 
					alma, para que possamos obter a coroa da vitória. Glória.<br></br>
					
Vem, Espírito Santo, por teu Dom de Ciência, 
					ensinai-nos a viver entre as coisas terrenas para assim não 
					perder as eternas. Glória. <br></br>
Vem, Espírito Santo, por teu Dom de Piedade, 
					inspirai-nos a viver sóbria, justa, e piedosamente nesta 
					vida, para alcançar o céu na outra vida. Glória. <br></br>
Vem, Espírito Santo, por teu Dom de Temor de Deus, 
					fere nossos corpos com teu temor para assim trabalhar pela 
					salvação de nossas almas. <br></br>
Glória. <br></br>
</p>
 
<h4>
Oração:
</h4>				
<p>
					Oh! Deus, que tem unido as nações na confissão de teu Nome, 
					concedei-nos que aos que tem renascido pela água do batismo, 
					tenham a mesma fé em seus corações e a mesma piedade em suas 
					ações. Oh! Deus, que enviaste o Espírito Santo aos 
					apóstolos, ouvi as orações de teus fiéis para que tenham a 
					verdadeira paz, que por tua graça, tenha recebido o dom da 
					verdadeira fé. Vos suplicamos, Oh! Deus, que teu Santo 
					Espírito acenda em nossos corações essa chama que Cristo 
					trouxe a terra e desejou ardentemente que fosse acendida.
					
					Inflamai, Oh! Senhor, nossos corações com o fogo do Espírito 
					Santo, para que vos sirvamos castos de corpo e limpos de 
					coração. Enriquece, Senhor, nossos corações derramando com 
					plenitude teu Santo Espírito por cuja sabedoria fomos 
					criados e por cuja Providência somos governados. Te 
					suplicamos, Oh! Deus Todo Poderoso e Eterno, que teu Santo 
					Espírito nos defenda e habite em nossas almas, para que ao 
					fim, sejamos os templos de sua glória. 
					Te pedimos, Senhor, que segundo a promessa de teu Filho, o 
					Espírito Santo nos leve ao conhecimento pleno de toda a 
					verdade revelada. Por Cristo Nosso Senhor. Amém. 
					</p>
					<h3>
                    DEVOÇÃO AO DIVINO ESPÍRITO SANTO
					</h3>
					<h4>
					ORAÇÃO AO ESPÍRITO SANTO
					</h4>
					<p>
					Ó Espírito Santo, Espírito de amor e de verdade, autor da 
					santificação das nossas almas, eu Vos adoro como o princípio 
					de minha felicidade eterna. Muitas graças Vos dou, Soberano 
					Dispensador dos benefícios que do céu recebo, e Vos invoco 
					como a fonte das luzes e da fortaleza que me são necessárias 
					para conhecer o bem e poder praticá-lo. Espírito de luz e de 
					fortaleza, alumiai o meu entendimento, fortificai a minha 
					vontade, purificai o meu coração, regulai todos os meus 
					movimentos, e fazei-me dócil a todas as vossas inspirações. 
					Espírito Consolador, aliviai as penas e os trabalhos que me 
					afligem neste vale de lágrimas, dai-me conformidade e 
					paciência, para que eu mereça fazer neste mundo penitência 
					dos meus pecados e gozar no outro a luz da eterna 
					bem-aventurança. Amém.
					</p>


					 

					<h4>
					SEQÜÊNCIA DEVOTÍSSIMA
					</h4>
					<p>
					Vinde, Santo Espírito, e mandai do céu um raio da vossa luz.<br></br>
					Vinde, Pai dos pobres, vinde, ó Distribuidor dos bens, 
					vinde, ó Luz dos corações.<br></br>
					Vinde, Consolador ótimo, doce Hóspede, e suave alegria das 
					almas.<br></br>
					Vinde aliviar-lhes os trabalhos, temperar-lhes os ardores, e 
					enxugar-lhes as lágrimas.<br></br>
					</p>
					<p>
					Ó Luz beatíssima, inflamai o íntimo dos corações dos vossos 
					fiéis.<br></br>
					Sem a vossa graça nada há no homem, nada que se possa dizer 
					inocente.<br></br>
					Lavai, pois, o que em nós é sórdido, regai o que é seco, 
					sarai o que está ferido.<br></br>
					Abrandai o que é duro, abrasai o que é frio, e reconduzi o 
					desviado.<br></br>
					Concedei aos vossos servos, que em Vós confiam, o setenário 
					dos vossos dons.<br></br>
					Dai-lhes o mérito da virtude, o dom da graça final e o 
					glorioso prêmio dos prazeres eternos.<br></br> Amém.
					</p>
 

					<h4>
					ORAÇÃO
					 </h4>

<p>
					Para alcançar os sete dons e doze frutos do Espírito Santo<br></br>


					 Vinde, 
					Espírito Santo, enchei os corações dos vossos fiéis, e 
					acendei neles o fogo do vosso amor!
					 </p>

					<p>
					Ó Espírito Santo, concedei-me o 

					"dom do temor de Deus", 
					para que eu sempre me lembre com suma reverência e profundo 
					respeito da vossa divina presença, trema, como os mesmos 
					Anjos, diante de vossa divina Majestade, e nada receie tanto 
					como desagravar aos vossos santos olhos.<br></br>

					Glória ao Pai, ao Filho e ao Espírito Santo, como era no 
					princípio, agora e sempre, e pelos séculos dos séculos. 
					Amém.
					 </p>

<p>
					Espírito Santo, concedei-me o 

					"dom da piedade", 
					que me tornará delicioso o trato convosco na oração, e me 
					fará amar a Deus com íntimo amor como a meu Pai, a Maria 
					Santíssima, como a minha Mãe, e a todos os homens, como a 
					meus irmãos em Jesus Cristo.<br></br>

					Glória ao Pai...
					 </p>

<p>
					Espírito Santo, concedei-me o 

					"dom da ciência", 
					para que eu conheça cada vez mais a minha própria miséria e 
					fraqueza, a beleza da virtude e o valor inestimável da alma, 
					e para que sempre veja claramente as ciladas do demônio, da 
					carne e do mundo, para poder evitá-las.<br></br>

					Glória ao Pai...
					 </p>

<p>
					Espírito Santo, concedei-me o 

					"dom da fortaleza", 
					para que eu, sem respeito humano, fuja do pecado, pratique a 
					virtude com fervor, e sofra com paciência e com alegria de 
					espírito os desprezos, prejuízos, perseguições e a própria 
					morte, antes que renegar por palavras e por obras ao meu 
					amabilíssimo Senhor e Salvador Jesus Cristo.<br></br>

					Glória ao Pai...
					</p>
					 

<p>
					Espírito Santo, concedei-me o 

					"dom do conselho", 
					tão necessário em tantos passos melindrosos da vida, para 
					que sempre escolha o que mais Vos agrada, e siga em tudo a 
					vossa divina graça, e com bons e caridosos conselhos socorra 
					ao próximo.<br></br>

					Glória ao Pai...
					</p>
					 

<p>
					Espírito Santo, concedei-me o 

					"dom da inteligência", 
					para que eu, alumiado pela luz celeste de vossa graça, bem 
					entenda as sublimes verdades da fé cristã.<br></br>

					Glória ao Pai...
					 </p>

					<p>
					Espírito Santo, concedei-me o
"dom da sabedoria", a 
					fim de que eu, cada vez mais, goste das coisas divina e, 
					abrasado no fogo do vosso amor, prefira com alegria o 
					caminho do céu a tudo que é mundano e me una para sempre a 
					Jesus, sofrendo tudo neste mundo por seu amor.<br></br>

					Glória ao Pai...
					 </p>
					<p>
Vinde, 
					Espírito Criador, visitai-me e enchei meu coração, que Vós 
					criastes com a vossa divina graça. Vinde e repousai sobre 
					mim, Espírito de sabedoria e inteligência, Espírito do 
					conselho e fortaleza, Espírito de ciência e piedade e de 
					temor de Deus.<br></br>

					Espírito Santo, Amor eterno do Pai e do Filho, dignai-Vos 
					também conceder-me os vossos doze frutos: o "fruto da 
					caridade", que me una intimamente convosco pelo amor; o 
					"fruto do gozo", que me encha da santa consolação; o "fruto 
					da paz", que produza em mim a tranqüilidade da alma; o 
					"fruto da paciência", que me faça sofrer tudo por amor de 
					Jesus; o "fruto da benignidade", que me leve a socorrer de 
					boa vontade aos que sofrem; o "fruto da bondade", que me 
					torne bem-fazejo e clemente a todos; o "fruto da 
					longaminidade", que me faça esperar com paciência em 
					qualquer demora; o "fruto da brandura", que me faça suportar 
					com toda a mansidão as fraquezas do próximo; o "fruto da 
					fé", que me faça crer firmemente na palavra de Deus; o 
					"fruto da modéstia", que regule todo o meu exterior; enfim, 
					os "frutos da continência e castidade", que me conservem o 
					coração limpo e imaculado.<br></br>

					Espírito Divino, fazei que minha alma seja para sempre vossa 
					morada, e meu corpo, vosso sagrado templo. Habitai em mim e 
					ficai comigo na terra, para que eu mereça ver-Vos 
					eternamente mo reino da glória. Amém.
					</p>

<h4>
					ORAÇÃO AO ESPÍRITO SANTO
	
					 


					Pela Santa Igreja				</h4>

				<p>
Ó 
					Espírito Santo Criador, assisti benignamente a toda a Igreja 
					Católica. Fortalecei-a e confirmai-a pela vossa divina 
					virtude contra todos os ataques dos inimigos. Renovai 
					também, pela vossa graça e caridade, o espírito dos vossos 
					servos, que ungistes, para que em Vós glorifiquem o Pai e 
					seu Filho Unigênito, Jesus Cristo, Nosso Senhor. Amém. 
					</p>
                    </p>
                </div>
            </div>
        );
    }
}

export default Divino;