/*
PROJ_2020: AVAL. Tecnol. Internet (I) 
Aluno num. 19452, Tomás Colaço

********** LISTA DE FUNÇÕES **********

inic()
load




*/


// ********** variáveis públicas **********
var interface, idCarroApresentado;

// ************ inicialização *************
function inic() {
    loadInterface();
    carregaFrontPage();
}

// ************** processos ***************


// ************* input/output *************
/** Carrega os elementos html para o objecto da interface. */
function loadInterface() {
    //objecto da interface
    interface={};
    //mainContainer
        interface.frontPage=document.getElementById("frontPage");
            interface.frontCarros=document.getElementById("frontCarros");
            interface.frontTexto=document.getElementById("frontTexto");
        //backPage
        interface.backPage=document.getElementById("backPage");
            //carroInfo
                interface.carroModelo=document.getElementById("carroModelo");
                interface.carroImagem=document.getElementById("carroImagem");
                //navegador
                    //button-frontpage
                    //button-previous
                    interface.selectCarros=document.getElementById("selectCarros");
                    //button-next
                //definicao
                    interface.specs=document.getElementById("specs");
                    interface.carroTexto=document.getElementById("carroTexto");
            interface.carroImagens=document.getElementById("carroImagens");            
    
    // interf.selecCarros=document.getElementById("selecCarros");
    // interf.bioCarros=document.getElementById("bioCarros");
    
}

/** Carrega na interface os elementos da página inicial.*/
function carregaFrontPage(){
	frontCarrosConteudo();
    frontTextoConteudo();
    escondeBackPage();
}

/** Carrega os carros a serem demonstrados na página inicial.*/
function frontCarrosConteudo(){
    //variaveis necessarias ao ciclo for e string onde o código é concatenado.
    var i, htmlCode='', n = numCarros();

    //Cada elemento carro para selecionar
	for(i=0; i<=n; i++){
        htmlCode+='<div class="selector" onclick="carregaBackPage(' + i + ')">';
        htmlCode+='<img class="imgMiniCarro" src="' + pathFotoCarros(i,0) + '"/>';
        htmlCode+=marcaModeloCarros(i)+' - '+versaoCarros(i)
        htmlCode+='</div>';
    }
    //Coloca o codigo html gerado no elemento da interface 
	interface.frontCarros.innerHTML = htmlCode;
}

/** Carrega o texto no formato da apresentação.*/
function frontTextoConteudo(){
    //variaveis necessarias aos ciclos for e string onde o código é concatenado.
    var iSec, iParag, htmlCode = '', nSecs = numSubApres(), nParags;
    //Titulo da apresentação
    htmlCode+='<h1>' + tituloApres() + '</h1>';
    // Cada subtitulo e e seus componenetes
    for(iSec=0; iSec < nSecs; iSec++){
        //Subtitulo
        htmlCode +='<h2>' + subtituloApres(iSec) + '</h2>';
        
        //Carrega o numero de paragrafos desta secção da apresentação
        nParags = numParagApres(iSec);
        
        //Cada paragrafo
        for(iParag=0; iParag < nParags; iParag++){
            
            htmlCode+='<p class="parApres">'+paragTextoApres(iSec,iParag)+'</p>';
        }
    }
    //Coloca o codigo html gerado no elemento da interface 
    interface.frontTexto.innerHTML= htmlCode;
}

/** Apresenta frontpage e esconde a backpage.*/
function escondeBackPage(){
    //ofusca backpage
    interface.backPage.style.display="none";
    //apresenta frontpage
    interface.frontPage.style.display="block";
    //reposiciona janela
	window.scrollTo(0,0);
}

/** Apresenta a backpage com o id do carro selecionado na frontpage
 * @param {number} iCarros index do carro
 */
function carregaBackPage(iCarros){
    //idCarroApresentado = 0;
    //esconde frontpage e apresenta backpage
    escondeFrontPage();
    //apresenta a marca/modelo do carro
	interface.carroModelo.innerHTML=marcaModeloCarros(iCarros)+' - '+versaoCarros(iCarros);
    //apresenta a primeira imagem do carro
    mostraCarroImagem(iCarros,0);
    //carrega conteudo do navegador para a interface
    carregaNavegador();
    //sincroniza a lista de opções de carros
    idCarroApresentado = iCarros; 
    //muda o index que o selector apresenta
    interface.selectCarros.selectedIndex = idCarroApresentado;
    //apresenta as specs + links
    interface.specs.innerHTML = divCarroSpecs(iCarros) + divCarroLinks(iCarros);
    //apresenta o texto
    interface.carroTexto.innerHTML = divCarroTexto(iCarros);
    //apresenta as imagens do carro as escolher no div carroImagens
	interface.carroImagens.innerHTML=divImagensCarro(iCarros);
	
}

/** Apresenta a backpage e esconde a frontpage */
function escondeFrontPage(){
    //apresenta backpage
    interface.backPage.style.display="block";
    //ofusca frontpage
    interface.frontPage.style.display="none";
    //reposiciona janela
	window.scrollTo(0,0);
}

