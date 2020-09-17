/*
PROJ_2020: AVAL. Tecnol. Internet (I) 
Aluno num. 19452, Tomás Colaço

******* LISTA DE FUNÇÕES DE PARSING *******






*/


// ********** variáveis públicas **********
// Caminho para o ficheiro onde se encontra a informação remetente aos carros
var PATH = "../hCarros/"

// ********* processos de parsing *********

// NIVEL 1 ********************************
/** 
 * Numero de carros
 * @returns {number}
 */
var numCarros = () => hiperCarros.colecao.length-1

/**
 *  Título da apresentação
 * @returns {string} 
 */
var tituloApres = () => hiperCarros.titulo;

// NIVEL 2 ********************************
/**
 * Subtítulo da apresentação
 * @param {number} iSec
 */
var subtituloApres = iSec => hiperCarros.introd[iSec].subtitulo

/**
 * Numero de subtitulos da apresentação
 */
var numSubApres = () => hiperCarros.introd.length

/**
 * Teor de um parágrafo de uma secção da apresentação
 * @param  {number} iSec
 * @param  {number} iParag
 */
var paragTextoApres = (iSec,iParag) => hiperCarros.introd[iSec].texto[iParag]
 
/**
 * Número de parágrafos da apresentação
 * @param {number} iSec 
 */
var numParagApres = iSec => hiperCarros.introd[iSec].texto.length

/**
 * Marca/modelo de um carro
 * @param {number} iCarros 
 */
var marcaModeloCarros = iCarros => hiperCarros.colecao[iCarros].marcaModelo

/**
 * Versão de um carro
 * @param {number} iCarros 
 */
var versaoCarros = iCarros => hiperCarros.colecao[iCarros].versao

/**
 * Numero de imagens do carro
 * @param {number} iCarros 
 */
var numImagensCarros = iCarros => hiperCarros.colecao[iCarros].imags.length

/**
 * Endereço da imagem do carro
 * @param {number} iCarros 
 * @param {number} iImagem 
 */
var pathFotoCarros = (iCarros,iImagem) => PATH + hiperCarros.colecao[iCarros].imags[iImagem]

/**
 * Numero de paragrafos descritivos do carro
 * @param {number} iCarros 
 */
var numParagsTextoCarros = iCarros => hiperCarros.colecao[iCarros].texto.length


/**
 * Teor de um parágrafo descritivo de um carro
 * @param {number} iCarros 
 * @param {number} iParag 
 */
var paragTextoCarros = (iCarros,iParag) => hiperCarros.colecao[iCarros].texto[iParag]


// NIVEL 3 ********************************
/**
 * Numero de links relativos ao carro
 * @param {number} iCarros 
 */
var numLinksCarros = (iCarros) => hiperCarros.colecao[iCarros].links.length

/**
 * Texto de um conector web relativo a um carro
 * @param {number} iCarros 
 * @param {number} iLink 
 */
var conectorLinksCarros = (iCarros,iLink) => hiperCarros.colecao[iCarros].links[iLink].conector

/**
 * URL de um conector web relativo a um carro
 * @param {number} iCarros 
 * @param {number} iLink 
 */
var urlLinkCarros = (iCarros,iLink) => hiperCarros.colecao[iCarros].links[iLink].url

/**
 * Index dos especs do carro
 * @param {number} iSec 
 * @param {number} agr 
 */
var especsCarros = (iSec,agr) => hiperCarros.colecao[iSec].especs[agr]
