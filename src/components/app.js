angular.module('5day-forecast')
  .component('app', {
    templateUrl: 'src/templates/app.html',
    controller: function() {
      this.data = window.data
      this.main = data[0].list
      this.currentCity = data[0].city.name
      console.log(this.currentCity)
    }
  });