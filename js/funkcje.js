var i = 0; 			
var images = [];	
var time = 1000;	


images[0] = "images/baner4.jpg";
images[1] = "images/baner3.jpg";
images[2] = "images/baner2.jpg";
images[3] = "images/baner.jpg";


function changeImg(){
	document.getElementById('slide').src = images[i];


	if(i < images.length - 1){

	  i++; 
	} else { 

		i = 0;
	}

	setTimeout("changeImg()", time);

	
}




function pokaz(id)
{
	
	tresc="";
	switch (id)
	{
		case 2: tresc += pokazKtoTo();
		break;
		case 3: tresc += pokazFormularz();
		break;
		case 4: tresc += showGaleria();
		break;
		case 5: tresc += localStorageFunkcja();
		break;
		default: tresc += defaultView();
	}
	document.getElementById('blok').innerHTML = tresc;

}

function defaultView(){

	tresc = '<h2><br />ONE PUNCH MAN CHALLENGE</h2> ';
	tresc += '<p> Wyzwanie to polega na podjęciu sesji ciężkich treningów siłowych w celu doskonalenia swojego ciała i ducha. <br> ' +
	'Należy codziennie (w razie możliwości) przebiegać 10 000 m, następnie wykonać 100 pompek, 100 przysiadów oraz 100 brzuszków. <br>' +
	'Na początku na pewno nie uda się ćwiczyć codziennie z powodu mikrokontuzji. <br>'+
	'Za każdym treningiem przerwy będą coraz krótsze, aż ciało pozwoli na codzienny trening. <br> </p>' + 
	'<p class="srodek" ><img id="slide" src="images/baner.jpg"  alt="Zdjęcie" style="padding: 15px; max-width:100%; border-radius:100px;"/></p>' +
	'<article><h2><br />Nie zniechecaj się.</h2>'+
				'<p>Efekty, które uda się uzyskać będą niewyobrażalne <br>'+
					'Każda góra, kiedy zaczynała była tylko kamieniem.<br>'+
					'To co wyróżnia ludzi to właśnie możliwość zmiany.<br>'+
				'</p></article>';
	
	
	return tresc;
}

function pokazKtoTo()
{
	tresc = '<h2><br />Kim jest człowiek One Punch Man?</h2> ';
	tresc += '<p> Saitama (サイタマ, Saitama) to główny bohater mangi i anime One-Punch Man. <br>'+
	'Kiedyś młody i zdesperowany bezrobotny, obecnie zaś zarejestrowany superbohater klasy B rangi 7. <br>'+
	 'Stowarzyszenie nadało mu pseudonim Łysy Peleryniarz(ハゲマント, Hagemanto). <br> ' +
	'W jego życiu nastąpił przełom, gdy jako młody dorosły wracając z nieudanej rozmowy o pracę napotkał na swojej drodze złoczyńce. <br>' +
	'Potwór obrał za cel młodzieńca o wyjątkowo wielkim podbródku, a Saitama odruchowo pośpieszył mu na ratunek.<br>'+
	 'Mężczyzna zdał sobie wtedy sprawę, że jest w stanie spełnić swoje dziecięce marzenie i niedługi czas po pokonaniu monstrum rozpoczął trzyletni trening. <br>'+
	 
	 '<p class="srodek" ><img id="slide" src="images/baner.jpg"  alt="Zdjęcie" style="padding: 15px; max-width:100%; border-radius:100px;"/></p>' +
	'<article><h2><br>Saitama to tylko przeciętny mężczyzna</h2>'+
				'<p>Wzrost: 175cm</br>'+
					'Waga = 70 kg</br>'+
					'Wiek: 25 lat.</br>'+
					'Zaczal wiec trenowac w wieku 22 lat. </br>'+
					'Nigdy nie jest za późno, pamiętaj!'
				'</p></article>';
	window.onload=changeImg;
	return tresc;
}

