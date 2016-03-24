var fs = require("fs");

fs.readFile("file.txt", function (err, data) {
    
    if (err) {
        return console.error(err);    
    }
    
    console.log(data.toString());
});

console.log("This program ended!");

