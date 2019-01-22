var app = angular.module('fran502', ['ngAnimate', 'ngRoute', 'ui.bootstrap']);

app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "/projet/views/acceuil.html"
    })
    .when("/Catherine", {
        templateUrl : "/projet/views/catherine.html"
    })
    .when("/Rachel", {
        templateUrl : "/projet/views/rachel.html"
    })
    .when("/Sandra", {
        templateUrl : "/projet/views/sandra.html"
    })
    .when("/Ryleigh", {
        templateUrl : "/projet/views/ryleigh.html"
    })
    .when("/Pamela", {
        templateUrl : "/projet/views/pamela.html"
    })
    .when("/Francesca", {
        templateUrl : "/projet/views/francesca.html"
    })
    .when("/Anna", {
        templateUrl : "/projet/views/anna.html"
    })

});



app.controller('ctrl', function($scope, $window, $uibModal, $location) {
  $scope.model = {
    navVisible: false,
    apprenants:  [{title:"Catherine", link:"#!Catherine"}, {title:"Rachel", link:"#!Rachel"}, {title:"Sandra", link:"#!Sandra"}, {title:"Pamela", link:"#!Pamela"}, {title:"Francesca", link:"#!Francesca"}, {title:"Ryleigh", link:"#!Ryleigh"}, {title:"Anna", link:"#!Anna"}]
  }
  $scope.nav_toggle = function(){
    $scope.model.navVisible = !$scope.model.navVisible;
  }
  $scope.nav_off = function(){
    $scope.model.navVisible = false;
  }



  $scope.openModal = function(url) {
    $scope.model.modalInstance = $uibModal.open({
       templateUrl: url,
       scope: $scope
     });
  }

  $scope.closeModal = function() {
    $scope.model.modalInstance.close();
  }

});


app.directive("clickElsewhere", function($document) {
  return {
	restrict: 'A',
	link: function(scope, elem, attr, ctrl) {
		elem.bind('click', function(e) {
			e.stopPropagation();
		});

		$document.bind('click', function() {
			scope.$apply(attr.clickElsewhere);
		});
	}
  };
});
