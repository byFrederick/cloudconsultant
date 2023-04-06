const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json()); // Cambiar a json

// Servir archivos estáticos si es necesario (opcional)
app.use(express.static("public"));

app.get("/home", function(req, res){
    res.sendFile(__dirname + "/index2.html");
});

app.post("/api/data", function(req, res){
    console.log(req.body.X);
    
    res.write("var/foo");
    res.send();
    // En lugar de 'res.write', envíe un objeto JSON
    res.json({
        result: "var/foo"
    });
});

app.listen(3000, function(){console.log("servers started on port 3000")});
