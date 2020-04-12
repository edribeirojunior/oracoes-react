import React, { Component } from 'react';
import Header from './components/Header';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';
import Sangue from './img/sangue.jpg';
import './styles.css';


class Sacramento extends Component {
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
                <p className="Oracoes-Sacramento">

				<div className="Hostia">
					
					<img src={Sangue} alt="Hostia de Sangue"/>
 
				</div>

                  
<h2>
DEVOÇÃO AO SANTÍSSIMO SACRAMENTO.
					 
</h2>

<h3>
					Oito dias de Adoração Eucarística 
					</h3>
<h4>
					Jaculatórias contra a Blasfêmia
					 </h4>
					<p>
					Bendito seja Deus. 
					Bendito seja seu Santo Nome. 
					Bendito seja Jesus Cristo verdadeiro Deus e verdadeiro 
					Homem. 
					Bendito seja o Nome de Jesus. 
					Bendito seja seu Sacratíssimo Coração. 
					Bendito seja Jesus no Santíssimo Sacramento do Altar. 
					Bendito seja o Espírito Santo Paráclito. 
					Bendita seja Maria Santíssima, a excelsa Mãe de Deus. 
					Bendita seja sua Santa e Imaculada Conceição. 
					Bendita seja sua gloriosa Assunção aos Céus. 
					Bendito seja o Nome de Maria, Virgem e Mãe. 
					Bendito seja São José, seu castíssimo Esposo. 
					Bendito seja Deus em seus anjos e em seus Santos. 
					 </p>
					<h4>
Ato de 
					Contrição:
 </h4>
<p>
Senhor 
					meu Jesus Cristo, que pelo amor que tendes aos homens estais 
					de noite e de dia neste Sacramento, todo cheio de piedade e 
					de amor, esperando, chamando e recebendo a todos os que vêem 
					a visitar-vos: eu creio que estais presente no Augusto 
					Mistério do altar, Vos adoro desde o abismo de meu nada e 
					vos dou graças por todas as mercês que me haveis feito, 
					especialmente por haver-me dado neste Sacramento vosso 
					Corpo, vosso Sangue, vossa Alma e vossa Divindade, 
					por haver-me concedido como advogada a vossa Santíssima Mãe 
					a Virgem Maria, e por haver-me chamado a visitar-vos neste 
					lugar santo. <br></br>
Adoro 
					vosso amantíssimo Coração, e desejo adorar-vos com três 
					fins: o primeiro, em agradecimento desta tão preciosa 
					dádiva; o segundo, para desagravar-vos de todas as injurias 
					que haveis recebido de vossos inimigos neste Sacramento, e o 
					terceiro, porque desejo nesta visita adorar-vos em todos os 
					lugares da terra, onde estais sacramentado com menos culto e 
					mais esquecimento.<br></br> 
Jesus 
					meu!, vos amo com todo meu coração; pesa-me de haver tantas 
					vezes ofendido no passado a vossa infinita Bondade; 
					proponho, ajudado de vossa graça, emendar-me no futuro; e 
					agora, miserável como sou, me consagro todo a Vós; vos dou e 
					entrego toda minha vontade, meus afetos, meus desejos e todo 
					quanto me pertence. De hoje em diante fazei, Senhor, de mim 
					e de minhas coisas tudo o que vos agrade. O que eu quero e 
					vos peço é vosso Santo Amor, a perfeita obediência a vossa 
					Santíssima vontade e a Perseverança final. Vos encomendo as 
					almas do Purgatório, especialmente as mais devotas do 
					Santíssimo Sacramento e de Maria Imaculada, e vos rogo 
					também por todos os pobres pecadores. Em fim, amado Salvador 
					meu, uno todos meus afetos e desejos com os de vosso 
					amorosíssimo Coração, e assim unidos vos ofereço a vosso 
					Eterno Pai e vos peço em vosso Nome que por vosso amor os 
					aceite e os olhe benignamente. Amém.  
					</p>
					<p>
					Rezar seis Pai-Nossos, Ave-Marias e Glórias e a comunhão 
					espiritual. 
					</p>
<h4>
					Comunhão Espiritual:
					 </h4>
					<p>
Oh! 
					Jesus meu, creio que estais no Santíssimo Sacramento; vos 
					amo sobre todas as coisas e desejo receber-vos dentro de 
					minha alma. Já que agora não posso fazê-lo sacramentalmente 
					vinde ao menos espiritualmente a meu coração. Como se já 
					houvesse vindo, vos abraço e me uno todo a Vós; não 
					permitais jamais que volte a abandonar-vos. <br></br>
- Da 
					desgraça de receber indignamente vosso Corpo e Sangue, 
					livrai-nos, Senhor. <br></br>
					- Da concupiscência da carne, livrai-nos, Senhor. <br></br>
					- Da concupiscência dos olhos, livrai-nos Senhor. <br></br>
					- Da soberba da vida, livrai-nos, Senhor. <br></br>
					- De toda ocasião de ofender-vos, livrai-nos, Senhor. <br></br>
					- Jesus, ouvi-nos. <br></br>
					- Jesus, escutai-nos.  <br></br>
					</p>
					<p>
					V. Nos haveis dado um pão vindo do céu. 
					R. Um pão que encerra toda doçura.  
					</p>
				
<h2>
 AÇÃO 
					DE GRAÇAS APÓS A COMUNHÃO.
					 </h2>
					<p>
Alma de 
					Cristo, 
					santificai-me. <br></br>
Corpo de 
					Cristo, 
					salvai-me. <br></br>
Sangue de 
					Cristo, 
					inebriai-me. <br></br>
Água do 
					lado de Cristo, 
					lavai-me <br></br>
Paixão de 
					Cristo, 
					confortai-me. <br></br>
Oh! bom 
					Jesus, 
					ouvi-me. <br></br>
Dentro 
					dos vossas chagas, 
					escondei-me <br></br>
Não 
					permitais, 
					que eu me separe de vós. <br></br>
Do 
					espírito maligno, 
					defendei-me. <br></br>
No hora 
					da minha morte, 
					chamai-me. <br></br>
E 
					mandai-me ir, 
					para Vós. <br></br>
Para que 
					com os vossos santos, 
					vos louve. <br></br>
Por todos 
					os séculos dos séculos. 
					Amém. 
					</p>
					 
					 
 

