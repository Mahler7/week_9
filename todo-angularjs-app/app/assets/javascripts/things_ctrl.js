(function() {
  "use strict";

  angular.module("app").controller("thingsCtrl", function($scope){
    $scope.message = "How do ya do?"

    $scope.review1 = "Angular is great"
    $scope.review2 = "This is dumb, try React!!!"
    $scope.review3 = "What else can this thing do?"

    $scope.reviews = [
       {
       text: "Angular is great",
       reviewer: "Jack Johnson",
       rating: 5
    }, {
      text: "This is dumb, try React!!!",
      reviewer: "Janis Joplin",
      rating: 2
    }, {
      text: "What else can this thing do?",
      reviewer: "Jason Jones",
      rating: 4,
    }];

    $scope.addReview = function(reviewText,reviewReviewer, reviewRating){
      var newReview = {
        text: reviewText, 
        reviewer: reviewReviewer, 
        rating: reviewRating
      };

      $scope.reviews.push(newReview);

      $scope.newReviewText = null;
      $scope.newReviewReviewer = null;
      $scope.newReviewRating = null;
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

    $scope.deleteTask = function(index) {
      $scope.tasks.splice(index, 1)
    };

    window.scope = $scope;

  });


}());