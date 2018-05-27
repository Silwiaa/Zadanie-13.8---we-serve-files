var fs = require('fs'),
    formidable = require('formidable');

exports.upload = function(request, response) {
    console.log("Rozpoczynam obsługę żądania upload");
    var form = new formidable.IncomingForm();
    form.parse(request, function(errore, fields, files) {
        fs.renameSync(files.upload.path, "test.png");
        response.writeHead(200, {"Content-Type": "text/html"});
        response.write("received image:<br/>");
        response.write("<img src='/show'>");
        response.end()
    });
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

exports.show = function(request, response) {
    fs.readFile("test.png", "binary", function(error, file) {
        response.writeHead(200, {"Content-Type": "image/png"});
        response.write(file, "binary");
        response.end();
    });
}

exports.style = function(request, response) {
    fs.readFile("./templates/style.css", function(error, style) {
        response.writeHead(200, {"Content-Type": "text/css"});
        response.write(style);
        response.end();
    });
}