					<h3>
					Adoração ao Santíssimo Sacramento 
					</h3>
					<p>
					Composta por São Tomás de Aquino, a pedido do Papa Urbano 
					IV. 1263  
					</p>
					<p>
Eu vos 
					adoro devotamente, oh! Divindade escondida, que 
					verdadeiramente Se oculta sob estas aparências, a Vós, meu 
					coração submete-se todo inteiro, porque, vos contemplando, 
					tudo desfalece. 
A 
					vista, o tato, o gosto falham com relação a Vós mas, somente 
					em vos ouvir em tudo creio. Creio em tudo aquilo que disse o 
					Filho de Deus, nada mais verdadeiro que esta Palavra de 
					Verdade. 
Na 
					Cruz, estava oculta somente a vossa Divindade, mas aqui, 
					oculta-se também a vossa Humanidade. 
Eu, 
					contudo, crendo e professando ambas, peço aquilo que pediu o 
					ladrão arrependido. 
Não 
					vejo, como Tomé, as vossas chagas, entretanto, vos confesso 
					meu Senhor e meu Deus. 
Faça 
					que eu sempre creia mais em Vós, em vós esperar e vos amar.
					
					Oh! memorial da morte do Senhor, Pão vivo que dá vida aos 
					homens, faça que minha alma viva de Vós, e que à ela seja 
					sempre doce este saber. 
Senhor 
					Jesus, bondoso pelicano, lava-me, eu que sou imundo, em teu 
					sangue, pois que uma única gota faz salvar todo o mundo e 
					apagar todo pecado. 
					Oh! Jesus, que velado agora vejo, peço que se realize aquilo 
					que tanto desejo: Que eu veja claramente vossa face 
					revelada; que eu seja feliz contemplando a vossa glória. 
					Amém. 
					 </p>
 
<h3>
A 

					Hora Santa.
					</h3>
					<h4>
					(Nas quintas-feiras das 21:00 às 24:00hs.)
					</h4>
					 <p>
Divino Salvador das almas: cobertos de confusão nossos 
					rostos nos ajoelhamos em vossa presença soberana, dirigindo 
					um olhar ao solitário Tabernáculo, onde permaneces cativo de 
					amor, nossos corações se comovem ao contemplar a solidão e 
					esquecimento em que os tem vossos criaturas. 
					 </p>
					<p>
Haveis derramado em balde vosso Sangue bendito? Será inútil 
					tanto amor? Mas já que nos tem permitido nesta noite unir 
					nossas reparações as vossas, e acompanhar-vos em vosso 
					Sacramento, onde Vós, que sois o Sol do mundo, irradias 
					silenciosamente sobre nós a todas as horas a luz da verdade, 
					o calor do amor divino, a beleza do sobrenatural e a 
					fecundidade generosa de todo bem; já que vos tem dignado 
					escolher-nos dentre todos os homens para gozar de vossa 
					companhia e amizade, permite-nos pelos que não vos bendizem 
					ou blasfemam de Vós, Oh! pacientíssimo Senhor Jesus, 
					adorar-Vos-ei por todos aqueles que vos tem esquecido, e 
					implorarei para eles à infinita misericórdia de vosso 
					Coração, indulgência para seus esquecimentos e para seus 
					crimes. 
					 </p>
					<p>
"O que não tinha a ver com o pecado, por nós pagou o 
					pecado, para que nós, por seu intermédio, obtivéssemos a 
					reabilitação de Deus". 
					2Co 5,21
					 </p>
					<p>
Oh! Jesus! Por nossos pecados, os de nossos pais, irmãos e 
					amigos, e pelos do mundo inteiro:<br></br>
Perdão, Senhor, perdão. <br></br>
					Pelas infidelidades e sacrilégios, pelos ódios e rancores:<br></br>
					
Perdão, Senhor, perdão. <br></br>
					Pelas blasfêmias; pela profanação dos dias santos: <br></br>

Perdão, Senhor, perdão. <br></br>
					Pelas impurezas e escândalos: <br></br>
Perdão, Senhor, perdão. <br></br>
					Pelos furtos e injustiças, pelas debilidades e respeitos 
					humanos: <br></br>
Perdão, Senhor, perdão. <br></br>
					Pelas desobediências a Santa Igreja:<br></br>
Perdão, Senhor, perdão. <br></br>
					Pelos crimes dos esposos, as negligências dos pais e as 
					faltas dos filhos:<br></br>
Perdão, Senhor, perdão. <br></br>
					Pelos atentados contra o Romano Pontífice: 
Perdão, Senhor, perdão. <br></br>
					Pelas perseguições levantadas contra os bispos, sacerdotes, 
					religiosos e sagradas virgens:<br></br>
Perdão, Senhor, perdão. <br></br>
					Pelos insultos a vossas imagens, profanação dos templos, 
					abuso dos Sacramentos e ultrajes ao Augusto Tabernáculo:<br></br>
					
Perdão, Senhor, perdão. <br></br>
					Pelos crimes da imprensa ímpia e blasfema, e pelas horrendas 
					maquinações das seitas tenebrosas: <br></br>
Perdão, Senhor, perdão. <br></br>
					Pelos justos que vacilam, pelos pecadores que resistem a 
					graça, e por todos os que sofrem: Piedade, Senhor, 
					piedade!  <br></br>

					Perdão, Senhor, e piedade pelo mais necessitado de vossa 
					graça; que a luz de vossos divinos olhos não se aparte 
					jamais de nós; perdão pelos nossos inconstantes corações; 
					dai-nos a sentir algo do calor divino de vosso peito, e que 
					nossas almas se derretam de amor e arrependimento. Amém
					</p>

<h3>
					Oração Reparadora ao Santíssimo Sacramento 
					</h3>
					<h4><i>
Para 
					ser rezada na primeira sexta-feira de cada mês, diante do 
					Santíssimo Sacramento exposto.  
					</i></h4>
					<p>
					Divino Salvador Jesus! 

