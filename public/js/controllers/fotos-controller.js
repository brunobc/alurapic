angular.module('alurapic').controller('FotosController', function ($scope, $http, $log) {
	$scope.fotos = [];

	$http.get('v1/fotos')
	.success(function (data) {
		$scope.fotos = data;
		$log.info(data);
	}).error(function(erro) {
		$log.error(erro);
	});
});