var bookly = bookly || {};

bookly.bookApp = angular.module("bookApp", []);

bookly.BooksController = function($scope) {
  // load books. They are defined in data.js (we've got no back end yet!)
  $scope.books = books;

  $scope.addBook = function(book) {
    $scope.books.push(book);
    $scope.book ={};
  };

  //Code to manage cart goes here

};
