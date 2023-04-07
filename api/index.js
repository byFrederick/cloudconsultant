const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');
const generateTopologyResponse = require('./topologyResponse');

const app = express();

app.use(cors());

app.use(
    cors({
      origin: 'http://localhost:3001',
    })
  );
  
app.use(bodyParser.json()); // Cambiar a json

app.post('/api/data', function (req, res) {
    
  // Call the function to generate the response based on the request body
    const topologyResponse = generateTopologyResponse(req.body);

    console.log(req.body);

  // Send the generated response
    res.json(topologyResponse);
});

app.listen(3000, function(){console.log("servers started on port 3000")});