/** Apresenta a imagem grande do carro.
 * @param {number} iCarros index do carro
 * @param {number} iImagem index da imagem do carro 
 */
function mostraCarroImagem(iCarros,iImagem){
	interface.carroImagem.innerHTML = '<img class="imgCarros" src="'+pathFotoCarros(iCarros,iImagem)+'" />';
}

/** Carrega os elementos do navegador e as respectivas opções*/
function carregaNavegador(){
    //variaveis necessarias aos ciclos for e string onde o código é concatenado.
    var i, nomeCarro, htmlCode='', n = numCarros();
    //ciclo for que carrega as opções necessarias para o elemento select 
	for(i = 0; i <= n; i++){
		nomeCarro = marcaModeloCarros(i)+' - '+versaoCarros(i);
		htmlCode += '<option>'+nomeCarro +'</option>';
	}
	interface.selectCarros.innerHTML = htmlCode;
}

/** Carrega e apresenta as especificações do carro em questão.
 * @param {*} iCarros index do carro
 */ 
function divCarroSpecs(iCarros){
    //estrutura da tabela onde sao apresentados os dados
	var htmlCode='<div class="specs">';
            htmlCode+='<div class="tema">ano de lançamento</div>';
            htmlCode+='<div class="spec">'+especsCarros(iCarros, 'ano')+'</div>';
            htmlCode+='<div class="tema">motorização</div>';
            htmlCode+='<div class="spec">'+especsCarros(iCarros, 'tipoMot')+'</div>';
            htmlCode+='<div class="tema">cilindrada</div>';
            htmlCode+='<div class="spec">'+especsCarros(iCarros, 'cil')+' cc</div>';
            htmlCode+='<div class="tema">potência máxima</div>';
            htmlCode+='<div class="spec">'+especsCarros(iCarros, 'pot')+' cv, às ';
            htmlCode+=especsCarros(iCarros, 'rotPot') + ' rpm</div>';
            htmlCode+='<div class="tema">binário máximo</div>';
            htmlCode+='<div class="spec">'+especsCarros(iCarros, 'bin')+' Nm, às ';
            htmlCode+=especsCarros(iCarros, 'rotBin') + ' rpm</div>';
            htmlCode+='<div class="tema">velocidade máxima</div>';
            htmlCode+='<div class="spec">'+especsCarros(iCarros, 'vel')+' km/h</div>';
            htmlCode+='<div class="tema">aceleração máxima</div>';
            htmlCode+='<div class="spec">'+especsCarros(iCarros, 'acel')+' seg, de 0 a 100 km/h</div>';
            htmlCode+='<div class="tema">dimensões</div>';
            htmlCode+='<div class="spec">'+especsCarros(iCarros, 'comp')+' x ';
            htmlCode+=especsCarros(iCarros, 'larg')+' x ';
            htmlCode+=especsCarros(iCarros, 'alt')+' mm</div>';
            htmlCode+='<div class="tema">peso</div>';
            htmlCode+='<div class="spec">'+especsCarros(iCarros, 'peso')+' kg</div>';
            htmlCode+='</div>';
	return htmlCode;
}

/** Carrega e apresenta os links especificos ao carro
 * @param {number} iCarros index do carro
 */
function divCarroLinks(iCarros){
    //variaveis necessarias ao ciclo for e string onde o código é concatenado.
    var i, htmlCode = '', n=numLinksCarros(iCarros);
    //cada elemento link
	for(i=0; i<n; i++){
		htmlCode+='<div class="webLinks">';
		htmlCode+='<a class="link" href="'+ urlLinkCarros(iCarros,i) + '" target="_blank">';
		htmlCode+=conectorLinksCarros(iCarros,i);
		htmlCode+='</a></div>';
	  }
	return htmlCode;
}

/** Carrega e apresenta o texto descritivo do respectivo carro
 * @param {number} iCarros index do carro
 */
function divCarroTexto(iCarros){
    //variaveis necessarias ao ciclo for e string onde o código é concatenado.
    var i,htmlCode ='',n=numParagsTextoCarros(iCarros);
    //cada elemento paragrafo
	for(i=0; i<n; i++){
        htmlCode+='<p class="parApres">'+paragTextoCarros(iCarros,i)+'</p>';
	  }
	return htmlCode;
}

/** Carrega e apresenta a lista de imagens que podem ser selecionadas para o carro
 * @param {number} iCarros 
 */
function divImagensCarro(iCarros){
    //variaveis necessarias ao ciclo for e string onde o código é concatenado.
	var i, args, htmlCode='', n = numImagensCarros(iCarros);
        //cada elemento imagem do carro
        for(i=0; i<n; i++){
            //argumentos necessarios á função
			args=iCarros+', '+i;
			htmlCode+='<div class="divImagensCarro" onclick="mostraCarroImagem('+args+')">';
			htmlCode+='<img class="ftCarros" src="'+pathFotoCarros(iCarros,i)+'" />';
			htmlCode += '</div>';
		}
	return htmlCode;
}