					Dignai-vos baixar um olhar de misericórdia sobre vossos 
					filhos, que reunidos em um mesmo pensamento de Fé, Reparação 
					e Amor, vêm chorar a vossos pés suas infidelidades e a de 
					seus irmãos, os pobres pecadores!  
					</p>
					<p>
					Possamos nós, pelas promessas unânimes e solenes que vamos 
					fazer, tocar o vosso divino Coração, e dele alcançar 
					misericórdia para o mundo infeliz e criminoso e para todos 
					aqueles que não têm a felicidade de vos amar!  
					</p>
					<p>
Daqui 
					por diante, sim, todos nós vo-lo prometemos:  
					</p>
					<p>
Do 
					esquecimento e da ingratidão dos homens, <br></br>
Nós vos consolaremos, Senhor! <br></br>
					Do abandono em que sois deixado no santo Tabernáculo, <br></br>
Nós vos consolaremos, Senhor! <br></br>
					Dos crimes dos pecadores, <br></br>
Nós vos consolaremos, Senhor! <br></br>
					Do ódio dos ímpios,<br></br> 
Nós vos consolaremos, Senhor! <br></br>
					Das blasfêmias que se vomitam contra vós, <br></br>
Nós vos consolaremos, Senhor! <br></br>
					Das injúrias feitas à vossa divindade, <br></br>
Nós vos consolaremos, Senhor! <br></br>
					Dos sacrilégios com que se profana o vosso Sacramento de
					amor, <br></br>
Nós vos consolaremos, Senhor! <br></br>
					Das imodéstias e irreverências cometidas em vossa presença 
					adorável, <br></br>
Nós vos consolaremos, Senhor! <br></br>
					Da tibieza do maior número de vossos filhos, <br></br>
Nós vos consolaremos, Senhor! <br></br>
					Do desprezo que se faz de vossos convites cheios de amor,<br></br>
					
Nós vos consolaremos, Senhor! <br></br>
					Das infidelidades daqueles que se dizem vossos amigos, <br></br>
Nós vos consolaremos, Senhor! <br></br>
					Do abuso de vossas graças, <br></br>
Nós vos consolaremos, Senhor! <br></br>
					De nossas próprias infidelidades, <br></br>
Nós vos consolaremos, Senhor! <br></br>
					Da incompreensível dureza de nossos corações, <br></br>
Nós vos consolaremos, Senhor! <br></br>
					De nossa longa demora em vos amar, <br></br>
Nós vos consolaremos, Senhor! <br></br>
					De nossa frouxidão em vosso santo serviço, <br></br>
Nós vos consolaremos, Senhor! <br></br>
					Da amarga tristeza em que sois abismado pela perda das 
					almas, <br></br>
Nós vos consolaremos, Senhor! <br></br>
					Do vosso longo esperar às portas de nossos corações, <br></br>
Nós vos consolaremos, Senhor! <br></br>
					Das amargas repulsas de que sois saciado, <br></br>
Nós vos consolaremos, Senhor! <br></br>
					De vossos suspiros de amor, <br></br>
Nós vos consolaremos, Senhor! <br></br>
					De vossas lágrimas de amor, <br></br>
Nós vos consolaremos, Senhor! <br></br>
					De vosso cativeiro de amor, <br></br>
Nós vos consolaremos, Senhor! <br></br>
					De vosso martírio de amor, <br></br>
Nós vos consolaremos, Senhor!  
</p>
<h4>
					Oração:
					</h4>
					<p>
Divino 
					Salvador Jesus, que de vosso Coração deixastes escapar esta 
					queixa dolorosa: "Eu procurei consoladores e não os 
					achei", dignai-vos aceitar o pequeno tributo de nossas 
					consolações e assistir-nos tão poderosamente com o socorro 
					de vossa graça que, para o futuro, fugindo cada vez mais de 
					tudo o que vos poderia desagradar, nos mostremos em tudo, 
					por toda a parte e sempre, vossos filhos, os mais fiéis e 
					devotados. <br></br>
Nós 
					vo-lo pedimos por vós mesmo, que sendo Deus, com o Pai e o 
					Espírito Santo, viveis e reinais nos séculos dos séculos. 
					Amém. 
					 </p>

 
 <h3>
					Oração a Jesus Solitário 


					no Santíssimo Sacramento 
					</h3>
		<p>
Oh! 
					Divino Jesus! que durante a noite estais solitário em tantos 
					tabernáculos do mundo, sem que nenhuma de vossas criaturas 
					vá visitá-Lo e adorá-Lo. <br></br>
					Eu vos ofereço meu pobre coração, desejando que todas as 
					suas pulsações sejam de amor e adoração. <br></br>
Vós, 
					Senhor, estais sempre sob as espécies Sacramentais, vosso 
					amor misericordioso nunca dorme nem se cansa de velar pelos 
					pecadores.  
					</p>			
					<p>			
Oh! 
					Jesus amantíssimo!, Oh! Jesus solitário!, fazei meu coração 
					qual lâmpada acessa; em caridade se inflame e arda sempre em 
					vosso amor. <br></br>
Velai 
					Oh! sentinela Divino!, velai pelo mísero mundo, pelos 
					sacerdotes, pelas almas consagradas, as extraviadas, pelos 
					pobres enfermos cujas noites intermináveis necessitam de 
					vossa fortaleza e vosso consolo, pelos moribundos e por este 
					vosso humilde servo que, para melhor servir-vos, descansa 
					mas sem deixar pensar em Vós, em vosso Sacrário... onde 
					vives na solidão e no silêncio da noite.  
					</p>			
					<p>			
					Seja sempre bendito, glorificado, adorado, amado e 
					reverenciado o Coração Sagrado de Jesus em todos os 
					Sacrários do mundo. 
					Amém. 
					</p>				  
 

<h3>
					Oração Reparadora ensinada em Fátima.
					</h3>


<h4>
					(Revelada pelo Anjo em 1917) 
					</h4>
					<p>
1 -  Meu Deus, eu 
creio, adoro, espero e amo-Vos. Peço-Vos perdão para os que não crêem, não 
adoram, não esperam e não Vos amam.   
</p>
<p>
2 - 

					Santíssima Trindade, Pai, Filho, Espírito Santo, adoro-Vos 
					profundamente e ofereço-Vos o Preciosíssimo Corpo, Sangue, 
					Alma e Divindade de Jesus Cristo, presente em todos os 
					sacrários da Terra, em reparação dos ultrajes, sacrilégios e 
					indiferenças com que Ele mesmo é ofendido. E pelos méritos 
					infinitos do Seu Santíssimo Coração e do Coração Imaculado 
					de Maria, peço-Vos a conversão dos pobres pecadores. 
					</p>
					 
					<h3>
					Terço do Santíssimo Sacramento 
					</h3>
					<p>
Rezar 
					diante do Santíssimo Sacramento ou de uma imagem do Sagrado 
					Coração de Jesus  
					</p>
<h4>
Contas grandes:
</h4>
<p>
Anuncia-se 
					o Mistério. 
					</p>
					<h4>
					Reza-se nas dez contas pequenas: 
					</h4>	
					<p>
					Bendito e louvado seja o Santíssimo Sacramento da 
					Eucaristia, o fruto do ventre sagrado da Virgem puríssima.
					 </p>

					<p>
					Segue-se a Jaculatória e a Oração.  
					</p>
					<h4>
					Primeiro Mistério:  
					</h4>
					<p>
					Contemplamos como Nosso Senhor Jesus Cristo desceu do seio 
					de Seu eterno Pai para vir ao mundo e livrar-nos com Sua 
					morte santíssima da escravidão do pecado, e abrir-nos as 
					portas do céu.  
					</p>
					<h4>
					Jaculatória:
					</h4>
					<p>
Oh! 
					Jesus, Deus de bondade, da paz e Autor da vida, enchei 
					nossos corações de divino amor! 
					</p>
					<h4>
					Oração:
					</h4>
					<p>
					Santíssimo Jesus, pela infinita caridade com que quisestes 
					sofrer a fraqueza humana para o nosso bem e nossa 
					felicidade, nós Vos pedimos o perdão de nossas culpas e um 
					amor para Convosco que abrase nosso coração de tal sorte que 
					só procuremos a Vossa honra e a Vossa glória.  
					</p>

