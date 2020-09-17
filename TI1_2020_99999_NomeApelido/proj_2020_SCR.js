/*
PROJ_2020: AVAL. Tecnol. Internet (I) 
Aluno num. 19452, Tomás Colaço

********** LISTA DE FUNÇÕES **********

inic()
load




*/


// ********** variáveis públicas **********


// ************ inicialização *************
var inic = () => {
    loadInterface();
    loadContent();
}

// ************** processos ***************


// ************* input/output *************
/** Carrega os elementos html para o objecto da interface. */
var loadInterface = () => {
    //objecto da interface
    interface={};
    //mainContainer
        //frontPage
            interface.frontCarros=document.getElementById("frontCarros");
            interface.frontTexto=document.getElementById("frontTexto");

        // interf.cxCarros=document.getElementById("cxCarros");
            // interf.tituloCarros=document.getElementById("tituloCarros");
            // interf.imgCarros=document.getElementById("imgCarros");
            //scroll
                //button-frontpage
                //button-previous
                interf.selectCarros=document.getElementById("listaCarros");
                //button-next
            //definicao
                // interf.specs1=document.getElementById("specs1");
                // interf.specs2=document.getElementById("specs2");
            // interf.imagensCarros=document.getElementById("imagensCarros");            
    
    // interf.selecCarros=document.getElementById("selecCarros");
    // interf.bioCarros=document.getElementById("bioCarros");
    
}

  /**Carrega o conteudo para interface */
function loadContent(){
    //Apresentação
	carregaFontPage();

    //carrega as opçoes na lista de opçoes com o nome do carro,Select listaCarros que esta no div
	carregaListaCarros();
	
	//mostra a vista do carro (DIV "cxCarro"), escondendo a vista da introduçao
	voltaCarros();
  }

/** Carrega na interface os elementos da página inicial.*/
function carregaFontPage(){
	frontCarrosConteudo();
    frontTextoConteudo();
}

/** Carrega os carros a serem demonstrados na página inicial */
function frontCarrosConteudo(){
    //variaveis necessarias ao ciclo for e string onde o código é concatenado.
    var i, htmlCode='', n = numCarros();

    //Cada elemento carro para selecionar
	for(i=0; i<=n; i++){
        htmlCode+='<div class="selector" onclick="mostraCarros(' + i + ')">';
        htmlCode+='<img class="imgMiniCarro" src="' + pathFotoCarros(i,0) + '"/>';
        htmlCode+=marcaModeloCarros(i)+' - '+versaoCarros(i)
        htmlCode+='</div>';
    }
    //Coloca o codigo html gerado no elemento da interface 
	interface.frontCarros.innerHTML = htmlCode;
}

/** Carrega o texto no formato da apresentação*/
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

function carregaListaCarros(){
    //variaveis necessarias aos ciclos for e string onde o código é concatenado.
    var i, nomeCarro, htmlCode='', n = numCarros();
    //ciclo for que carrega as opções necessarias para o elemento select 
	for(i = 0; i <= n; i++){
		nomeCarro=marcaModeloCarros(i)+' - '+versaoCarros(i);
		htmlCode+='<option>'+nomeCarro +'</option>';
	}
	interf.selectCarros.innerHTML = htmlCode;
}