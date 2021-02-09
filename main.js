var city = "";
var savedCities = [];
var searchCity = $("#search-city");
var currentCity = $("#current-city");
var currentTemp = $("#current-temperature")
var currentHumidity = $("#current-humidity")
var currentWindSpeed = $("#current-wind-speed")

// Displays the Weather
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
        // Displays City Name
        var dateToday = moment().format("l")
        $(currentCity).html(response.city.name + " (" + dateToday + ")");
        // Converts Temp to Farenheit and displays 
        var tempF = (response.list[0].main.temp - 273.15) * 1.80 + 32;
        $(currentTemp).html(" " + (tempF).toFixed(2) + "&#8457");
        // Displays Humidity
        $(currentHumidity).html(" " + response.list[0].main.humidity + "%");
        // Displays Wind Speed
        $(currentWindSpeed).html(" " + response.list[0].wind.speed + "mph");

        // 5 Day Forecast Loop
        for (i = 1; i < 6; i++) {
            var dateNext = moment().add(i, 'days').format("l");
            var temp = (response.list[i].main.temp - 273.15) * 1.80 + 32;
            var humidity = response.list[i].main.humidity
            $("#date" + i).html(" " + dateNext);
            $("#temp" + i).html(" " + temp.toFixed(2) + "&#8457");
            $("#humidity" + i).html(" " + humidity + "%");
        }


        // Add city to list of previous searches

        console.log(cityName)
        addToList(cityName)

    })
}

function addToList(c){
    var listEl= $("<li>"+c.toUpperCase()+"</li>");
    $(listEl).attr("class","list-group-item");
    $(listEl).attr("data-value",c.toUpperCase());
    $(".list-group").append(listEl);
}

function clearStorage() {
    $(".list-group").empty();
}




//invokes Display Weather function on button click
$("#search-button").on("click", displayWeather);
$("#clear-history").on("click", clearStorage);