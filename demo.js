/*var godine = 20;

var x = (godine < 18) ? "premlad": "stariji od 18";

document.write(x);*/



function Funkcija(name)
{
	document.write("Cao, " + name);
}

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