angular.module('minhasDiretivas', [])
.directive('meuPainel', function() {

  var ddo = {};

  ddo.restrict = "AE";
  ddo.transclude = true;

  ddo.scope = {
    titulo: '@'
  };

  ddo.templateUrl = 'js/directives/meu-painel.html';

  return ddo;
})
.directive('minhaFoto', function () {
  var ddo = {};

  ddo.restrict = "AE";
  ddo.scope = {
    url: '@',
    titulo: '@'
  }

  ddo.templateUrl = 'js/directives/minha-foto.html';

  return ddo;
})
.directive('meuBotaoPerigo', function () {
  var ddo = {};

  ddo.restrict = "AE";
  ddo.scope = {
    nome: '@',
    acao: '&'
  };

  ddo.template = '<button class="btn btn-danger btn-block" ng-click="acao()">{{nome}}</button>';

  return ddo;

})
.directive('meuFocus', function () {
  var ddo = {};
  ddo.restrict = "A";
  /*ddo.scope = {
    focado = "="
  };*/

  ddo.link = function (element, scope) {
    element.$on('fotoCadastrada', function () {
      scope[0].focus();
      console.log('focus');
    });

    /*scope.watch('focado', function() {
      if (scope.focado) {
        element[0].focus();
        scope.focado = false;
      }
    });*/
  };

  return ddo;
})
.directive('minhaCharada', function() {
  var ddo = {};
  ddo.restrict = 'E';
  ddo.scope = {
    test: '@'
  };
  ddo.template = '<p>{{test}}</p>';

  return ddo;
});