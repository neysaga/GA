angular.module('TheMET')

 .controller('GeneralInfoController', GeneralInfoController);

 function GeneralInfoController(){
    // this is our hardcoded seed data
    this.all = [
      {info: "Monday-Saturday 10am-8pm"},
      {info: "999 Peachtree Pl, Atlanta, Ga 30309"},
      {info: "404-555-5555"}
      
    ];


