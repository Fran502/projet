var app = angular.module('fran502', ['ngAnimate', 'ngRoute', 'ui.bootstrap']);

app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "/views/acceuil.html"
    })
    .when("/Catherine", {
        templateUrl : "/views/catherine.html"
    })
    .when("/Rachel", {
        templateUrl : "/views/rachel.html"
    })
    .when("/Sandra", {
        templateUrl : "/views/sandra.html"
    })
    .when("/Ryleigh", {
        templateUrl : "/views/ryleigh.html"
    })
    .when("/Pamela", {
        templateUrl : "/views/pamela.html"
    })
    .when("/Francesca", {
        templateUrl : "/views/francesca.html"
    })
    .when("/Anna", {
        templateUrl : "/views/anna.html"
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

  $scope.enterAndScroll = function(section) {

    $location.path('/2018/acceuil');
    $timeout( function(){
      var someElement = angular.element(document.getElementById(section));
      $document.duScrollToElementAnimated(someElement);
    }, 250 );
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
