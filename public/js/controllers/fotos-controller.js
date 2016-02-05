angular.module('alurapic').controller('FotosController', function ($scope, $http, $log, $routeParams) {
  $scope.fotos = [];
  $scope.foto = {};

  $scope.mensagem = '';

  $http.get('v1/fotos')
  .success(function (data) {
    $scope.fotos = data;
    $log.info(data);
  }).error(function(erro) {
    $log.error(erro);
  });

  if($routeParams.fotoId) {
    $http.get('/v1/fotos/' + $routeParams.fotoId)
    .success(function(foto) {
      $scope.foto = foto;
    })
    .error(function(erro) {
      console.log(erro);
      $scope.mensagem = 'Não foi possível obter a foto'
    });
  }

  $scope.submeter = function() {

    if ($scope.formulario.$valid) {

      if($routeParams.fotoId) {

        $http.put('/v1/fotos/' + $scope.foto._id, $scope.foto)
        .success(function() {
          $scope.mensagem = 'Foto alterada com sucesso';

        })
        .error(function(erro) {
          console.log(erro);
          $scope.mensagem = 'Não foi possível alterar';
        });

      } else {
        $http.post('/v1/fotos', $scope.foto)
        .success(function() {
          $scope.foto = {};
          $scope.mensagem = 'Foto cadastrada com sucesso';
        })
        .error(function(erro) {
          console.log(erro);
          $scope.mensagem = 'Não foi possível cadastrar a foto';
        })
      }
    }
  };

  $scope.remover = function(foto) {
    $http.delete('/v1/fotos/' + foto._id)
    .success(function() {
      var indiceDaFoto = $scope.fotos.indexOf(foto);
      $scope.fotos.splice(indiceDaFoto, 1);
      $scope.mensagem = 'Foto ' + foto.titulo + ' removida com sucesso!';
    })
    .error(function(erro) {
      console.log('Não foi possível apagar a foto ' + foto.titulo);
      $scope.mensagem = 'Não foi possível apagar a foto ' + foto.titulo;
    });
  };

});