					<h4>
					Segundo Mistério:  
					</h4>
					<p>
					Contemplamos como Nosso Senhor Jesus Cristo nasceu no 
					presépio de Belém, desprezado, pobre e desconhecido para nos 
					merecer o céu e ensinar-nos a desprezar as riquezas da terra 
					e procurar só as do céu.  
					</p>
					<h4>
					Jaculatória: 
					</h4>
					<p>
Oh! 
					Jesus Divino, nossa vida, nosso amor, enchei o nosso 
					espírito de um verdadeiro fervor.  
					</p>
					<h4>
					Oração:
					</h4>
					<p>
Oh! 
					Bondade infinita do meu Jesus, de infinita caridade e 
					sabedoria, com que quisestes nascer sobre a terra, 
					experimentando logo as tiranias do cego mundo para assim 
					ensinardes aos Vossos escolhidos e lhes conseguirdes a 
					felicidade eterna, nós Vos pedimos que purifiqueis nossos 
					corações do vil interesse por honras e riquezas caducas e os 
					orneis dos puros sentimentos de que é dotado o Vosso, para 
					que assim, desprezando tudo o que é terreno, só a Vós 
					louvemos e amemos. Amém.  
					</p>

			<h4>
					Terceiro Mistério:
					 </h4>
					<p>
					Contemplamos como Nosso Senhor Jesus Cristo na noite da Ceia 
					instituiu este Sacramento de amor, repartindo entre seus 
					discípulos, com Suas próprias mãos, o Seu Santíssimo Corpo, 
					para os confortar e encher de amor e santidade.  
					</p>
					<h4>
					Jaculatória:
					</h4><p>
Bom 
					Jesus, nós Vos louvamos no sacramento do Amor; sede sempre 
					para nós um compassivo Senhor!  
					</p>
					<h4>
					Oração: 
					</h4>
					<p>
					Santíssimo Jesus e Bom Pastor de nossas almas, pela infinita 
					caridade com que Vos quisestes deixar sacramentado para 
					nosso socorro, amparo e consolação, nós vos pedimos que não 
					consintais que nossos corações tenham amor e interesse mais 
					do que a Vossa honra e a Vossa glória. Amém.  
					</p>
					<h4>
					Quarto Mistério:
					 </h4>
<p>
					Contemplamos como Nosso Senhor Jesus Cristo, justamente no 
					dia em que instituiu o sacramento augusto de Seu Santíssimo 
					Corpo, foi ofendido pelo pérfido Judas, que não temeu 
					recebê-lo indignamente.  
					</p><h4>
					Jaculatória: </h4><p>
Bom 
					Jesus, sejais Bendito, pois sois nossa Redenção; sois toda a 
					nossa ventura, nosso amparo e nossa consolação.  
					</p><h4>
					Oração:
					</h4>
<p>
					Santíssimo Jesus, Mestre de paciência e bondade, pela 
					mansidão e pelo sofrimento consentistes que Vosso indigno 
					discípulo Vos recebesse sacrilegamente. <br></br>

					Pedimos que não permitais que nós, pecadores, sem a cândida 
					estola da graça Vos recebamos, mas antes, enchei-nos de uma 
					grande pureza e perfeita caridade, para termos o prazer de 
					muitas vezes comungar e louvar-Vos. Amém.  
					</p>
<h4>
					Quinto Mistério:
					 </h4><p>

					Contemplamos como Nosso Senhor Jesus Cristo, depois de Sua 
					Ressurreição, apareceu a Seus discípulos confirmando-os na 
					fé e nas verdades do Reino eterno, prometendo-lhes mandar 
					sobre eles o Divino Espírito Santo, para os encher de todas 
					as virtudes.  
					</p><h4>
					Jaculatória:
					</h4><p>

					Coração misericordioso de Jesus, tende misericórdia de nós!
					 </p>
<h4>
					Oração:
					</h4><p>
Oh! 
					Bom Jesus, pelo inefável mistério da vinda do Espírito Santo 
					sobre Vossos apóstolos e discípulos, nós Vos pedimos que 
					sejam cheias as nossas almas de Vossas santíssimas luzes, 
					para acertarmos o caminho reto de Vos servir e amar, a fim 
					de termos a felicidade de sempre Vos louvar sobre a terra, e 
					reinar Convosco no céu, por todos os séculos. Amém. 
					</p>
					<h3>
					Terço diante do Santíssimo Sacramento 
					</h3>
					
<h4>
Nas 
					contas grandes:
					</h4>				
					<p>
					"Oh! Coração Eucarístico de Jesus, por aquela chama de amor 
					na qual ardeste no momento solene, no qual vos deste a todos 
					nós, na Santíssima Eucaristia, humildemente vos suplicamos 
					que vos digneis livrar-nos incólumes de todo poder, laço, 
					engano e malvadeza dos espíritos infernais. Amém!
					 </p>
<h4>
Nas 
					contas pequenas:
					</h4>				
			<p>
					"Coração Eucarístico de Jesus, livrai-nos cada vez mais, das 
					insídias de satanás".
					 </p>

					<h4>
					Oração Final:
					</h4>
					<p>
"Jesus 
					Ressuscitado, eu creio que está vivo diante dos meus olhos 
					na Hóstia consagrada. <br></br>
					Creio também, Jesus no Seu poder contra toda a espécie de 
					mal, porque você venceu, pela Sua Morte e Ressurreição, o 
					pecado e a morte. <br></br>
Seu 
					preciosíssimo Sangue derramado na cruz está presente da 
					Hóstia Santa. <br></br>
					Eu creio Jesus, e clamo que este Sangue seja agora derramado 
					sobre mim e sobre todos os meus familiares. <br></br>
Eu 
					peço Senhor Jesus, que pelo Sangue libertador e salvífico, 
					possamos nos livrar de toda opressão diabólica, que possa 
					estar prejudicando a nossa família. <br></br>
Peço 
					também que atenda, em especial este pedido que agora faço na 
					Sua Presença (apresente aqui o seu pedido...). <br></br>
Eu 
					desde já agradeço, confiante que Você me atenderá. <br></br>

Eu vos 
					louvo ó Pai por ter nos dado você, Jesus, como presente de 
					Páscoa. <br></br>
Eu 
					agradeço de coração ao Espírito Santo que me ilumina e me 
					conduz nos momentos de sofrimento e escuridão. <br></br>
Muito 
					obrigado, Jesus, meu Salvador e libertador". <br></br>

					Pai-Nosso, Ave-Maria e Glória ao Pai. 
					 </p>

					<h3>
					Novena ao Santíssimo Sacramento  


					Adoração Eucarística I
					</h3>

					 


					 

