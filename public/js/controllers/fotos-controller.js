angular.module('alurapic').controller('FotosController', function ($scope, $http, $log) {
  $scope.fotos = [];

  $http.get('v1/fotos')
  .success(function (data) {
    $scope.fotos = data;
    $log.info(data);
  }).error(function(erro) {
    $log.error(erro);
  });

  $scope.submeter = function () {
    $http.post('/V1/fotos', $scope.foto)
    .success(function() {
      console.log('Foto add');
      $scope.mensagem = 'Foto cadastrada com sucesso';
    })
    .error(function(erro) {
      console.log('Não foi possível cadastrar');
      $scope.mensagem = 'Não foi possível cadastrar a foto';
    })

  };

});