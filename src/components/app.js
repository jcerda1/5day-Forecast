angular.module('5day-forecast')
  .component('app', {
    templateUrl: 'src/templates/app.html',
    controller: function() {
      this.data = window.data
      console.log(data)
    }
  });