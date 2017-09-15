"use strict";


// PART 1: SHOW A FORTUNE

function showFortune(evt) {

    $.get('/fortune', function(result) {
        $('#fortune-text').html(result);
    })
    // TODO: get the fortune and show it in the #fortune-text div
};

$('#get-fortune-button').on('click', showFortune);


// PART 2: SHOW WEATHER
function showWeatherForecast(result) {
    $('#weather-info').html(result["forecast"]);
}


function showWeather(evt) {
    evt.preventDefault();

    var url = "/weather.json?zipcode=" + $("#zipcode-field").val();

    $.get(url, showWeatherForecast);
    // $("#weather-info").load(url, function(result) {
    //     $('#weather-info').html(result["forecast"]);
    // })
    // TODO: request weather with that URL and show the forecast in #weather-info
}

$("#weather-form").on('submit', showWeather);




// PART 3: ORDER MELONS
function showMelonStatus(result) {
    console.dir(result)
    if (result['code'] === "ERROR") {
        $('#order-status').addClass("order-error");
        // console.log("This is an error.")
    } else {
        $('#order-status').removeClass("order-error");
    }

    $('#order-status').html(result["msg"]);
};


function orderMelons(evt) {
    evt.preventDefault();

    var orderValues = $('#order-form').serialize();


    $.post('/order-melons.json', orderValues, showMelonStatus)
    // TODO: show the result message after your form
    // TODO: if the result code is ERROR, make it show up in red (see our CSS!)
}

$("#order-form").on('submit', orderMelons);


