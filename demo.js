/*var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
}).listen(1337, "127.0.0.1");
console.log('Server running at http://127.0.0.1:1337/');*/


/*var godine = 20;

var x = (godine < 18) ? "premlad": "stariji od 18";

document.write(x);*/

function PrintHello(name)
{
	// console.log("Cao, " + name);
	document.write("Hello " + name);
}

PrintHello("Sadin");

/*var person =
{
	name: "Sadin",
	age: 21,
	nation: "BiH"
}*/

function person(name, age, nation)
{
	this.name = name;
	this.age = age;
	this.nation = nation;
}