					<h4>
					Orações Preparatórias para todos os dias
					</h4>
					<p>
					Bendito e amado seja o Santíssimo Sacramento do Altar, e a 
					Imaculada Conceição de Maria Santíssima, Mãe de Deus e 
					Senhora nossa, concebida sem pecado original no primeiro 
					instante de seu ser. Amém.  
					</p>
					<h4>
					Ato de contrição.
					</h4>
					<p>
					Dulcíssimo Jesus Sacramentado, em quem creio, em quem 
					espero, a quem adoro e amo sobre todas as coisas; Cheio da 
					mais viva dor de ter-vos ofendido, recorro a vossos pés e 
					presença santíssima, conhecendo que tenho pecado diante do 
					céu e contra Vos, e por ser quem sois, Bondade infinita, me 
					pesa uma e mil vezes de ter-vos ofendido.  
					</p>
					<p>
					Recebei, Senhor, a contrição de meus pecados, e aumentai e 
					tornai perfeita, para que seja firme o propósito que tenho 
					de nunca mais voltar a ofender-vos, e de me confessar 
					devidamente. E em reconhecimento da vossa misericórdia, 
					espero que me conceda a vossa graça, quero dedicar-me a 
					vosso serviço no Santíssimo Sacramento, onde os amarei e 
					bendirei por toda a minha vida. Amém.  
					</p>
					<p>
					Rezar a Oração do dia que corresponda.  
					</p>	
					<h4>
					Primeiro Dia
					 </h4>
					<p>
					Soberano e eterno Deus, em cuja presença estão cheios de 
					respeito os mais altos Serafins; e maravilhados de vossa 
					infinita grandeza não fazem mais que repetir: Santo, Santo, 
					Santo;<br></br> 
					Que haveis querido encerrar na Sagrada Eucaristia todas 
					vossas perfeições:<br></br> 

					Digna-vos receber em sinal de meu agradecimento todas as 
					adorações que vos deram e dão todos os espíritos 
					bem-aventurados desde sua criação, e todos os santos desde 
					que entraram em vossa glória, e as que vos dão e darão todas 
					as criaturas desde o princípio do mundo por toda a 
					eternidade; Vos peço humildemente que, ilumineis minha alma 
					com uma fé muito viva, para que conhecendo vossas finezas no 
					Santíssimo Sacramento, sejam tributados continuas ações de 
					graças e a mais profunda adoração. Amém.  
					</p>
					<p>
					Rezar seis Pai Nossos, seis Ave-Marias e seis Glórias ao 
					Santíssimo. <br></br>

					Terminar com as orações finais.  
					</p>
					<h4>
					Segundo Dia
					 </h4>
					<p>
					Soberano Senhor e Rei eterno, que, estando no céu a direita 
					do Pai como universal Imperador, e Senhorio sobre todos os 
					Santos, e espíritos bem-aventurados, cantando-vos perpétuas 
					adorações, e reconhecendo-vos por verdadeiro Rei e Senhor, 
					quisestes humilhar-vos no Santíssimo Sacramento do altar, 
					encobrindo toda vossa grandeza, vos suplico com a maior 
					humildade venha a minha alma, como poderoso Rei; Destruas 
					todos meus inimigos, que são meus vícios, e imprimas 
					firmemente vossas divinas leis, e prometo ser-vos fiel, 
					obedecer-vos e adorar-vos em espírito e verdade por toda 
					minha vida. Amém.  
					</p>
					<p>
					Rezar seis Pai Nossos, seis Ave-Marias e seis Glórias ao 
					Santíssimo. <br></br>
					
					Terminar com as orações finais.  
					</p>
					<h4>
					Terceiro Dia
					 </h4>
					<p>
					Dulcíssimo Senhor e vigilante Pastor de minha alma, que não 
					contente em ter-me buscado e levado sobre vossos ombros como 
					ovelha perdida, quisestes dar-vos no Santíssimo Sacramento, 
					para dar-vos em alimento as fiéis ovelhas e que comessem a 
					mesma carne, e bebessem o precioso sangue de vosso sagrado 
					corpo, cumprindo desta maneira e com excelência os ofícios 
					de verdadeiro Pastor, fazei que arrependido já de ter-vos 
					feito trabalhar em buscar-me, por ter fugido de Vos tantas 
					vezes, de aqui em diante me deixe guiar e governar por vossa 
					graça, e apascentada minha alma com tão divino manjar, 
					jamais volte a cair nas garras da fera péssima da culpa. 
					Amém.  
					</p>
					<p>
					Rezar seis Pai Nossos, seis Ave-Maria e seis Glórias ao 
					Santíssimo. <br></br>

					Terminar com as orações finais.  
					</p>
					<h4>
					Quarto Dia
					</h4>
					<p>
					Amabilíssimo Senhor e Jesus meu, que quisestes dar a 
					conhecer vossa misericórdia chamando-vos Médico e para que 
					sarássemos de todas as enfermidades de nossa alma os 
					dignastes deixar na Igreja a preço sa medicina de vossa 
					própria carne e sangue : Compadece-vos Médico divino de 
					todos meus males. <br></br>
Olhai 
					Senhor, que faz muitos anos que os padeço; mas se vós 
					quereis, podeis neste instante mesmo limpar-me de toda minha 
					lepra: vejo interiormente aquele e piedoso gesto com que 
					sarastes ao leproso; e sarou também a enferma do fluxo de 
					sangue, tocando o vosso manto, sare eu de todas as minhas 
					culpas, recebendo dignamente vossa carne, e ganhe assim a 
					saúde para sempre. Amém.  
					</p>
					<p>
					Rezar seis Pai Nossos, seis Ave-Maria e seis Glórias ao 
					Santíssimo. <br></br>

					Terminar com as orações finais.  
					</p>
					<h4>
					Quinto Dia
					</h4>
					<p>
					Sapientíssimo Senhor e Mestre de minha alma, que depois de 
					ter falado tantas vezes e de tantas maneiras a vosso antigo 
					povo por meio dos profetas quisestes falar e ensinar por Vos 
					mesmo aos filhos da Igreja, estabelecendo vossa perpétua 
					cátedra no Santíssimo Sacramento, onde como verdadeiro monte 
					de Deus e casa de Jacó convidais a todos para que os ouçam, 
					comunicando os tesouros de sabedoria e ciência que em Vos se 
					encerram; apiedai-vos, o dulcíssimo Mestre meu, de minha 
					rudeza e ignorância, e digna-vos comunicar a meu 
					entendimento luz para que aprenda a cumprir vossos 
					mandamentos, ensinando-me ao mesmo tempo a conhecer Vos e a 
					conhecer me, para que em tudo sempre execute vossa divina 
					vontade. Amém.  
					</p>
					<p>
					Rezar seis Pai Nossos, seis Ave-Marias e seis Glórias ao 
					Santíssimo. <br></br>

