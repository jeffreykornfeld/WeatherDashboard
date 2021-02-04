// //api key a18d2d1ffc26c24224b5b0379045dfc9

// //variables

// var city="";
// var searchCity = $("#search-city");
// var searchButton = $("#search-button");
// var clearButton = $("#clear-history");
// var currentCity = $("#current-city");
// var currentTemperature = $("#temperature");
// var currentHumidty= $("#humidity");
// var currentWSpeed=$("#wind-speed");
// var currentUvindex= $("#uv-index");
// var sCity=[];






// function getWeather() {
//     $("#today-weather").empty();
//     $("#weather-section").empty();

//     var cityName = $("#city-input").val().trim();
//     var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&appid=a18d2d1ffc26c24224b5b0379045dfc9"
//     $.ajax({
//         url: queryURL,
//         method: "GET"
//     }).then(function (response) {
//         console.log(response);
//         //Display date

//         //Today's forecast
//         var todayWeather = $("#today-weather");
//         // console.log(todayWeather)
//         var dateToday = moment().format("l")
//         var city = response.city.name;
//         var firstText = $("<h2>").text(city);
//         todayWeather.append(firstText);
//         // console.log(firstText);
//         var secondText = $("<h4>").text(dateToday);
//         todayWeather.append(secondText);
//         var kelvin = response.list[0].main.temp;
//         var farenheit = ((kelvin - 273.15) * 1.8) + 32
//         var temp = Math.round(farenheit);
//         var thirdText = $("<p>").text("Temperature: " + temp + "°F");
//         todayWeather.append(thirdText);
//         var humidity = response.list[0].main.humidity;
//         var fourthText = $("<p>").text("Humidity: " + humidity);
//         todayWeather.append(fourthText);
//         var wind = response.list[0].wind.speed;
//         var fifthText = $("<p>").text("Wind speed: " + wind);
//         todayWeather.append(fifthText);

//         function createButtons() {
//             let a = $("<button>");
//             a.addClass("cityBtn");
//             a.value = city
//             a.addClass("row");
//             a.attr("id", city);
//             a.text(city);
//             $("#searched").append(a);
//         }
//         createButtons();




//         //5-day forecast
//         var i
//         for (i = 5; i > 0; i--) {
//             var dateNext = moment().add(i, 'days').format("l");
//             //create the div
//             var weatherSection = $("<div class='col'>");
//             //display date
//             var hOne = $("<h3>").text(dateNext);
//             weatherSection.append(hOne);
//             // Temperature
//             var kelvin = response.list[i].main.temp;
//             var farenheit = ((kelvin - 273.15) * 1.8) + 32
//             var temp = Math.round(farenheit);
//             var pTwo = $("<p>").text(temp + "°F");
//             weatherSection.append(pTwo);
//             // humidity
//             var humidity = response.list[i].main.humidity;
//             var pThree = $("<p>").text("Humidity: " + humidity + "%");
//             weatherSection.append(pThree);
//             // wind
//             var wind = response.list[i].wind.speed;
//             var pFour = $("<p>").text("Wind speed: " + wind);
//             weatherSection.append(pFour);
//             // skies
//             var skies = response.list[i].weather[0].main;
//             $("#weather-section").prepend(weatherSection);


//         }
//     })
// }




// $("#submitBtn").click(function (event) {
//     event.preventDefault()
//     // console.log(event)
//     getWeather();

// })

// $(document).on("click", ".cityBtn", function (event) {
//     event.preventDefault()
//     $("#today-weather").empty();
//     $("#weather-section").empty();

//     var cityName = document.getElementById("cityBtn").value;
//     var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&appid=a18d2d1ffc26c24224b5b0379045dfc9"
//     $.ajax({
//         url: queryURL,
//         method: "GET"
//     }).then(function (response) {
//         console.log(response);
//         //Display date

//         //Today's forecast
//         var todayWeather = $("#today-weather");
//         // console.log(todayWeather)
//         var dateToday = moment().format("l")
//         var city = response.city.name;
//         var firstText = $("<h2>").text(city);
//         todayWeather.append(firstText);
//         // console.log(firstText);
//         var secondText = $("<h4>").text(dateToday);
//         todayWeather.append(secondText);
//         var kelvin = response.list[0].main.temp;
//         var farenheit = ((kelvin - 273.15) * 1.8) + 32
//         var temp = Math.round(farenheit);
//         var thirdText = $("<p>").text("Temperature: " + temp + "°F");
//         todayWeather.append(thirdText);
//         var humidity = response.list[0].main.humidity;
//         var fourthText = $("<p>").text("Humidity: " + humidity);
//         todayWeather.append(fourthText);
//         var wind = response.list[0].wind.speed;
//         var fifthText = $("<p>").text("Wind speed: " + wind);
//         todayWeather.append(fifthText);

//         //5-day forecast
//         var i
//         for (i = 5; i > 0; i--) {
//             var dateNext = moment().add(i, 'days').format("l");
//             //create the div
//             var weatherSection = $("<div class='col'>");
//             //display date
//             var hOne = $("<h3>").text(dateNext);
//             weatherSection.append(hOne);
//             // Temperature
//             var kelvin = response.list[i].main.temp;
//             var farenheit = ((kelvin - 273.15) * 1.8) + 32
//             var temp = Math.round(farenheit);
//             var pTwo = $("<p>").text(temp + "°F");
//             weatherSection.append(pTwo);
//             // humidity
//             var humidity = response.list[i].main.humidity;
//             var pThree = $("<p>").text("Humidity: " + humidity + "%");
//             weatherSection.append(pThree);
//             // wind
//             var wind = response.list[i].wind.speed;
//             var pFour = $("<p>").text("Wind speed: " + wind);
//             weatherSection.append(pFour);
//             // skies
//             var skies = response.list[i].weather[0].main;
//             $("#weather-section").prepend(weatherSection);
//         }
//     })
// })