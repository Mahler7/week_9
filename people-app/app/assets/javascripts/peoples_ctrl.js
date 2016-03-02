(function(){
  "use strict";

  angular.module("app").controller("peoplesCtrl", function($scope){
    
    $scope.peoples = [
    {
    name: "Homer",
    bio: "Homer likes donuts",
    bioVisible: false
  },{
    name: "Lisa",
    bio: "Likes saxamaphone",
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

  $scope.toggle = function(bioVisible){

  };

    window.scope = $scope

  });


}());