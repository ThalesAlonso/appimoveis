//Inicio o modulo de servico utilizando o ngResource para as chamadas http
angular.module('starter.services', ['ngResource'])

    //Realiza busca de imoveis
    .factory('ImoveisService', function ($resource, apiUrl) {
      return $resource(apiUrl.RETORNA_IMOVEIS, {}, {
        query: { method: 'GET'}
      })
    })

    //Realiza a busca do imovel
    .factory('ImovelService', function ($resource, apiUrl) {
      return $resource(apiUrl.RETORNA_IMOVEL, {}, {
        show: { method: 'GET' }
      })
    });




