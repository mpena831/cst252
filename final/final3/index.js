var summary = {
  "url": "https://api.covid19api.com/summary",
  "method": "GET",
  "data": { }
  "timeout": 0,
};

var countries = $("#list");
$.each(summary, function(val, text){
  countires.append(
    $('<option></option>').val(val).html(text)
    );
});

$.ajax(countries).done(function (response) {
  console.log(response);
  $("#output").html("<p>" + )
});