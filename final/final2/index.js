<<<<<<< HEAD
$.ajax() {
  url: "https://api.covid19api.com/summary",
  type: "GET",
  success: function(data){
    // write global data to global div
    var globalObj = data.Global;
    console.log("New Confirmed Cases", globalObj.NewConfirmed);

=======
  var settings = {
  "url": "https://api.covid19api.com/summary",
  "method": "GET",
  "timeout": 0,
  "data": { }
};

$.ajax(settings).done(function (data) {
  // console.log(response);

  //   var tCases = response.Global.TotalConfirmed.toLocaleString();
  //   var nConfirmed = response.Global.NewConfirmed.toLocaleString();
  //   var tDeaths = response.Global.TotalDeaths.toLocaleString();
  //   var tRecovered = response.Global.TotalRecovered.toLocaleString();

  //   $("#cases").html(tCases);
  //   $("#deaths").html(tDeaths);
  //   $("#recovered").html(tRecovered);
  //   $("#new").html(nConfirmed);
  var globalObj = data.Global;
    console.log("New Confirmed Cases", globalObj.NewConfirmed);
>>>>>>> c4691ab936adf0e78d374b7809a911f788493c64
    // api format:
    // [
    //  {
    //    Country: "ALA Aland Islands",
    //    CountryCode: "AX",
    //    Slug: "ala-aland-islands",
    //    NewConfirmed: 0,
    //    TotalConfirmed: 0,
    //    NewDeaths: 0,
    //    TotalDeaths: 0,
    //    NewRecovered: 0,
    //    TotalRecovered: 0,
    //    Date: "2020-05-04T18:06:50Z"
    //  },
    // ]
    // svgmap format: 
    // AF: {
    //  TotalConfirmed: 0,
    //  NewDeaths: 0,
    //  TotalDeaths: 0,
    //  NewRecovered: 0,
    //  TotalRecovered: 0
    // },
<<<<<<< HEAD
=======
    // parse country data and construct structure for svgmap
    var countryObjArray = data.Countries;
    console.log("First country object:", countryObjArray[0]);
    console.log("First country:", countryObjArray[0].Country);
    var mapCountryObj = {};

    for (i=0; i < countryObjArray.length; i++) {
      // use country code as key to map obj
      var thisKey = countryObjArray[i].CountryCode;

      mapCountryObj[thisKey].TotalConfirmed = countryObjArray[i].TotalConfirmed;
      mapCountryObj[thisKey].TotalDeaths = countryObjArray[i].TotalDeaths;
      mapCountryObj[thisKey].TotalRecovered = countryObjArray[i].TotalRecovered;
    }
    // generate map w svgmap
    // new svgMap({
    //   targetElementID: 'svgMap',
    //   data: {
    //     data: {
    //       gdp: {
    //         name: 'GDP per capita',
    //         format: '{0} USD',
    //         thousandSeparator: ',',
    //         thresholdMax: 50000,
    //         thresholdMin: 1000
    //       },
    //       change: {
    //         name: 'Change to year before',
    //         format: '{0} %'
    //       }
    //     },
    //     applyData: 'gdp',
    //     values: {
    //       AF: {gdp: 587, change: 4.73},
    //       AL: {gdp: 4583, change: 11.09},
    //       DZ: {gdp: 4293, change: 10.01}
    //       // ...
    //     }
    //  } 
    // });
    //
    // values: mapCountryObj;
    // render map

});

new svgMap({
>>>>>>> c4691ab936adf0e78d374b7809a911f788493c64

    // parse country data and construct structure for svgmap
    var countryObjArray = data.Countries;
    console.log("First country object:", countryObjArray[0]);
    console.log("First country:", countryObjArray[0].Country);
    var mapCountryObj = {};
    for (i=0; i < countryObjArray.length; i++) {
      // use country code as key to map obj
      var thisKey = countryObjArray[i].CountryCode;
      mapCountryObj[thisKey].TotalConfirmed = countryObjArray[i].TotalConfirmed;
      . . . do this 5 mo times
    }
    // generate map w svgmap
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
      AF: {cases: 3, deaths:  3, recovered: 3},
      // ...
    }
  }
});
    //
    // values: mapCountryObj;
    // render map
  }
}

