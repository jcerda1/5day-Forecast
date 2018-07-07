angular.module('5day-forecast')
  .component('app', {
    templateUrl: 'src/templates/app.html',
    controller: function() {
      this.data = window.data
     console.log(data[0].list.forEach(data => {
     	console.log(data.wind)
     }))
    }
  });