function showGaleria()
{
	tresc = '<img id="slide" width="0" height="0" /><h2><br />Galeria Saitamy</h2>';
	tresc += '<div class="galeria">';
	
	for(i=1;i<=12;i++){
		tresc += '<div class="slajd"><a href="zdjecia/obraz'+i+'.JPG" data-lightbox="galeria" data-title="ZDJĘCIE NUMER '+i+'"> <img src="miniaturki/mini'+i+'.JPG" alt="obraz'+i+'" /></a></div>';
	}
	tresc += '</div>';
	return tresc;
}

function ustawLocalStorage(){

	localStorage.removeItem('myElement');
	localStorage.setItem('myElement', JSON.stringify(document.getElementById('nazw').value));

}



function pokazFormularz(){
	tresc = '<img id="slide" width="0" height="0" /><h2><br />Zapisz sie juz dzisiaj, aby otrzymywac codzienne przypomnienia!</h2>';
		tresc += '<article class="srodek"><form action="mailto:r.rogalski@pollub.pl" '+
		'method="post" onsubmit="ustawLocalStorage();return pokazDane()">'+
		'<table id="tabela">'+
		'<tbody>'+
		'<tr>'+
		'<td>Twoj email:<br /><input type="email" name="email" id="email" '+
		'required /></td>'+
		'</tr>'+
		'<tr>'+
		'<td>Nazwisko i imie :<br/>(z dużych liter):<br /><input type="text" name="nazw" id="nazw" '+
		'required pattern="[A-ZĄĘŁŃÓŚŹŻ][a-ząćęłńóśźż]* [A-ZĄĘŁŃÓŚŹŻ][a-ząćęłńóśźż]*"/></td><br /> '+
		'</tr>'+
		'<tr>'+
		'<td>Telefon:<br /><input type="tel" name="tel" id="tel" '+
		'required pattern="[0-9]{9}"/></td><br /> '+
		'</tr>'+
		'<tr>'+
		'<td>Zainteresowania: <br /> <label><input type="checkbox" name="zaint1" id="zaint1">'+
		'Zapasy</label></td></br>'+
		'</tr>'+
		'<tr>'+
		'<td><label><input type="checkbox" name="zaint2" id="zaint2">Karate</label></br>'+
		'<label><input type="checkbox" name="zaint3" id="zaint3">Judo</label></br>'+
		'<label><input type="checkbox" name="zaint4" id="zaint4">Inne<label><br /></td>'+
		'</td>'+
		'<tr>'+
		'<td>Wiek:<br /><label></td></tr>'+
		'<tr>'+
		'<td><label><input type="radio" name="wiek" id="wiek1">Mniej niz 10</label></br>'+
		'<label><input type="radio" name="wiek" id="wiek2">10-20</label></br>'+
		'<label><input type="radio" name="wiek" id="wiek3">21-30</label></br>'+
		'<label><input type="radio" name="wiek" id="wiek4">31-40</label></br>'+
		'<label><input type="radio" name="wiek" id="wiek5">41-50</label></br>'+
		'<label><input type="radio" name="wiek" id="wiek6">Wiecej niz 50</label></td>'+
		'</tr>'+
		'<tr>'+
		'<td>Komentarz: <br /><textarea rows="3" cols="20" id="wiadomosc" '+
		'name="wiadomosc" required></textarea></td>'+
		'</tr>'+
		'<tr>'+
		'<td><input type="submit" name="wyslij" value="Wyslij"/></td>'+
		'</tr>'
		'</tbody></table></form></article>';

			
		
		

	return tresc;
}

