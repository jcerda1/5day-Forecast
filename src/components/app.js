angular.module('5day-forecast')
.component('app', {
  templateUrl: 'src/templates/app.html',
  controller: function($window) {
    this.data = $window.data;
    this.forecasts = data[0].list.sort((a, b) => a.dt_txt.localeCompare(b.dt_txt)).filter((value,index) => index % 8 === 0)
    this.currentCity = data[0].city.name;
  }
});