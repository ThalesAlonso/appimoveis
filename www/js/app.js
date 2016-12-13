

angular.module('starter', ['ionic', 'ngCordova', 'starter.controllers', 'starter.services'])

  // urls utilizadas nos meus services
  .constant("apiUrl",(function() {
    var resource = 'http://ticarpa.com.br/demo/imoveis/';
    
   
    //var gutil = require('gulp-util');

 

    return {
      //Note que desta vez inseri o filtro na aplicacao
      RETORNA_IMOVEIS: resource + "api/imovels?filter=:filtro",
      RETORNA_IMOVEL: resource + "api/imovel/:id"
    }
  })())

  //Metodo de inicio da aplicacao.
.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
  
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

  //Configuracao das rotas
.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
  

    //Rota inicial apontando para o menu 
    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

    //Rota para pagina home
  .state('app.home', {
    url: '/home',
    views: {
      'menuContent': {
        templateUrl: 'templates/home.html'
      }
    }
  })

  //Rota para pagina Valida Cep 
  .state('app.validaCep', {
    url: '/validaCep',
    views: {
      'menuContent': {
        templateUrl: 'templates/validaCep.html',
        controller: 'cepCtrl'
      }
    }
  })

    //Rota para lista de imoveis
   .state('app.imoveis', {
      url: '/imoveis',
      views: {
        'menuContent': {
          templateUrl: 'templates/imoveis.html',
          controller: 'ImoveisCtrl'
        }
      }
    })

    //Rota para o detalhe do imovel. 
  .state('app.imovel', {
    url: '/imovel/:id',
    views: {
      'menuContent': {
        templateUrl: 'templates/imovel.html',
        controller: 'ImovelCtrl'
      }
    }
  })

// efeitos
 .state('app.efeitos', {
   url: '/efeitos',
   views: {
     'menuContent': {
       templateUrl: 'templates/efeitos.html',
       controller: 'AppEfeito'
     }
   }
 })






// Rota Google Maps 
  $stateProvider
  .state('app.map', {
    url: '/map',
    views : {
      "menuContent" : {
        templateUrl: 'templates/map.html',
        controller: 'MapCtrl'
      }
    }
    
  });

 
 // $urlRouterProvider.otherwise("/");

   
  // Quando entrar na aplicacao ou der algum erro redirecionara para esta rota
  $urlRouterProvider.otherwise('/app/home');
  // /app/map
});
