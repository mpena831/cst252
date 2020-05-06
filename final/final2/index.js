$.ajax() {
  url: "https://api.covid19api.com/summary",
  type: "GET",
  success: function(data){
    // write global data to global div
    var globalObj = data.Global;
    console.log("New Confirmed Cases", globalObj.NewConfirmed);

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
      AF: {cases: 7000, deaths: 12 , recovered: 222},
      AL: {cases: 7000, deaths: 12 , recovered: 222},
      DZ: {cases: 7000, deaths: 12, recovered: 222},
      CN: {cases: 123, deaths: 12, recovered: 222},
      MX: {cases: 7000, deaths: 12, recovered: 222}
      // ...
    }
  }
});
    //
    // values: mapCountryObj;
    // render map
  }
}

