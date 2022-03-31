var fs = require('fs');
   
// json file with the data
var data = fs.readFileSync('db.json');
   
var nombreProvincias = JSON.parse(data);
const express = require("express");
const app = express();
   
// To solve the cors issue
const cors=require('cors');
    
app.listen(process.env.PORT, 
    () => console.log("Server Start at the Port"));
    
app.use(express.static('public'));
app.use(cors());
  
// when get request is made, alldata() is called
app.get('/', alldata);
   
function alldata(request, response) {
       
    // Returns all information about the nombreProvincias
    response.send(nombreProvincias);
}
  
app.get('/:nombreProvincia/', searchNombreProvincia);
  
function searchNombreProvincia(request, response) {
    var nombreProvincia = request.params.nombreProvincia;
    nombreProvincia = nombreProvincia.charAt(0).toUpperCase()
        + nombreProvincia.slice(1).toLowerCase();
       
    if(nombreProvincias[nombreProvincia]) {
        var reply = nombreProvincias[nombreProvincia];         
    }
    else {
        var reply = {
            status:"Not Found"
        }
    }
       
    response.send(reply);
}
