// var summary = {
//   "url": "https://api.covid19api.com/summary",
//   "method": "GET",
//   "data": { }
//   "timeout": 0,
// };

// var countries = $("#list");
// $.each(summary, function(val, text){
//   countires.append(
//     $('<option></option>').val(val).html(text)
//     );
// });

// $.ajax(countries).done(function (response) {
//   console.log(response);
//   $("#output").html("<p>" + )
// });

  var settings = {
  "url": "https://api.covid19api.com/summary",
  "method": "GET",
<<<<<<< HEAD
  "timeout": 0,
=======
  "data": { }
>>>>>>> 02d1664fe282b36b285322b82c9f6b7c57740687
};

$.ajax(settings).done(function (response) {
  console.log(response);
<<<<<<< HEAD
  var nop = response.Countries[0];
  console.log(nop);

    var tCases = response.Global.TotalConfirmed.toLocaleString();
    var nConfirmed = response.Global.NewConfirmed.toLocaleString();
    var tDeaths = response.Global.TotalDeaths.toLocaleString();
    var tRecovered = response.Global.TotalRecovered.toLocaleString();

    $("#cases").html(tCases);
    $("#deaths").html(tDeaths);
    $("#recovered").html(tRecovered);
    $("#new").html(nConfirmed);

=======
  $("#output").html("<p>" + data.message + "</p>")
>>>>>>> 02d1664fe282b36b285322b82c9f6b7c57740687
});