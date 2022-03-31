var fs=require('fs');

var data=fs.readFileSync('db.json');

var nombreProvincias=JSON.parse(data);

const express = require("express");

const app = express();

const cors=require('cors');

app.listen(process.env.PORT, () => console.log("Server Start at 5000 Port"));

app.use(express.static('public'));
app.use(cors());
app.get('/nombreProvincias',alldata);

function alldata(request,response)
{
    response.send(nombreProvincias);
}

app.get('/nombreProvincias/:nombreProvincia/',searchnombreProvincia);

function searchnombreProvincia(request,response)
{
	var word=request.params.nombreProvincia;
	word=word.charAt(0).toUpperCase()+word.slice(1).toLowerCase();
	console.log(word);
	//console.log(nombreProvincias[word]);

    if(nombreProvincias[word])
	{
		var reply=nombreProvincias[word];
		
	}
	else
	{
		var reply={
			status:"Not Found"
		}
	}

    console.log(reply.boil);

    response.send(reply);

}