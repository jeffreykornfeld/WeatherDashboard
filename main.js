var city = "";
var searchCity = $("#search-city");
var currentCity = $("#current-city");

//Displays the Weather
function displayWeather(event) {
    event.preventDefault();
    // Pulls value of Search City form and puts it in the queryURL
    var cityName = searchCity.val().trim();
    var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&appid=a18d2d1ffc26c24224b5b0379045dfc9"
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);
        
        //Displays City Name
        var dateToday = moment().format("l") 
        $(currentCity).html(response.city.name +" ("+dateToday+")");
    })
}


//invokes Display Weather function on button click
$("#search-button").on("click", displayWeather);