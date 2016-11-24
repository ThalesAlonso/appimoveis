angular.module('starter.controllers', [])


  //Controle padrao da app
  .controller('AppCtrl', function($scope) {

  })

  //Controle para lista de imoveis
  .controller('ImoveisCtrl', function ($rootScope, $stateParams, $scope, ImoveisService) {
    //Campo de busca de imoveis
    $scope.textoBusca = "";

    //Realizo a limpeza do campo e busco de novo
    $scope.limparBusca = function () {
      $scope.textoBusca = "";
      $scope.imoveis = ImoveisService.query();
    }

    //Realizo a busca passando o texto da busca
    $scope.buscar = function () {
      $scope.imoveis = ImoveisService.query({filtro: $scope.textoBusca});
    }

    //Caso nao seja selecionado a busca este sera o metodo padrao de busca
    $scope.imoveis = ImoveisService.query();
  })

  //Controle referente ao detalhe do imovel
  .controller('ImovelCtrl', function($scope, $stateParams, ImovelService, $cordovaSocialSharing) {

    //Metodo da busca de imovel padrao
    $scope.imovel = ImovelService.show({id: $stateParams.id});
  })




  //Controle cep 
.controller('cepCtrl',function($scope,$http, $ionicPopup, $ionicLoading){

  $scope.cep = '';

  $scope.buscarCep = function() {

   $ionicLoading.show({
      template: 'Carregando...'
    });

    $http.get('https://viacep.com.br/ws/' +  $scope.cep + '/json/')
    .then(function(response) {

      $scope.endereco = response.data;
      $ionicLoading.hide();

    },
    function(error) {
      $ionicLoading.hide();
      var alertPopup = $ionicPopup.alert({
        title: 'CEP Inválido',
        template: 'Verifique e tente novamente.'
      });
    })
  };

})

// Controller do Google Maps



.controller('MapCtrl', function($scope, $state, $cordovaGeolocation) {
  var options = {timeout: 10000, enableHighAccuracy: true};
 
  $cordovaGeolocation.getCurrentPosition(options).then(function(position){
 
    var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
 
    var mapOptions = {
      center: latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
 
 //debugger
    $scope.map = new google.maps.Map(document.getElementById("map"), mapOptions);
     console.log("ok");
 
  }, function(error){
    console.log("Could not get location");
  });
}), 

google.maps.event.addListenerOnce($scope.map, 'idle', function(){
 
  var marker = new google.maps.Marker({
      map: $scope.map,
      animation: google.maps.Animation.DROP,
      position: latLng
  });      

  var infoWindow = new google.maps.InfoWindow({
      content: "Here I am!"
  });
 
  google.maps.event.addListener(marker, 'click', function () {
      infoWindow.open($scope.map, marker);
  });
 

});
