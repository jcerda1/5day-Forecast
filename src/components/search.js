angular.module('5day-forecast')
.controller('searchController', function(){
  console.log(window)
  this.handleClick = (query) => {
    this.searchProvider.search(query, forecasts => {
      this.forecasts = forecasts.list.sort((a, b) => a.dt_txt.localeCompare(b.dt_txt)).filter((value,index) => index % 8 === 0);
      this.currentCity = forecasts.city.name;
    });
  };
})
.component('search', {
  controller: "searchController",
    bindings: {
      searchProvider: "<",
      forecasts: "=",
      currentCity: "="
    },
  templateUrl: "src/templates/search.html"
});