					Terminar com as orações finais.  
					</p>
					<h4>
					Sexto Dia
					</h4>
					<p>
					Onipotente Senhor e Pai amabilíssimo, que sendo dono 
					universal de toda a criação tem tanto amor aos homens, que 
					os adotais por filhos, e quereis que o sejam e se chamem 
					assim, preparando-lhes na mesa divina o pão do céu para seu 
					alimento: Despertando minha alma do pecado em que há vivido, 
					me apresento a vossa soberana presença, qual se fosse aquele 
					e pródigo do Evangelho recorro a Vos confiando que sois meu 
					Pai, ainda que tenha perdido tantas vezes a preço Sua 
					qualidade de filho vosso. <br></br>
Oh! se 
					pudesse dar uma voz de verdadeira dor aos meus pecados, que 
					penetrando os céus se ouviriam por todas partes que tive 
					pecado contra meu bom Pai! 
					Humildemente vos peço me perdoeis, e me recebais em vossa 
					graça, admitindo-me ao convite de vosso divino Sacramento, 
					para permanecer nele até o fim de minha vida. Amém. 
					 </p>
					<p>
					Rezar seis Pai Nossos, seis Ave-Marias e seis Glórias ao 
					Santíssimo. <br></br>

					Terminar com as orações finais.  
					</p>
					<h4>
					Sétimo Dia
					</h4>
					<p>
					Benigníssimo Senhor e hóspede divino de minha alma, que 
					sendo os céus curto espaço para vossa grandeza, gostais de 
					hospedar-vos na pobre casa de meu coração, e para salvar-me 
					haveis querido dar-vos no Santíssimo Sacramento, digna-vos, 
					Senhor, que assim como enriquecestes a Rainha dos Anjos, 
					Maria Santíssima com inumeráveis graças e dons, porque a 
					escolhestes para morada vossa, derraméis sobre mim as 
					riquezas de vossas misericórdias para que, sendo eu templo 
					vosso, possa receber vos dignamente, e conservar sempre em 
					mim a santidade que necessito. Amém.  
					</p>
					<p>
					Rezar seis Pai Nossos, seis Ave-Marias e seis Glórias ao 
					Santíssimo. <br></br>

					Terminar com as orações finais.  
					</p>
					<h4>
					Oitavo Dia
					</h4>
					<p>
					Começar com as orações preparatórias para todos os dias. <br></br>
					Deus e Senhor enamorado das almas, já que tanto nos 
					assegurais que tendes todas as delícias em estar com os 
					homens, e em sinal de tanta fineza dissestes a os Apóstolos 
					depois de haver-lhes dado a Comunhão : " já não os chamarei 
					servos, mas sim amigos meus "; <br></br>
E vós 
					mesmo dissestes deste Sacramento a todos os cristãos que os 
					recebem dignamente. <br></br>
					Por esta amizade, Senhor, vos peço que exciteis em meu 
					coração os mais vivos afetos de amor e de ternura para que 
					não ame outra coisa senão a Vos, nem pense em outra coisa 
					mas que em visitar-vos e adorar-vos, agradando-me sempre com 
					o trato de tão bom Amigo, até que goze de vossa clara visão 
					na glória. Amém.  
					</p>
					<p>
					Rezar seis Pai Nossos, seis Ave-Maria e seis Glórias ao 
					Santíssimo. <br></br>

					Terminar com as orações finais.  
					</p>
					<h4>
					Nono Dia
					</h4>
					<p>
					Começar com as orações preparatórias para todos os dias. <br></br>
					Dulcíssimo Jesus Sacramentado, que haveis querido na Sagrada 
					Eucaristia assinalar-vos com os títulos de maior consolo 
					para nós, querendo também que neste mistério vos 
					reconheçamos por Esposo fiel e amante de nossas almas; fazei 
					Senhor, que eu corresponda a tanta fineza, e que me prepare 
					com as vestiduras nupciais para assistir dignamente a tão 
					santo casamento, e poder celebrar depois eternamente na 
					glória. Amém.  
					</p>
					<p>
					Rezar seis Pai Nossos, seis Ave-Marias e seis Glórias ao 
					Santíssimo. <br></br>

					Terminar com as orações finais.  
					</p>
					<h4>
					Orações finais para todos os dias
					</h4>

					<h4>
					Adoração.
					</h4>
					<p>
Vós 
					sois meu Deus, e vos confessarei sempre neste Santíssimo 
					Sacramento. <br></br>
					Vós sois meu Deus, e vos exaltarei. <br></br>
Os 
					confessarei sempre, porque os haveis dignado ouvir minhas 
					súplicas neste lugar de propiciação. <br></br>

					Glorificarei vosso santo NOME eternamente, porque assim 
					manifestais sobre mim vossa misericórdia. <br></br>
Vós 
					sois Deus, e não há outro fora de Vos. <br></br>
					Vos Santo, sois Senhor, e sois Altíssimo. <br></br>
					Vos esplendor do Pai e figura de sua substância.<be></be> 
					Iluminai meu entendimento e abrasai meu coração com vosso 
					divino amor. 
					</p>

					<p>
Fazer 
					aqui o pedido que se deseja alcançar com a novena. 
					 </p>

					<h4>
					Propósitos. 
					</h4>
					<p>
Fazer 
					um exame de consciência, para descobrir todas as vezes que 
					participou da comunhão em estado de pecado, e pedir a Deus 
					perdão por receber o Próprio Deus com a alma em pecado. <br></br>
					Meditar nas vezes em que não teve o devido respeito perante 
					o Real Corpo de Cristo na Hóstia Consagrada. <br></br>
Fazer 
					um firme propósito de adorar Jesus Sacramentado de todo o 
					coração e de todo o entendimento. Procurar arrancar da vida 
					todas as ocasiões de pecado para viver na graça de Deus. 
					Fazer uma boa confissão antes de receber o Corpo e Sangue de 
					Jesus.  
					</p>
					<h4>	
					Oração. 
					</h4>
					<p>
					Dulcíssimo Jesus Sacramentado, que obrigado por vossa 
					infinita caridade quisestes enriquecer a Igreja com o 
					preciosíssimo tesouro de vosso Corpo e Sangue para ser na 
					Eucaristia o Rei que nos governa, Pastor que nos dirige, 
					Médico que nos ama, Hóspede que nos enriquece, Amigo que nos 
					consola, e Esposo que nos faz felizes para sempre; Fazei, 
					Senhor, que eu consiga neste Sacramento tão singulares 
					misericórdias, e que reconhecendo nele vossa real presença, 
					corra a adorar-vos freqüentemente em Espírito de verdade 
					para desagravar-vos do sofrimento que padeceis nas Igrejas, 
					e para recompensar as injúrias que recebeis dos infiéis e 
					hereges, e dos maus cristãos com suas comunhões sacrílegas.
					 </p>
					<p>
E já 
					que são tão pobres meus afetos, eu vos ofereço todas as 
					adorações que vos tributam os bem-aventurados, e as 
					adorações que os dei na terra, e vos está dando no céu a 
					Rainha dos Anjos Maria Santíssima. <br></br>

