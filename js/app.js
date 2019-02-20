var app = angular.module('fran502', ['ngAnimate', 'ngRoute', 'ui.bootstrap',  'slickCarousel', 'duScroll']);

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
    sticky: false,
    apprenants:  [{title:"Catherine", link:"#!Catherine"}, {title:"Rachel", link:"#!Rachel"}, {title:"Sandra", link:"#!Sandra"}, {title:"Pamela", link:"#!Pamela"}, {title:"Francesca", link:"#!Francesca"}, {title:"Ryleigh", link:"#!Ryleigh"}, {title:"Anna", link:"#!Anna"}],
    slides: [{id:0, src:"./styling/img/anna/sheep0.jpeg"}, {id:1, src:"./styling/img/anna/sheep1.jpg"}, {id:2, src:"./styling/img/anna/sheep2.jpg"}]
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

  angular.element($window).bind("scroll", function () {
        var fromTop = $window.pageYOffset;
        elem = angular.element( document.querySelector( '.sticky-nav' ));
        if(fromTop > 150) {
          elem.addClass('sticky')
        }
        else {
          elem.removeClass('sticky')
        }
  });

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
