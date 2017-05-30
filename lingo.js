var words = '';
var tweedeletter = '';
var derdeletter = '';
var vierdeletter = '';
var vijfdeletter = '';



	var words = [
	"appel",
	"aldus",
	"afwas",
	"aftel",
	"aarde",
	"armen",
	"actie",
	"apart",
	"beden",
	"beken",
	"bezem",
	"baard",
	"bidet",
	"breuk",
	"enkel",
	"effen",
	"email"];

function start(){ // dit is het knopje van "start the game".

randomWord = Math.floor(Math.random()*words.length);   //hij pakt een random getal
rndomwrd = words[randomWord];  //het getal wordt omgezet naar een tekst
document.getElementById('display').innerHTML = rndomwrd; // laat het gekozen woord zien in de  display en dat is rndomwrd


var res = rndomwrd.split(""); //rndomwrd wordt opgesplits in losse letters
console.log(res); //de var res wordt in de console gesplits weergegeven.

//de eerste letters splitten;

var eersteletter = rndomwrd.substring(0 ,1);
console.log(eersteletter); // de eerste letter wordt weergegeven in de console.
document.getElementById('attempt1-1').value = eersteletter; //de eerste letter wordt weergegeven in de display.

tweedeletter = rndomwrd.substring(1 ,2);
console.log(tweedeletter); // de tweede letter wordt weergegeven in de console.

derdeletter = rndomwrd.substring(2 ,3);
console.log(derdeletter); // de derde letter wordt weergegeven in de console.

vierdeletter = rndomwrd.substring(3 ,4);
console.log(vierdeletter); // de vierde letter wordt weergegeven in de console.

vijfdeletter = rndomwrd.substring(4 ,5);
console.log(vijfdeletter); // de vijfde letter wordt weergegeven in de console.
}


function check(){ // dit is het knopje van de ''controleren".

// de tweede letter wordt gecontroleerd en het vakje wordt geel als het juiste letter is.
var controle2 = document.getElementById('attempt1-2').value;

if(controle2 == tweedeletter){
	document.getElementById('attempt1-2').style.backgroundColor="yellow";
}
else{
		document.getElementById('attempt1-2').style.backgroundColor="red";
}



//de derde letter wordt gecontroleerd en het vakje wordt geel als het de juiste letter is
var controle3 = document.getElementById('attempt1-3').value;
if(controle3 == derdeletter){
	document.getElementById('attempt1-3').style.backgroundColor = "yellow";
}
else{ 	// bij de else statement wordt het letter rood als het niet klopt.
		document.getElementById('attempt1-3').style.backgroundColor ="red";
}


// de vierde letter wordt gecontroleerd en het vakje wordt geel als het de juiste letter is
var controle4 = document.getElementById('attempt1-4').value;
if(controle4 == vierdeletter){
	document.getElementById('attempt1-4').style.backgroundColor = "yellow";
}
else{
	document.getElementById('attempt1-4').style.backgroundColor ="red";
}

// de vijfde letter wordt gecontroleerd en het vakje wordt geel als het de juiste letter is
var controle5 = document.getElementById('attempt1-5').value;
if(controle5 == vijfdeletter){
	document.getElementById('attempt1-5').style.backgroundColor ="yellow";
}
else{
	document.getElementById('attempt1-5').style.backgroundColor = "red";
}

// als de letters goed zijn ingevuld komt er een alert "jij bent de winnaar. 	
if(controle2 == tweedeletter &&controle3 == derdeletter && controle4 == vierdeletter && controle5 == vijfdeletter){
	alert("Congratz, you are the winner!")
}
}






	


