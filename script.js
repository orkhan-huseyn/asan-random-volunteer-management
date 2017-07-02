//list of volunteer boys
var boys = ["Vəliyev Arzu", "Hüseynli Orxan", "Paşayev Orxan", "Ələkbərov Cavanşir", "Quliyev Nəriman", "Quliyev Vahid", "Şükürov Ümid"];

//list of volunteer girls
var girls = ["Nəbiyeva Aydan", "Zeynalova Zibeydə ", "Əhmədzadə Gültac", "Orucova Nilufər", "İsmayılova Elnarə", "Rəhimova Mədinə", 
" Yusibova Abuzəndə", "Nərmin Hüseynova", "Abbasova Xalidə", "Dosuyeva Fidan", "&#399;liyeva Nigar"];

//list of all volunteers
var volunteers = ["Vəliyev Arzu", "Hüseynli Orxan", "Paşayev Orxan", "Ələkbərov Cavanşir", "Quliyev Nəriman", "Quliyev Vahid", "Şükürov Ümid",
			"Nəbiyeva Aydan", "Zeynalova Zibeydə ", "Əhmədzadə Gültac", "Orucova Nilufər", "İsmayılova Elnarə", "Rəhimova Mədinə", "Yusibova Abuzəndə", 
			"Nərmin Hüseynova", "Abbasova Xalidə", "İsmayılova Ayşən", "Abbasova Pərvanə", "Dosuyeva Fidan", "Əliyeva Nigar"];

//---------------SHOW AND HIDE FUNCTIONS-------------

function showRecOne() {
	document.getElementById("rec1").style.display="block";
	//hide others
	document.getElementById("rec2").style.display="none";
	document.getElementById("rec3").style.display="none";
	document.getElementById("c").style.display="none";
	document.getElementById("stat").style.display="none";
	document.getElementById("kgarden").style.display="none";
	document.getElementById("vvaq").style.display="none";
	document.getElementById("police").style.display="none";
}

function showRecTwo() {
	document.getElementById("rec2").style.display="block";
	//hide others
	document.getElementById("rec1").style.display="none";
	document.getElementById("rec3").style.display="none";
	document.getElementById("c").style.display="none";
	document.getElementById("stat").style.display="none";
	document.getElementById("kgarden").style.display="none";
	document.getElementById("vvaq").style.display="none";
	document.getElementById("police").style.display="none";
}

function showRecThree() {
	document.getElementById("rec3").style.display="block";
	//hide others
	document.getElementById("rec1").style.display="none";
	document.getElementById("rec2").style.display="none";
	document.getElementById("c").style.display="none";
	document.getElementById("stat").style.display="none";
	document.getElementById("kgarden").style.display="none";
	document.getElementById("vvaq").style.display="none";
	document.getElementById("police").style.display="none";
}

function showC() {
	document.getElementById("c").style.display="block";
	//hide others
	document.getElementById("rec1").style.display="none";
	document.getElementById("rec2").style.display="none";
	document.getElementById("rec3").style.display="none";
	document.getElementById("stat").style.display="none";
	document.getElementById("kgarden").style.display="none";
	document.getElementById("vvaq").style.display="none";
	document.getElementById("police").style.display="none";
}

function showStat() {
	document.getElementById("stat").style.display="block";
	//hide others
	document.getElementById("rec1").style.display="none";
	document.getElementById("rec2").style.display="none";
	document.getElementById("rec3").style.display="none";
	document.getElementById("c").style.display="none";
	document.getElementById("kgarden").style.display="none";
	document.getElementById("vvaq").style.display="none";
	document.getElementById("police").style.display="none";
}

function showKGarden() {
	document.getElementById("kgarden").style.display="block";
	//hide others
	document.getElementById("rec1").style.display="none";
	document.getElementById("rec2").style.display="none";
	document.getElementById("rec3").style.display="none";
	document.getElementById("c").style.display="none";
	document.getElementById("stat").style.display="none";
	document.getElementById("vvaq").style.display="none";
	document.getElementById("police").style.display="none";
}

function showVVAQ() {
	document.getElementById("vvaq").style.display="block";
	//hide others
	document.getElementById("rec1").style.display="none";
	document.getElementById("rec2").style.display="none";
	document.getElementById("rec3").style.display="none";
	document.getElementById("c").style.display="none";
	document.getElementById("stat").style.display="none";
	document.getElementById("kgarden").style.display="none";
	document.getElementById("police").style.display="none";
}

function showPolice() {
	document.getElementById("police").style.display="block";
	//hide others
	document.getElementById("rec1").style.display="none";
	document.getElementById("rec2").style.display="none";
	document.getElementById("rec3").style.display="none";
	document.getElementById("c").style.display="none";
	document.getElementById("stat").style.display="none";
	document.getElementById("kgarden").style.display="none";
	document.getElementById("vvaq").style.display="none";
}

//------------SELECT RANDOM VOLUNTEER FUNCTIONS-------------

function sendToRecOne() {
	var n = volunteers.length;
	var random = Math.floor(Math.random()*n);
	document.getElementById("volRec1").value=volunteers[random];
}

function sendToRecTwo() {
	var n = volunteers.length;
	var random = Math.floor(Math.random()*n);
	document.getElementById("volRec2").value=volunteers[random];
}

function sendToRecThree() {
	var n = volunteers.length;
	var random = Math.floor(Math.random()*n);
	document.getElementById("volRec3").value=volunteers[random];
}

function sendToC() {
	var n = volunteers.length;
	var r1 = Math.floor(Math.random()*n);
	document.getElementById("td1").innerHTML=volunteers[r1];
	var r2 = Math.floor(Math.random()*n);
	document.getElementById("td2").innerHTML=volunteers[r2];
	var r3 = Math.floor(Math.random()*n);
	document.getElementById("td3").innerHTML=volunteers[r3];
	r4 = Math.floor(Math.random()*n);
	document.getElementById("td4").innerHTML=volunteers[r4];
}

function sendToStat() {
	var n = volunteers.length;
	var random = Math.floor(Math.random()*n);
	document.getElementById("volStat").value=volunteers[random];
}

function sendToKGarden() {
	var n = girls.length;
	var random = Math.floor(Math.random()*n);
	document.getElementById("volKGarden").value=girls[random];
}

function sendToVVAQ() {
	var n = girls.length;
	var random = Math.floor(Math.random()*n);
	/*if (random==1) {
		document.getElementById("volVVAQ").style.color="red";
		document.getElementById("volVVAQ").value=girls[random];
		document.getElementById("error").innerHTML = "Seçilmiş şəxsin VVAQ'a göndərilməsinə qadağa var!\n Xahiş edirik, düyməyə bir daha toxunasınız."
	}
	else {
		document.getElementById("volVVAQ").style.color="black";*/
		document.getElementById("volVVAQ").value=girls[random];
		//document.getElementById("error").innerHTML = "";
	//}
}

function sendToPolice() {
	var n = girls.length;
	var random = Math.floor(Math.random()*n);
	document.getElementById("volPolice").value=girls[random];
}