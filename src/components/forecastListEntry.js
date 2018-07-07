angular.module('5day-forecast')
  .component('forecastListEntry', {
  	controller: function(){
  	  console.log(this)
  	},
  	bindings: {
  	  main: '<'
  	},
  	templateUrl: "src/templates/forecastListEntry.html"
  });