function pokazDane()
{
	if((document.getElementById('wiek1').checked == false && document.getElementById('wiek2').checked == false && document.getElementById('wiek3').checked == false &&
	document.getElementById('wiek4').checked == false && document.getElementById('wiek5').checked == false && document.getElementById('wiek6').checked == false )
	||
	(document.getElementById('zaint1').checked == false && document.getElementById('zaint2').checked == false && document.getElementById('zaint3').checked == false &&
	document.getElementById('zaint4').checked == false)){
		
		if(document.getElementById('wiek1').checked == false && document.getElementById('wiek2').checked == false && document.getElementById('wiek3').checked == false &&
		document.getElementById('wiek4').checked == false && document.getElementById('wiek5').checked == false && document.getElementById('wiek6').checked == false &&
		document.getElementById('zaint1').checked == false && document.getElementById('zaint2').checked == false && document.getElementById('zaint3').checked == false &&
		document.getElementById('zaint4').checked == false)
		{
		window.alert("WYBIERZ SWOJ WIEK I ZAINTERESOWANIE");
		return false;
	}

		if(document.getElementById('wiek1').checked == false && document.getElementById('wiek2').checked == false && document.getElementById('wiek3').checked == false &&
		document.getElementById('wiek4').checked == false && document.getElementById('wiek5').checked == false && document.getElementById('wiek6').checked == false ){
		window.alert("WYBIERZ SWÓJ WIEK");
		return false;
		}

		if(document.getElementById('zaint1').checked == false && document.getElementById('zaint2').checked == false && document.getElementById('zaint3').checked == false &&
		document.getElementById('zaint4').checked == false){
		window.alert("WYBIERZ ZAINTERESOWANIE");
		return false;
		}

		
	}
	else{
	
	dane = "Nastepujące dane zostaną wysłane : \n";
	dane += "Email: "+document.getElementById('email').value+"\n";
	dane += "Nazwisko i imie: " + document.getElementById('nazw').value+"\n";
	dane += "Telefon: " + document.getElementById('tel').value+"\n";
	dane += "Zainteresowania: " + "\n";
	if(document.getElementById('zaint1').checked == true)
	dane += "Zapasy"+"\n";
	if(document.getElementById('zaint2').checked == true)
	dane += "Karate"+"\n";
	if(document.getElementById('zaint3').checked == true)
	dane += "Judo"+"\n";
	if(document.getElementById('zaint4').checked == true)
	dane += "Inne"+"\n";
	dane += "Wiek :";
	if(document.getElementById('wiek1').checked == true)
	dane += " Mniej niz 10" + "\n";
	if(document.getElementById('wiek2').checked == true)
		dane += " 10-20" + "\n";
	if(document.getElementById('wiek3').checked == true)
		dane += " 21-30" + "\n";
	if(document.getElementById('wiek4').checked == true)
		dane += " 31-40" + "\n";
	if(document.getElementById('wiek5').checked == true)
		dane += " 41-50" + "\n";
	if(document.getElementById('wiek6').checked == true)
		dane += " Wiecej niz 50" + "\n";
	
	dane += "Wiadomosc : " + document.getElementById('wiadomosc').value;
	}





	
	
	
	if(window.confirm(dane)) {
		pokaz(5); //przeniesienie do LocalStorage
		return true;
	}
	else return false;
	
}

function localStorageFunkcja(){

	

	const retrievedObject = localStorage.getItem('myElement');
	console.log(JSON.parse(retrievedObject));

	var name = JSON.parse(retrievedObject);
	if(name == null){
		name = " jeszcze nikt.";
	}

	tresc = '<h2><br />Local Storage</h2> '+
	'</br>Kto sie ostatnio zapisal z tej przegladarki: ' + name +
	'<br><br><button onclick="usunLocalStorage();pokaz(5);">Usun LocalStorage</button>'; //potrzebne po usunieciu odswiezyc do LocalStorage
	
	tresc +='<p class="srodek" ><img id="slide" src="images/baner.jpg" alt="Zdjęcie" style="padding: 15px; max-width:100%; border-radius:100px;"/></p>';
	

	return tresc;
}

function usunLocalStorage(){

	var puste=" jeszcze nikt.";
	localStorage.removeItem('myElement');
	localStorage.setItem('myElement', JSON.stringify(puste));


}



	