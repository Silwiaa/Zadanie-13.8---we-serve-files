var fs = require('fs');

exports.upload = function(request, response) {
    console.log("Rozpoczynam obsługę żądania upload");
    response.write("Rozpoczynam upload!");
    response.end()
}

exports.welcome = function(request, response) {
    console.log("Rozpoczynam obsługę żądania welcome");
    fsreadFile('templates/start.html', function(err, html) {
        response.writeHead(200, {"Content-Type": "text/html;charset=utf-8"});
        response.write(html);
        response.end();
    });
}

exports.error = function(request, response) {
    console.log("Nie wiem co robić, wpisz poprawny URL");
    response.write("404");
    response.end();
}