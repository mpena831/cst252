//   var settings = {
//   "url": "https://api.covid19api.com/summary",
//   "method": "GET",
//   "timeout": 0,
//   "data": { }
// };

// $.ajax(settings).done(function (response) {
//   console.log(response);
//   // var nop = response.Countries[0];
//   // console.log(nop);

//     var tCases = response.Global.TotalConfirmed.toLocaleString();
//     var nConfirmed = response.Global.NewConfirmed.toLocaleString();
//     var tDeaths = response.Global.TotalDeaths.toLocaleString();
//     var tRecovered = response.Global.TotalRecovered.toLocaleString();

//     // $("#cases").html(tCases);
//     // $("#deaths").html(tDeaths);
//     // $("#recovered").html(tRecovered);
//     // $("#new").html(nConfirmed);
// });

new svgMap({


  targetElementID: 'svgMap',
  data: {
    data: {
      cases: {
        name: 'Confirmed',
        format: '{0}',
        thousandSeparator: ',',
        thresholdMax: 50000,
        thresholdMin: 1000
      },
      deaths: {
        name: 'Deaths',
        format: '{0}'
      },
      recovered: {
        name: 'Recovered',
        format: '{0}'
      },
    },
    applyData: 'cases',
    values: {
      AF: {cases: 7000, deaths: 12 , recovered: 222},
      AL: {cases: 7000, deaths: 12 , recovered: 222},
      DZ: {cases: 7000, deaths: 12, recovered: 222},
      CN: {cases: 123, deaths: 12, recovered: 222},
      MX: {cases: 7000, deaths: 12, recovered: 222}
      // ...
    }
  }
});