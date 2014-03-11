var bookly = bookly || {};

bookly.bookApp = angular.module("bookApp", []);

bookly.BooksController = function($scope) {
  // load books. They are defined in data.js (we've got no back end yet!)
  $scope.books = books;

  //Code to manage cart goes here
  $scope.cart = [];
  // $scope.qty = 0;

  $scope.addToCart = function(index) {
    var cart = $scope.cart;
    var book = $scope.books[index];
    if (cart.indexOf(book) >= 0) {
      cart[cart.indexOf(book)].count += 1;
    }
    else {
      cart.push(book);
      cart[cart.indexOf(book)].count = 1;
    }
    // $scope.cart.push(book);
    // $scope.qty += 1;
  };

  $scope.totalPrice = function() {
    var total = 0;
    for (i=0;i<$scope.cart.length;i++) {
      total += ($scope.cart[i].price) * ($scope.cart[i].count);
    }
    return total;
  };

  $scope.emptyCart = function() {
    $scope.cart = [];
  };



};