					Recebei-me, Senhor, por perpétuo escravo vosso, e fazei com 
					que eu vos adore com reverência,e no céu continue a dar-vos 
					adorações, pedindo-vos que socorrais as necessidades em que 
					se encontra a Santa Igreja, e que olheis com perpétua 
					misericórdia para este vosso católico povo.  
					</p>
					<p>
					Destruí as heresias, convertei aos pecadores e aperfeiçoai 
					aos justos. Abri, Senhor, vossa mão generosíssima, e 
					compadecido de minhas necessidades espirituais e temporais, 
					dai-me o remédio que em tudo necessito, que, santificado com 
					vossa graça, vos adore por todos os séculos na glória. Amém.
					 </p>
					<p>
Oh! 
					sacrifício e hóstia salutar <br></br>
					Que as portas do céu nos sejam abertas! <br></br>
					A luta nos oprime formidavelmente; <br></br>
					Todo nosso favor e esforço sejam para defesa de vossa 
					glória. <br></br>
V. 
					Nos destes, Senhor, o Pão do céu. <br></br>
					R. Que encerra em sem todo deleite.  <br></br>
					</p>
					<h4>
					Oração Final: 
					</h4>
					<p>
Oh! 
					Deus, que nos desejaste a memória de tua Paixão neste 
					admirável Sacramento; concedei-nos que de tal sorte 
					veneremos os sagrados mistérios de teu corpo e sangue, que 
					experimentemos continuamente em nós o fruto de tua redenção.<br></br>
					
Que 
					vives e reinas com Deus Pai em unidade do Espírito Santo, 
					Deus por todos os séculos dos séculos. Amém. 
					 </p>

					<h3>
					Ladainha de Reparação 
					

					à Nosso Senhor na Eucaristia
					</h3>
					<h4>
					Para uso particular somente 
					</h4>
					<p>
					Senhor, tende piedade de nós. <br></br>
Jesus Cristo, tende piedade de nós. <br></br>
Senhor, tende piedade de nós.  <br></br>
</p>
<p>
					Cristo, ouvi-nos. <br></br>
Cristo, Benignamente ouvi-nos. <br></br>
Deus Filho, Redentor do mundo,tende piedade de nós.		<br></br>			
Santa Trindade, um só Deus,tende piedade de nós. <br></br>
 </p>
<p>

					Sagrada Hóstia, oferecida pela salvação dos pecadores, 
					tende piedade de nós. <br></br>
Sagrada Hóstia, adornada no altar para nós e por nós, 
					tende piedade de nós. <br></br>
Sagrada Hóstia, depreciada pelos cristãos tíbios, 
					tende piedade de nós. <br></br>
Sagrada Hóstia, sinal de contradição, tende piedade 
					de nós. <br></br>
Sagrada Hóstia, entregada aos judeu e hereges, tende 
					piedade de nós. <br></br>
Sagrada Hóstia, insultada pelos blasfemadores, tende 
					piedade de nós. <br></br>
Sagrada Hóstia, Pão dos Anjos, dado aos animais, 
					tende piedade de nós. <br></br>
Sagrada Hóstia, atirada no lodo e pisoteada, tende 
					piedade de nós. <br></br>
Sagrada Hóstia, desonrada pelos sacerdotes infiéis, 
					tende piedade de nós. <br></br>
Sagrada Hóstia, abandonada em tuas Igrejas. Tende 
					piedade de nós. <br></br>
					</p>
					<p>
Sede misericordioso com nós, Perdoai-nos, Oh! Senhor.<br></br>
					
Sede misericordioso o com nós, escutai-nos, Oh! 
					Senhor.  <br></br>
					</p>
					<p>
Pelo 
					ultrajante desapreço deste maravilhoso Sacramento, te 
					oferecemos nossa reparação <br></br>
Por tua extrema humilhação em teu admirável Sacramento,
					te oferecemos nossa reparação <br></br>
					Por todas as comunhões indignas, te oferecemos nossa 
					reparação <br></br>
Pelas irreverências dos maus cristãos, te oferecemos 
					nossa reparação <br></br>
Pela profanação de teus santuários, te oferecemos 
					nossa reparação <br></br>
Pelas comunhões roubadas e levadas a força, te 
					oferecemos nossa reparação <br></br>
					Pelas continuas blasfêmias dos homens ímpios, te 
					oferecemos nossa reparação <br></br>
Pela impertinência e traição dos hereges, te 
					oferecemos nossa reparação <br></br>
Pelas conversas indignas em teus santos templos, te 
					oferecemos nossa reparação <br></br>
Pelos profanadores de tuas Igrejas, e os que as tem 
					profanado com seus sacrilégios, te oferecemos nossa 
					reparação  <br></br>
					</p>
					<p>
Para 
					aumentar em todos os cristãos a reverência devida a este 
					adorável mistério,te oferecemos nossa reparação Te 
					suplicamos, ouvi-nos. <br></br>
Para manifestar o Sacramento de teu amor a os hereges,
					Te suplicamos, ouvi-nos. <br></br>
Para que os insultos daqueles que te ultrajam sejam mais 
					dirigidos até nós, Te suplicamos, ouvi-nos. <br></br>
					Para que misericordiosamente receba esta nossa humilde 
					reparação, Te suplicamos, ouvi-nos. <br></br>
Para conceder que nossa adoração seja aceitável a Vós,
					Te suplicamos, ouvi-nos.  <br></br>
					</p>
					<p>
Hóstia 
					Pura, escutai nossa oração. <br></br>
Hóstia Santa, escutai nossa oração. <br></br>
Hóstia Imaculada, escutai nossa oração. <br></br>
</p>
<p>
					Cordeiro de Deus, que tirais os pecados do mundo, 
					perdoai-nos, Oh! Senhor. <br></br>
Cordeiro de Deus, que tirais os pecados do mundo, 
					benignamente ouvi-nos, Oh! Senhor. <br></br>
Cordeiro de Deus, que tirais os pecados do mundo, tem 
					misericórdia de nós.  <br></br>
					</p>
					<p>
					Senhor, tem piedade de nós. <br></br>
Cristo, tem piedade de nós.  <br></br>
</p>
<p>
V. 
					Olhai, Oh! Senhor, nossa aflição, <br></br>
					R. E sejam dadas Glória a teu Santo Nome. <br></br>
					 </p>

