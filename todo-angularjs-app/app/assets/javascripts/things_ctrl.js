(function() {
  "use strict";

  angular.module("app").controller("thingsCtrl", function($scope){
    $scope.message = "How do ya do?"

    $scope.review1 = "Angular is great"
    $scope.review2 = "This is dumb, try React!!!"
    $scope.review3 = "What else can this thing do?"

    $scope.reviews = ["Angular is great", "This is dumb, try React!!!", "What else can this thing do?"]

    $scope.addReview = function(review){
      $scope.reviews.push(review);
    };

    $scope.todos = ["Pet cat", "Pet dog", "Feed chicken"];

    $scope.addTask = function(task){
      console.log(task);
      if (task != undefined && task != "") {
        $scope.todos.push(task);
        $scope.newTask="";
      }
    };

    
    $scope.removeTask = function(){
      $scope.todos.pop();
    };

    window.scope = $scope;

  });



}());