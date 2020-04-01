var app = angular.module("rokket", ["ngRoute"]);

app.config(function($routeProvider) {
  $routeProvider
    .when("/", {
      templateUrl: "views/overview.html",
      controller: "defaultController"
    })
    .when("/products", {
      templateUrl: "views/products.html",
      controller: "productsController",
      activetab: "products"
    });
});

app.controller("defaultController", function($scope) {
  $scope.overview = "Overview";
  $scope.blueCan = "./images/greenCan.png";
});

app.directive("appheader", function() {
  return {
    template:
      '<header><nav class="navbar navbar-expand-lg navbar-light bg-white"><div class="container"><a class="nav-link" href="#/!"><img class="logo" src="../images/loggoBig.png" /></a><button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"><i class="fas fa-bars"></i></span> </button><div class="collapse navbar-collapse" id="navbarNav"><ul class="navbar-nav"><li class="nav-item active"><a class="nav-link" href="#/!">Home<span class="sr-only">(current)</span></a></li> <li class="nav-item"><a class="nav-link" href="#!products">Products</a></li></div></div></nav></header>'
  };
});

// Products

app.controller("productsController", function($scope) {
  $scope.products = [
    {
      image: "greenCan.png",
      title: "Space taste",
      text: "Cu putent senserit eos. Lorem on ipsum dolor sit amet, an vim evertitur referrentur."
    },
    {
      image: "blueCan.png",
      title: "Earth taste",
      text: "Cu putent senserit eos. Lorem on ipsum dolor sit amet, an vim evertitur referrentur."
    }
  ];
});