					<h4>
					Oremos:
					 </h4>
					<p>
Senhor 
					Jesus Cristo, que te dignas permanecer com nós em teu 
					maravilhoso Sacramento até o final do mundo, para dar-vos a 
					teu Pai, pela memória de tua paixão, Glória eterna, e para 
					dar-Vos a nós, o Pão da vida eterna: Concedei-nos a graça de 
					chorar, com corações cheios de dor, pelas as injúrias que 
					Vós tem recebido neste mistério adorável, e pelos muitos 
					sacrilégios que cometem os ímpios, os hereges e os 
					católicos. Inflamai-nos com desejo ardente de reparar todos 
					estes insultos aos que, em tua infinita misericórdia, tens 
					preferido expor-vos antes que privar-nos de tua Presença em 
					nossos altares. <br></br>
Vós, 
					que com Deus Pai e o Espírito Santo Vives e Reinas, um só 
					Deus, pelos séculos dos séculos. Amém 
					 </p>


					<h3>
					LADAINHA DO SANTÍSSIMO SACRAMENTO
					</h3>
					<h4>
Poderá 
					ser rezada às 2ª, 3ª, 4ª e 5ª Feiras 
					 </h4>
					<p>

					Senhor, 
					tende piedade de nós. <br></br>
Jesus 
					Cristo, 
					tende piedade de nós. <br></br>

					Senhor, 
					tende piedade de nós. <br></br>
					 </p>
					<p>
Jesus 
					Cristo, 
					ouvi-nos. <br></br>
Jesus 
					Cristo, 
					atendei-nos. <br></br>
					</p>
					<p>
Deus 
					Pai do Céu, 
					tende piedade de nós. <br></br>
Deus 
					Filho, Redentor do mundo, 
					tende piedade de nós. <br></br>
Deus 
					Espírito Santo, 
tende 
					piedade de nós. <br></br>

					Santíssima Trindade que sais um só Deus, tende piedade de nós.  
					 </p>
					<p>
Jesus, 
					Deus e homem presente no Santíssimo Sacramento do Altar,
					
tende 
					piedade de nós. <br></br>
Pão 
					Vivo, que descestes do Céu, 
tende 
					piedade de nós. <br></br>
Deus, 
					escondido e Salvador,... <br></br>

					Sacrifício perene do Novo Testamento,... <br></br>

					Sacrifício de todos mais digno,... <br></br>

					Verdadeiro Propiciatório por vivos e defuntos,... <br></br>


					Cordeiro Imaculado de Deus, ... <br></br>
Resumo 
					das maravilhas de Deus,... <br></br>

					Comemoração da sagrada paixão de Nosso Senhor e 
					Salva­dor,... <br></br>
Hóstia 
					Santa,... <br></br>
Cálice 
					de benção,... <br></br>

					Mistério da Fé,... <br></br>
Pão 
					dos Anjos,...<br></br>

					Vínculo de paz e caridade,... <br></br>

					Celeste antídoto, que nos preserva dos pecados,... <br></br>

Fonte 
					de todas as graças,... <br></br>

					Consolo dos aflitos,... <br></br>

					Remédio dos enfermos,... <br></br>

					Viático dos que morrem no Senhor,... <br></br>
Penhor 
					seguro da glória futura,...<br></br>
					 </p>
					<p>
					Sede-nos propício, 
					perdoai-nos, Senhor. <br></br>

					Sede-nos propício, 
					atendei-nos, Senhor. 
					 </p>
					<p>
Da 
					recepção indigna do vosso Corpo e Sangue, livrai-nos, Senhor. <br></br>
Da 
					comunhão tíbia, 
					livrai-nos, Senhor. <br></br>
Da 
					concupiscência da carne, 
					livrai-nos, Senhor. <br></br>
Da 
					concupiscência dos olhos, 
					livra i-nos, Senhor. <br></br>
Da 
					soberba da vida, 
					livrai-nos, Senhor. <br></br>
De 
					toda ocasião de pecar, 
					livrai-nos, Senhor. <br></br>
Da 
					morte eterna, 
					livrai-nos, Senhor. <br></br>
Por 
					Vossa Santa Encarnação, 
					livrai-nos, Senhor. <br></br>
Por 
					Vossa Sagrada Paixão e Morte, 
					livrai-nos, Senhor. <br></br>
Pelo 
					ardente desejo com que desejastes comer a Páscoa com vossos 
					Apóstolos, 
					livrai-nos, Senhor. <br></br>
Pela 
					humildade, com que lavastes os pés dos Vossos Apósto­los, livrai-nos, Senhor. <br></br>
Pelo 
					ardentíssimo amor com que instituístes este Divino 
					Sa­cramento, 
					livrai-nos, Senhor. <br></br>
Pelo 
					Sangue Precioso, que no sacramento do Altar nos deixastes, 
					livrai-nos, Senhor. <br></br>
Pelas 
					cinco sacratíssimas Chagas, que no Vosso Corpo recebestes 
					por nosso amor, 
					livrai-nos, Senhor. <br></br>
 
Ainda 
					que pecadores, 
					ouvi-nos, Senhor. <br></br>

					Dignai-vos de aumentar e conservar em nós a Fé, reverência e 
					devoção a este admirável Sacramento, 
					ouvi-nos, Senhor. <br></br>

					Dignai-vos de nos dispor para um santo e freqüente uso da 
					Sagrada Escritura pela sincera confissão dos nossos 
					peca­dos, ouvi-nos, Senhor.<br></br> 

					Dignai-vos de nos fazer colher os celestiais e preciosos 
					frutos deste Santíssimo Sacramento, 
					ouvi-nos, Senhor. <br></br>

					Dignai-vos de nos salvar de toda heresia, perfídia e 
					cegueira espiritual, 
					ouvi-nos, Senhor. <br></br>
Que 
					vos digneis de confortar-nos e fortalecer-nos na hora da 
					morte com este celestial viático, 
					ouvi-nos, Senhor. <br></br>
Filho 
					Eterno, verdadeiro Deus, 
					ouvi-nos, Senhor. 
					 </p>
					<p>
					Cordeiro de Deus, que tirais o pecado do mundo, perdoai-nos, Senhor. <br></br>

					Cordeiro de Deus, que tirais o pecado do mundo, ouvi-nos, Senhor. <br></br>

					Cordeiro de Deus, que tirais o pecado do mundo, tende compaixão de nós, Senhor. 
					 </p>
					<p>
D. Vós 
					lhes destes um Pão vindo do Céu. <br></br>
T. 
					Pão, que encerra todas as delícias. 
					 </p>
					<p>
D.
					Oremos: <br></br>
Ó Deus, que neste admirável, Sacramento nos conservastes a 
					memória de vossa Paixão, dai-nos a graça de reverenciar de 
					tal modo o Mistério Sagrado de Vosso Corpo e Sangue, que 
					experimentemos perenemente em nós os frutos da Redenção; Vós 
					que viveis e reinais por todos os séculos. <br></br>

T. 
					Assim seja. 
					 </p>


					 
 
                </p>
                </div>
            </div>
        );
    }
}

export default Sacramento;