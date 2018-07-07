angular.module('5day-forecast')
  .component('app'), {
    templateUrl: 'src/templates/app.html', 
    controller: function() {
      console.log(this.data)
    }
  }