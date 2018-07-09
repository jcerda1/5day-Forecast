angular.module('5day-forecast')
.component('app', {
  controller: function(forecastSearch) {
    console.log(window)
    this.searchProvider = forecastSearch;
  	this.searchProvider.search('60661', (forecasts) => {
      // sorts the list to only provide 5 of the 39+ returned 
      this.forecasts = forecasts.list.sort((a, b) => a.dt_txt.localeCompare(b.dt_txt)).filter((value,index) => index % 8 === 0);
      this.currentCity = forecasts.city.name;
    });
  },
  templateUrl: 'src/templates/app.html'
});