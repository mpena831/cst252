
  var settings = {
  "url": "https://api.covid19api.com/summary",
  "method": "GET",
  "timeout": 0,
  "data": { }
};

$.ajax(settings).done(function (response) {
  console.log(response);
  // var nop = response.Countries[0];
  // console.log(nop);

    var tCases = response.Global.TotalConfirmed.toLocaleString();
    var nConfirmed = response.Global.NewConfirmed.toLocaleString();
    var tDeaths = response.Global.TotalDeaths.toLocaleString();
    var tRecovered = response.Global.TotalRecovered.toLocaleString();

    $("#cases").html(tCases);
    $("#deaths").html(tDeaths);
    $("#recovered").html(tRecovered);
    $("#new").html(nConfirmed);
});