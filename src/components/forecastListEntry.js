angular.module('5day-forecast')
.component('forecastListEntry', {
  bindings: {
    item: '<'
  },
  templateUrl: "src/templates/forecastListEntry.html"
});