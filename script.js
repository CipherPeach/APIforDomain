// API available from http://open-notify.org/

//Display dates and times ISS will pass over KSU (EST timezone)
function getISSpassover(){
    $.getJSON('http://api.open-notify.org/iss-pass.json?lat=41.1456&lon=81.3393&alt=350&n=5&callback=?', function(data) {
        data['response'].forEach(function (d) {
            var date = new Date(d['risetime']*1000);
             $('#isspass').append('<li>' + date.toString() + '</li>');

        });
    }); 
};

//Display count and names of astronauts in the ISS
function getAstronauts(){ 
    $.getJSON('http://api.open-notify.org/astros.json?callback=?', function(data) {
        var number = data['number'];
        $('#astronautCount').html('There are (' + number + ') astronauts in the ISS.');

        data['people'].forEach(function (d) {
             $('#astronautNames').append('<li>' + d['name'] + '</li>');
        });
    });
};