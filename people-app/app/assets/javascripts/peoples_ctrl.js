(function(){
  "use strict";

  angular.module("app").controller("peoplesCtrl", function($scope, $http){

    $scope.setup = function(){
      $http.get('/api/v1/people.json').then(function(response){
        $scope.people = response.data;
      });
      $scope.descending = false; 
    };
    
    $scope.peoples = [
    {
    name: "Homer",
    bio: "Homer likes donuts",
    bioVisible: false
  },{
    name: "Lisa",
    bio: "Likes saxamaphone",
    bioVisible: false
  },{
    name: "Bart",
    bio: "Aycarumba",
    bioVisible: false
  },{
    name: "Maggie",
    bio: "This is indeed a disturbing universe",
    bioVisible: false
  },{
    name: "Marge",
    bio: "Long Blue Hair",
    bioVisible: false
  }];

  $scope.addPeoples = function(iname, ibio, ibioVisible){
    var newPeoples = {
      name: iname,
      bio: ibio,
      bioVisible: ibioVisible
      };
    $scope.peoples.push(newPeoples);

  };

  $scope.toggle = function(people){
    people.bioVisible = !people.bioVisible
  };

  $scope.deletePeople = function(people) {
    $scope.peoples.splice($scope.peoples.indexOf(people), 1);

  };

  $scope.sortBy = function(sortAttribute){
    
    if(sortAttribute != $scope.sortByAttribute){
      $scope.descending = false;
    } else {
      $scope.descending = !$scope.descending;
    }

    $scope.sortByAttribute = sortAttribute;
  };

  window.scope = $scope

  });


}());