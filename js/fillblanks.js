var a1;
var a2;
var a3;
var a4;
var a5;
var a6;
var a7;
var a8;


function submit001() {
	a9 = input001.value;
	a10 = input002.value;
	a11 = input003.value;
	a12 = input004.value;
	a13 = input005.value;
	a14 = input006.value;
	a15 = input007.value;
	a16 = input008.value;



if (a9 == "heter" || a9 == "Heter") {
	a1 = 1;
	input001.value = a9;
	check001.innerHTML = "<text class=button002>" + "✔" + "</text>";
} else {
	input001.value = a9;
	check001.innerHTML = "<text class=button002>" + "✘" + "</text>";
  }

  
if (a10 == "Trevligt" || a10 == "trevligt") {
   a2 = 1;
	input002.value = a10;
	check002.innerHTML = "<text class=button002>" + "✔" + "</text>";
} else {
	input002.value = a10;
	check002.innerHTML = "<text class=button002>" + "✘" + "</text>";
  }


if (a11 == "Bor" || a11 == "bor") {
	a3 = 1;
	input003.value = a11;
	check003.innerHTML = "<text class=button002>" + "✔" + "</text>";
} else {
	input003.value = a11;
	check003.innerHTML = "<text class=button002>" + "✘" + "</text>";
  }

  if (a12 == "från" || a12 == "Från") {
	a4 = 1;
	input004.value = a12;
	check004.innerHTML = "<text class=button002>" + "✔" + "</text>";
} else {
	input004.value = a12;
	check004.innerHTML = "<text class=button002>" + "✘" + "</text>";
  }

  if (a13 == "Svensk" || a13 == "svensk") {
	a5 = 1;
	input005.value = a13;
	check005.innerHTML = "<text class=button002>" + "✔" + "</text>";
} else {
	input005.value = a13;
	check005.innerHTML = "<text class=button002>" + "✘" + "</text>";
  }

  if (a14 == "Måste" || a14 == "måste") {
	a6 = 1;
	input006.value = a14;
	check006.innerHTML = "<text class=button002>" + "✔" + "</text>";
} else {
	input006.value = a14;
	check006.innerHTML = "<text class=button002>" + "✘" + "</text>";
  }

  if (a15 == "hej" || a15 == "Hej") {
	a7 = 1;
	input007.value = a15;
	check007.innerHTML = "<text class=button002>" + "✔" + "</text>";
} else {
	input007.value = a15;
	check007.innerHTML = "<text class=button002>" + "✘" + "</text>";
  }   
 
  if (a16 == "då" || a16 == "Då") {
	a8 = 1;
	input008.value = a16;
	check008.innerHTML = "<text class=button002>" + "✔" + "</text>";
} else {
	input008.value = a16;
	check008.innerHTML = "<text class=button002>" + "✘" + "</text>";
  }   
 

if (a1 == 1 && a2 == 1 && a3 == 1 && a4 == 1 && a5 == 1 && a6 == 1 && a7 == 1 && a8 == 1) {
	message001.innerHTML = "Congratulation! You have succesfully finished this quiz.";
	disappear001.innerHTML = "";
	reload001.innerHTML = "<div id=center001><button class=button001 onclick=repeat001()>Repeat</button></div>";

}

}

function repeat001() {
	location.reload();
}

//////////////////////////////////////GAME 2 /////////////////////////////////////////

var b1;
var b2;
var b3;
var b4;
var b5;
var b6;
var b7;
var b8;
var b9;
var b10;
var b11;
var b12;

function submit002() {
	b13 = input009.value;
	b14 = input010.value;
	b15 = input011.value;
	b16 = input012.value;
	b17 = input013.value;
	b18 = input014.value;
	b19 = input015.value;
	b20 = input016.value;
    b21 = input017.value;
    b22 = input018.value;
    b23 = input019.value;
    b24 = input020.value;

if (b13 == "igen" || b13 == "Igen") {
	b1 = 1;
	input009.value = b13;
	check009.innerHTML = "<text class=button004>" + "✔" + "</text>";
} else {
	input009.value = b13;
	check009.innerHTML = "<text class=button004>" + "✘" + "</text>";
  }

  
if (b14 == "berätta" || b14 == "Berätta") {
   b2 = 1;
	input010.value = b14;
	check010.innerHTML = "<text class=button004>" + "✔" + "</text>";
} else {
	input010.value = b14;
	check010.innerHTML = "<text class=button004>" + "✘" + "</text>";
  }


if (b15 == "lägenhet" || b15 == "Lägenhet") {
	b3 = 1;
	input011.value = b15;
	check011.innerHTML = "<text class=button004>" + "✔" + "</text>";
} else {
	input011.value = b15;
	check011.innerHTML = "<text class=button004>" + "✘" + "</text>";
  }

  if (b16 == "vardagsrum" || b16 == "Vardagsrum") {
	b4 = 1;
	input012.value = b16;
	check012.innerHTML = "<text class=button004>" + "✔" + "</text>";
} else {
	input012.value = b16;
	check012.innerHTML = "<text class=button004>" + "✘" + "</text>";
  }

  if (b17 == "har" || b17 == "Har") {
	b5 = 1;
	input013.value = b17;
	check013.innerHTML = "<text class=button004>" + "✔" + "</text>";
} else {
	input013.value = b17;
	check013.innerHTML = "<text class=button004>" + "✘" + "</text>";
  }

  if (b18 == "röd" || b18 == "Röd") {
	b6 = 1;
	input014.value = b18;
	check014.innerHTML = "<text class=button004>" + "✔" + "</text>";
} else {
	input014.value = b18;
	check014.innerHTML = "<text class=button004>" + "✘" + "</text>";
  }

  if (b19 == "väggen" || b19 == "Väggen") {
	b7 = 1;
	input015.value = b19;
	check015.innerHTML = "<text class=button004>" + "✔" + "</text>";
} else {
	input015.value = b19;
	check015.innerHTML = "<text class=button004>" + "✘" + "</text>";
  }   
 
  if (b20 == "Vilken" || b20 == "vilken") {
	b8 = 1;
	input016.value = b20;
	check016.innerHTML = "<text class=button004>" + "✔" + "</text>";
} else {
	input016.value = b20;
	check016.innerHTML = "<text class=button004>" + "✘" + "</text>";
  }   
 
   if (b21 == "Vit" || b21 == "vit") {
	b9 = 1;
	input017.value = b21;
	check017.innerHTML = "<text class=button004>" + "✔" + "</text>";
} else {
	input017.value = b21;
	check017.innerHTML = "<text class=button004>" + "✘" + "</text>";
  }  

    if (b22 == "ditt" || b22 == "Ditt") {
	b10 = 1;
	input018.value = b22;
	check018.innerHTML = "<text class=button004>" + "✔" + "</text>";
} else {
	input018.value = b22;
	check018.innerHTML = "<text class=button004>" + "✘" + "</text>";
  }  

    if (b23 == "Golvet" || b23 == "golvet") {
	b11 = 1;
	input019.value = b23;
	check019.innerHTML = "<text class=button004>" + "✔" + "</text>";
} else {
	input019.value = b23;
	check019.innerHTML = "<text class=button004>" + "✘" + "</text>";
  }  

      if (b24 == "tack" || b24 == "Tack") {
	b12 = 1;
	input020.value = b24;
	check020.innerHTML = "<text class=button004>" + "✔" + "</text>";
} else {
	input020.value = b24;
	check020.innerHTML = "<text class=button004>" + "✘" + "</text>";
  } 

if (b1 == 1 && b2 == 1 && b3 == 1 && b4 == 1 && b5 == 1 && b6 == 1 && b7 == 1 && b8 == 1 && b9 == 1 && b10 == 1 && b11 == 1 && b12 == 1) {
	message002.innerHTML = "Congratulation! You have succesfully finished this quiz.";
	disappear002.innerHTML = "";
	reload002.innerHTML = "<div id=center003><button class=button003 onclick=repeat002()>Repeat</button></div>";

}

}

function repeat002() {
	location.reload();
}


////////////////////////////////GAME 3///////////////////////////////////////////////
var c1;
var c2;
var c3;
var c4;
var c5;
var c6;
var c7;
var c8;
var c9;

function submit003() {
	c10 = input021.value;
	c11 = input022.value;
	c12 = input023.value;
	c13 = input024.value;
	c14 = input025.value;
    c15 = input026.value;
    c16 = input027.value;
    c17 = input028.value;
    c18 = input029.value;


  if (c10 == "kök" || c10 == "Kök") {
	c1 = 1;
	input021.value = c10;
	check021.innerHTML = "<text class=button006>" + "✔" + "</text>";
} else {
	input021.value = c10;
	check021.innerHTML = "<text class=button006>" + "✘" + "</text>";
  }

  if (c11 == "självklart" || c11 == "Självklart") {
	c2 = 1;
	input022.value = c11;
	check022.innerHTML = "<text class=button006>" + "✔" + "</text>";
} else {
	input022.value = c11;
	check022.innerHTML = "<text class=button006>" + "✘" + "</text>";
  }

  if (c12 == "stort" || c12 == "Stort") {
	c3 = 1;
	input023.value = c12;
	check023.innerHTML = "<text class=button006>" + "✔" + "</text>";
} else {
	input023.value = c12;
	check023.innerHTML = "<text class=button006>" + "✘" + "</text>";
  }

  if (c13 == "tallrikar" || c13 == "Tallrikar") {
	c4 = 1;
	input024.value = c13;
	check024.innerHTML = "<text class=button006>" + "✔" + "</text>";
} else {
	input024.value = c13;
	check024.innerHTML = "<text class=button006>" + "✘" + "</text>";
  }   
 
  if (c14 == "bestick" || c14 == "Bestick") {
	c5 = 1;
	input025.value = c14;
	check025.innerHTML = "<text class=button006>" + "✔" + "</text>";
} else {
	input025.value = c14;
	check025.innerHTML = "<text class=button006>" + "✘" + "</text>";
  }   
 
   if (c15 == "och" || c15 == "Och") {
	c6 = 1;
	input026.value = c15;
	check026.innerHTML = "<text class=button006>" + "✔" + "</text>";
} else {
	input026.value = c15;
	check026.innerHTML = "<text class=button006>" + "✘" + "</text>";
  }  

    if (c16 == "svart" || c16 == "Svart") {
	c7 = 1;
	input027.value = c16;
	check027.innerHTML = "<text class=button006>" + "✔" + "</text>";
} else {
	input027.value = c16;
	check027.innerHTML = "<text class=button006>" + "✘" + "</text>";
  }  

    if (c17 == "mig" || c17 == "Mig") {
	c8 = 1;
	input028.value = c17;
	check028.innerHTML = "<text class=button006>" + "✔" + "</text>";
} else {
	input028.value = c17;
	check028.innerHTML = "<text class=button006>" + "✘" + "</text>";
  }  

      if (c18 == "då" || c18 == "Då") {
	c9 = 1;
	input029.value = c18;
	check029.innerHTML = "<text class=button006>" + "✔" + "</text>";
} else {
	input029.value = c18;
	check029.innerHTML = "<text class=button006>" + "✘" + "</text>";
  } 

if (c1 == 1 && c2 == 1 && c3 == 1 && c4 == 1 && c5 == 1 && c6 == 1 && c7 == 1 && c8 == 1 && c9 == 1) {
	message003.innerHTML = "Congratulation! You have succesfully finished this quiz.";
	disappear003.innerHTML = "";
	reload003.innerHTML = "<div id=center005><button class=button005 onclick=repeat003()>Repeat</button></div>";

}

}

function repeat003() {
	location.reload();
}

////////////////////////////////GAME 4///////////////////////////////////////////////
var d1;
var d2;
var d3;
var d4;
var d5;
var d6;
var d7;
var d8;

function submit004() {
	d9 = input030.value;
	d10 = input031.value;
	d11 = input032.value;
	d12 = input033.value;
	d13 = input034.value;
    d14 = input035.value;
    d15 = input036.value;
    d16 = input037.value;


  if (d9 == "sovrum" || d9 == "Sovrum") {
	d1 = 1;
	input030.value = d9;
	check030.innerHTML = "<text class=button008>" + "✔" + "</text>";
} else {
	input030.value = d9;
	check030.innerHTML = "<text class=button008>" + "✘" + "</text>";
  }

  if (d10 == "mitt" || d10 == "Mitt") {
	d2 = 1;
	input031.value = d10;
	check031.innerHTML = "<text class=button008>" + "✔" + "</text>";
} else {
	input031.value = d10;
	check031.innerHTML = "<text class=button008>" + "✘" + "</text>";
  }

  if (d11 == "hänger" || d11 == "Hänger") {
	d3 = 1;
	input032.value = d11;
	check032.innerHTML = "<text class=button008>" + "✔" + "</text>";
} else {
	input032.value = d11;
	check032.innerHTML = "<text class=button008>" + "✘" + "</text>";
  }

  if (d12 == "möblerna" || d12 == "Möblerna") {
	d4 = 1;
	input033.value = d12;
	check033.innerHTML = "<text class=button008>" + "✔" + "</text>";
} else {
	input033.value = d12;
	check033.innerHTML = "<text class=button008>" + "✘" + "</text>";
  }   
 
  if (d13 == "De" || d13 == "de") {
	d5 = 1;
	input034.value = d13;
	check034.innerHTML = "<text class=button008>" + "✔" + "</text>";
} else {
	input034.value = d13;
	check034.innerHTML = "<text class=button008>" + "✘" + "</text>";
  }   
 
   if (d14 == "i" || d14 == "I") {
	d6 = 1;
	input035.value = d14;
	check035.innerHTML = "<text class=button008>" + "✔" + "</text>";
} else {
	input035.value = d14;
	check035.innerHTML = "<text class=button008>" + "✘" + "</text>";
  }  

    if (d15 == "är" || d15 == "Är") {
	d7 = 1;
	input036.value = d15;
	check036.innerHTML = "<text class=button008>" + "✔" + "</text>";
} else {
	input036.value = d15;
	check036.innerHTML = "<text class=button008>" + "✘" + "</text>";
  }  

    if (d16 == "Adjö" || d16 == "adjö") {
	d8 = 1;
	input037.value = d16;
	check037.innerHTML = "<text class=button008>" + "✔" + "</text>";
} else {
	input037.value = d16;
	check037.innerHTML = "<text class=button008>" + "✘" + "</text>";
  }  


if (d1 == 1 && d2 == 1 && d3 == 1 && d4 == 1 && d5 == 1 && d6 == 1 && d7 == 1 && d8 == 1) {
	message004.innerHTML = "Congratulation! You have succesfully finished this quiz.";
	disappear004.innerHTML = "";
	reload004.innerHTML = "<div id=center007><button class=button007 onclick=repeat004()>Repeat</button></div>";

}

}

function repeat004() {
	location.reload();
}


////////////////////////////////GAME 5///////////////////////////////////////////////
var e1;
var e2;
var e3;
var e4;
var e5;
var e6;
var e7;
var e8;
var e9;
var e10;

function submit005() {
	e11 = input038.value;
	e12 = input039.value;
	e13 = input040.value;
	e14 = input041.value;
	e15 = input042.value;
    e16 = input043.value;
    e17 = input044.value;
    e18 = input045.value;
    e19 = input046.value;
    e20 = input047.value;

  if (e11 == "Hallå" || e11 == "hallå") {
	e1 = 1;
	input038.value = e11;
	check038.innerHTML = "<text class=button010>" + "✔" + "</text>";
} else {
	input038.value = e11;
	check038.innerHTML = "<text class=button010>" + "✘" + "</text>";
  }

  if (e12 == "allt" || e12 == "Allt") {
	e2 = 1;
	input039.value = e12;
	check039.innerHTML = "<text class=button010>" + "✔" + "</text>";
} else {
	input039.value = e12;
	check039.innerHTML = "<text class=button010>" + "✘" + "</text>";
  }

  if (e13 == "handfat" || e13 == "Handfat") {
	e3 = 1;
	input040.value = e13;
	check040.innerHTML = "<text class=button010>" + "✔" + "</text>";
} else {
	input040.value = e13;
	check040.innerHTML = "<text class=button010>" + "✘" + "</text>";
  }

  if (e14 == "toalett" || e14 == "Toalett") {
	e4 = 1;
	input041.value = e14;
	check041.innerHTML = "<text class=button010>" + "✔" + "</text>";
} else {
	input041.value = e14;
	check041.innerHTML = "<text class=button010>" + "✘" + "</text>";
  }  
 
  if (e15 == "Vad" || e15 == "vad") {
	e5 = 1;
	input042.value = e15;
	check042.innerHTML = "<text class=button010>" + "✔" + "</text>";
} else {
	input042.value = e15;
	check042.innerHTML = "<text class=button010>" + "✘" + "</text>";
  }   
 
   if (e16 == "blå" || e16 == "Blå") {
	e6 = 1;
	input043.value = e16;
	check043.innerHTML = "<text class=button010>" + "✔" + "</text>";
} else {
	input043.value = e16;
	check043.innerHTML = "<text class=button010>" + "✘" + "</text>";
  }  

    if (e17 == "golvet" || e17 == "Golvet") {
	e7 = 1;
	input044.value = e17;
	check044.innerHTML = "<text class=button010>" + "✔" + "</text>";
} else {
	input044.value = e17;
	check044.innerHTML = "<text class=button010>" + "✘" + "</text>";
  }  

    if (e18 == "är" || e18 == "Är") {
	e8 = 1;
	input045.value = e18;
	check045.innerHTML = "<text class=button010>" + "✔" + "</text>";
} else {
	input045.value = e18;
	check045.innerHTML = "<text class=button010>" + "✘" + "</text>";
  }  

    if (e19 == "senare" || e19 == "Senare") {
	e9 = 1;
	input046.value = e19;
	check046.innerHTML = "<text class=button010>" + "✔" + "</text>";
} else {
	input046.value = e19;
	check046.innerHTML = "<text class=button010>" + "✘" + "</text>";
  }  

      if (e20 == "Varsågod" || e20 == "varsågod") {
	e10 = 1;
	input047.value = e20;
	check047.innerHTML = "<text class=button010>" + "✔" + "</text>";
} else {
	input047.value = e20;
	check047.innerHTML = "<text class=button010>" + "✘" + "</text>";
  }  

if (e1 == 1 && e2 == 1 && e3 == 1 && e4 == 1 && e5 == 1 && e6 == 1 && e7 == 1 && e8 == 1 && e9 == 1 && e10 == 1) {
	message005.innerHTML = "Congratulation! You have succesfully finished this quiz.";
	disappear005.innerHTML = "";
	reload005.innerHTML = "<div id=center009><button class=button009 onclick=repeat005()>Repeat</button></div>";
	 

}

}

function repeat005() {
	location.reload();
}



////////////////////////////////GAME 6///////////////////////////////////////////////
var f1;
var f2;
var f3;
var f4;
var f5;
var f6;
var f7;
var f8;
var f9;
var f10;
var f11;
var f12;
var f13;
var f14;
var f15;
var f16;
var f17;
var f18;
var f19;

function submit006() {
	f20 = input048.value;
	f21 = input049.value;
	f22 = input050.value;
	f23 = input051.value;
	f24 = input052.value;
    f25 = input053.value;
    f26 = input054.value;
    f27 = input055.value;
    f28 = input056.value;
    f29 = input057.value;  
    f30 = input058.value;
    f31 = input059.value;
    f32 = input060.value;
    f33 = input061.value;
    f34 = input062.value;
    f35 = input063.value;
    f36 = input064.value;
    f37 = input065.value;
    f38 = input066.value;

  if (f20 == "snälla" || f20 == "Snälla") {
	f1 = 1;
	input048.value = f20;
	check048.innerHTML = "<text class=button012>" + "✔" + "</text>";
} else {
	input048.value = f20;
	check048.innerHTML = "<text class=button012>" + "✘" + "</text>";
  }

  if (f21 == "hittar" || f21 == "Hittar") {
	f2 = 1;
	input049.value = f21;
	check049.innerHTML = "<text class=button012>" + "✔" + "</text>";
} else {
	input049.value = f21;
	check049.innerHTML = "<text class=button012>" + "✘" + "</text>";
  }

  if (f22 == "välkommen" || f22 == "Välkommen") {
	f3 = 1;
	input050.value = f22;
	check050.innerHTML = "<text class=button012>" + "✔" + "</text>";
} else {
	input050.value = f22;
	check050.innerHTML = "<text class=button012>" + "✘" + "</text>";
  }

  if (f23 == "hjälpa" || f23 == "Hjälpa") {
	f4 = 1;
	input051.value = f23;
	check051.innerHTML = "<text class=button012>" + "✔" + "</text>";
} else {
	input051.value = f23;
	check051.innerHTML = "<text class=button012>" + "✘" + "</text>";
  }  
 
  if (f24 == "Naturligtvis" || f24 == "naturligtvis") {
	f5 = 1;
	input052.value = f24;
	check052.innerHTML = "<text class=button012>" + "✔" + "</text>";
} else {
	input052.value = f24;
	check052.innerHTML = "<text class=button012>" + "✘" + "</text>";
  }   
 
   if (f25 == "letar" || f25 == "Letar") {
	f6 = 1;
	input053.value = f25;
	check053.innerHTML = "<text class=button012>" + "✔" + "</text>";
} else {
	input053.value = f25;
	check053.innerHTML = "<text class=button012>" + "✘" + "</text>";
  }  

    if (f26 == "svampssoppa" || f26 == "Svampssoppa") {
	f7 = 1;
	input054.value = f26;
	check054.innerHTML = "<text class=button012>" + "✔" + "</text>";
} else {
	input054.value = f26;
	check054.innerHTML = "<text class=button012>" + "✘" + "</text>";
  }  

    if (f27 == "Tyvärr" || f27 == "tyvärr") {
	f8 = 1;
	input055.value = f27;
	check055.innerHTML = "<text class=button012>" + "✔" + "</text>";
} else {
	input055.value = f27;
	check055.innerHTML = "<text class=button012>" + "✘" + "</text>";
  }  

    if (f28 == "leveransen" || f28 == "Leveransen") {
	f9 = 1;
	input056.value = f28;
	check056.innerHTML = "<text class=button012>" + "✔" + "</text>";
} else {
	input056.value = f28;
	check056.innerHTML = "<text class=button012>" + "✘" + "</text>";
  }  

      if (f29 == "varor" || f29 == "Varor") {
	f10 = 1;
	input057.value = f29;
	check057.innerHTML = "<text class=button012>" + "✔" + "</text>";
} else {
	input057.value = f29;
	check057.innerHTML = "<text class=button012>" + "✘" + "</text>";
  }  

      if (f30 == "mycket" || f30 == "Mycket") {
	f11 = 1;
	input058.value = f30;
	check058.innerHTML = "<text class=button012>" + "✔" + "</text>";
} else {
	input058.value = f30;
	check058.innerHTML = "<text class=button012>" + "✘" + "</text>";
  }  

        if (f31 == "550kr" || f31 == "550KR") {
	f12 = 1;
	input059.value = f31;
	check059.innerHTML = "<text class=button012>" + "✔" + "</text>";
} else {
	input059.value = f31;
	check059.innerHTML = "<text class=button012>" + "✘" + "</text>";
  }  

        if (f32 == "Ja" || f32 == "ja") {
	f13 = 1;
	input060.value = f32;
	check060.innerHTML = "<text class=button012>" + "✔" + "</text>";
} else {
	input060.value = f32;
	check060.innerHTML = "<text class=button012>" + "✘" + "</text>";
  }  

        if (f33 == "blir" || f33 == "Blir") {
	f14 = 1;
	input061.value = f33;
	check061.innerHTML = "<text class=button012>" + "✔" + "</text>";
} else {
	input061.value = f33;
	check061.innerHTML = "<text class=button012>" + "✘" + "</text>";
  }  

        if (f34 == "Kan" || f34 == "kan") {
	f15 = 1;
	input062.value = f34;
	check062.innerHTML = "<text class=button012>" + "✔" + "</text>";
} else {
	input062.value = f34;
	check062.innerHTML = "<text class=button012>" + "✘" + "</text>";
  }  

        if (f35 == "ha" || f35 == "Ha") {
	f16 = 1;
	input063.value = f35;
	check063.innerHTML = "<text class=button012>" + "✔" + "</text>";
} else {
	input063.value = f35;
	check063.innerHTML = "<text class=button012>" + "✘" + "</text>";
  }  

        if (f36 == "Ja" || f36 == "ja") {
	f17 = 1;
	input064.value = f36;
	check064.innerHTML = "<text class=button012>" + "✔" + "</text>";
} else {
	input064.value = f36;
	check064.innerHTML = "<text class=button012>" + "✘" + "</text>";
  }  

        if (f37 == "går" || f37 == "Går") {
	f18 = 1;
	input065.value = f37;
	check065.innerHTML = "<text class=button012>" + "✔" + "</text>";
} else {
	input065.value = f37;
	check065.innerHTML = "<text class=button012>" + "✘" + "</text>";
  }  

        if (f38 == "också" || f38 == "Också") {
	f19 = 1;
	input066.value = f38;
	check066.innerHTML = "<text class=button012>" + "✔" + "</text>";
} else {
	input066.value = f38;
	check066.innerHTML = "<text class=button012>" + "✘" + "</text>";
  }  

if (f1 == 1 && f2 == 1 && f3 == 1 && f4 == 1 && f5 == 1 && f6 == 1 && f7 == 1 && f8 == 1 && f9 == 1 && f10 == 1 && f11 == 1 && f12 == 1 && f13 == 1 && f14 == 1 && f15 == 1 && f16 == 1 && f17 == 1 && f18 == 1 && f19 == 1) {
	message006.innerHTML = "Congratulation! You have succesfully finished this quiz.";
	disappear006.innerHTML = "";
	reload006.innerHTML = "<div id=center011><button class=button011 onclick=repeat006()>Repeat</button></div>";

}

}

function repeat006() {
	location.reload();
}


////////////////////////////////GAME 7///////////////////////////////////////////////
var g1;
var g2;
var g3;
var g4;
var g5;
var g6;
var g7;
var g8;
var g9;
var g10;
var g11;
var g12;
var g13;
var g14;
var g15;
var g16;
var g17;
var g18;
var g19;
var g20;
var g21;
var g22;
var g23;

function submit007() {
	g24 = input067.value;
	g25 = input068.value;
	g26 = input069.value;
	g27 = input070.value;
	g28 = input071.value;
    g29 = input072.value;
    g30 = input073.value;
    g31 = input074.value;
    g32 = input075.value;
    g33 = input076.value;  
    g34 = input077.value;
    g35 = input078.value;
    g36 = input079.value;
    g37 = input080.value;
    g38 = input081.value;
    g39 = input082.value;
    g40 = input083.value;
    g41 = input084.value;
    g42 = input085.value;
    g43 = input086.value;
    g44 = input087.value;
    g45 = input088.value;
    g46 = input089.value;



          if (g24 == "butik" || g24 == "Butik") {
	g1 = 1;
	input067.value = g24;
	check067.innerHTML = "<text class=button014>" + "✔" + "</text>";
} else {
	input067.value = g24;
	check067.innerHTML = "<text class=button014>" + "✘" + "</text>";
  }  


        if (g25 == "med" || g25 == "Med") {
	g2 = 1;
	input068.value = g25;
	check068.innerHTML = "<text class=button014>" + "✔" + "</text>";
} else {
	input068.value = g25;
	check068.innerHTML = "<text class=button014>" + "✘" + "</text>";
  } 


        if (g26 == "byxor" || g26 == "Byxor") {
	g3 = 1;
	input069.value = g26;
	check069.innerHTML = "<text class=button014>" + "✔" + "</text>";
} else {
	input069.value = g26;
	check069.innerHTML = "<text class=button014>" + "✘" + "</text>";
  } 


        if (g27 == "storlek" || g27 == "Storlek") {
	g4 = 1;
	input070.value = g27;
	check070.innerHTML = "<text class=button014>" + "✔" + "</text>";
} else {
	input070.value = g27;
	check070.innerHTML = "<text class=button014>" + "✘" + "</text>";
  } 


        if (g28 == "jag" || g28 == "Jag") {
	g5 = 1;
	input071.value = g28;
	check071.innerHTML = "<text class=button014>" + "✔" + "</text>";
} else {
	input071.value = g28;
	check071.innerHTML = "<text class=button014>" + "✘" + "</text>";
  } 


        if (g29 == "färg" || g29 == "Färg") {
	g6 = 1;
	input072.value = g29;
	check072.innerHTML = "<text class=button014>" + "✔" + "</text>";
} else {
	input072.value = g29;
	check072.innerHTML = "<text class=button014>" + "✘" + "</text>";
  } 

   
          if (g30 == "gillar" || g30 == "Gillar") {
	g7 = 1;
	input073.value = g30;
	check073.innerHTML = "<text class=button014>" + "✔" + "</text>";
} else {
	input073.value = g30;
	check073.innerHTML = "<text class=button014>" + "✘" + "</text>";
  } 



          if (g31 == "följ" || g30 == "Följ") {
	g8 = 1;
	input074.value = g31;
	check074.innerHTML = "<text class=button014>" + "✔" + "</text>";
} else {
	input074.value = g31;
	check074.innerHTML = "<text class=button014>" + "✘" + "</text>";
  } 



          if (g32 == "säsongens" || g32 == "Säsongens") {
	g9 = 1;
	input075.value = g32;
	check075.innerHTML = "<text class=button014>" + "✔" + "</text>";
} else {
	input075.value = g32;
	check075.innerHTML = "<text class=button014>" + "✘" + "</text>";
  } 
 


          if (g33 == "Trevligt" || g33 == "trevligt") {
	g10 = 1;
	input076.value = g33;
	check076.innerHTML = "<text class=button014>" + "✔" + "</text>";
} else {
	input076.value = g33;
	check076.innerHTML = "<text class=button014>" + "✘" + "</text>";
  } 


           if (g34 == "vänster" || g34 == "Vänster") {
	g11 = 1;
	input077.value = g34;
	check077.innerHTML = "<text class=button014>" + "✔" + "</text>";
} else {
	input077.value = g34;
	check077.innerHTML = "<text class=button014>" + "✘" + "</text>";
  } 


           if (g35 == "passar" || g35 == "Passar") {
	g12 = 1;
	input078.value = g35;
	check078.innerHTML = "<text class=button014>" + "✔" + "</text>";
} else {
	input078.value = g35;
	check078.innerHTML = "<text class=button014>" + "✘" + "</text>";
  } 



            if (g36 == "Ja" || g36 == "ja") {
	g13 = 1;
	input079.value = g36;
	check079.innerHTML = "<text class=button014>" + "✔" + "</text>";
} else {
	input079.value = g36;
	check079.innerHTML = "<text class=button014>" + "✘" + "</text>";
  } 



            if (g37 == "något" || g37 == "Något") {
	g14 = 1;
	input080.value = g37;
	check080.innerHTML = "<text class=button014>" + "✔" + "</text>";
} else {
	input080.value = g37;
	check080.innerHTML = "<text class=button014>" + "✘" + "</text>";
  } 


            if (g38 == "nya" || g38 == "Nya") {
	g15 = 1;
	input081.value = g38;
	check081.innerHTML = "<text class=button014>" + "✔" + "</text>";
} else {
	input081.value = g38;
	check081.innerHTML = "<text class=button014>" + "✘" + "</text>";
  }
  

            if (g39 == "du" || g39 == "Du") {
	g16 = 1;
	input082.value = g39;
	check082.innerHTML = "<text class=button014>" + "✔" + "</text>";
} else {
	input082.value = g39;
	check082.innerHTML = "<text class=button014>" + "✘" + "</text>";
  }


            if (g40 == "hjälp" || g40 == "Hjälp") {
	g17 = 1;
	input083.value = g40;
	check083.innerHTML = "<text class=button014>" + "✔" + "</text>";
} else {
	input083.value = g40;
	check083.innerHTML = "<text class=button014>" + "✘" + "</text>";
  }


           if (g41 == "medlem" || g41 == "Medlem") {
	g18 = 1;
	input084.value = g41;
	check084.innerHTML = "<text class=button014>" + "✔" + "</text>";
} else {
	input084.value = g41;
	check084.innerHTML = "<text class=button014>" + "✘" + "</text>";
  }


           if (g42 == "Nej" || g42 == "nej") {
	g19 = 1;
	input085.value = g42;
	check085.innerHTML = "<text class=button014>" + "✔" + "</text>";
} else {
	input085.value = g42;
	check085.innerHTML = "<text class=button014>" + "✘" + "</text>";
  }

 
           if (g43 == "blir" || g43 == "Blir") {
	g20 = 1;
	input086.value = g43;
	check086.innerHTML = "<text class=button014>" + "✔" + "</text>";
} else {
	input086.value = g43;
	check086.innerHTML = "<text class=button014>" + "✘" + "</text>";
  }
         


           if (g44 == "du" || g44 == "Du") {
	g21 = 1;
	input087.value = g44;
	check087.innerHTML = "<text class=button014>" + "✔" + "</text>";
} else {
	input087.value = g44;
	check087.innerHTML = "<text class=button014>" + "✘" + "</text>";
  }
   


           if (g45 == "bra" || g45 == "Bra") {
	g22 = 1;
	input088.value = g45;
	check088.innerHTML = "<text class=button014>" + "✔" + "</text>";
} else {
	input088.value = g45;
	check088.innerHTML = "<text class=button014>" + "✘" + "</text>";
  }


           if (g46 == "Hejdå" || g46 == "hejdå") {
	g23 = 1;
	input089.value = g46;
	check089.innerHTML = "<text class=button014>" + "✔" + "</text>";
} else {
	input089.value = g46;
	check089.innerHTML = "<text class=button014>" + "✘" + "</text>";
  }

 


if (g1 == 1 && g2 == 1 && g3 == 1 && g4 == 1 && g5 == 1 && g6 == 1 && g7 == 1 && g8 == 1 && g9 == 1 && g10 == 1 && g11 == 1 && g12 == 1 && g13 == 1 && g14 == 1 && g15 == 1 && g16 == 1 && g17 == 1 && g18 == 1 && g19 == 1 && g20 == 1 && g21 == 1 && g22 == 1 && g23 == 1) {
	message007.innerHTML = "Congratulation! You have succesfully finished this quiz.";
	disappear007.innerHTML = "";
	reload007.innerHTML = "<div id=center013><button class=button013 onclick=repeat007()>Repeat</button></div>";

}

}

function repeat007() {
	location.reload();
}



////////////////////////////////GAME 8///////////////////////////////////////////////
var h1;
var h2;
var h3;
var h4;
var h5;
var h6;
var h7;
var h8;
var h9;
var h10;
var h11;
var h12;
var h13;
var h14;

function submit008() {
	h24 = input090.value;
	h25 = input091.value;
	h26 = input092.value;
	h27 = input093.value;
	h28 = input094.value;
    h29 = input095.value;
    h30 = input096.value;
    h31 = input097.value;
    h32 = input098.value;
    h33 = input099.value;  
    h34 = input100.value;
    h35 = input101.value;
    h36 = input102.value;
    h37 = input103.value;


          if (h24 == "skulle" || h24 == "Skulle") {
	h1 = 1;
	input090.value = h24;
	check090.innerHTML = "<text class=button016>" + "✔" + "</text>";
} else {
	input090.value = h24;
	check090.innerHTML = "<text class=button016>" + "✘" + "</text>";
  }  


        if (h25 == "blandad" || h25 == "Blandad") {
	h2 = 1;
	input091.value = h25;
	check091.innerHTML = "<text class=button016>" + "✔" + "</text>";
} else {
	input091.value = h25;
	check091.innerHTML = "<text class=button016>" + "✘" + "</text>";
  } 


        if (h26 == "smälter" || h26 == "Smälter") {
	h3 = 1;
	input092.value = h26;
	check092.innerHTML = "<text class=button016>" + "✔" + "</text>";
} else {
	input092.value = h26;
	check092.innerHTML = "<text class=button016>" + "✘" + "</text>";
  } 


        if (h27 == "Ja" || h27 == "ja") {
	h4 = 1;
	input093.value = h27;
	check093.innerHTML = "<text class=button016>" + "✔" + "</text>";
} else {
	input093.value = h27;
	check093.innerHTML = "<text class=button016>" + "✘" + "</text>";
  } 


        if (h28 == "annat" || h28 == "Annat") {
	h5 = 1;
	input094.value = h28;
	check094.innerHTML = "<text class=button016>" + "✔" + "</text>";
} else {
	input094.value = h28;
	check094.innerHTML = "<text class=button016>" + "✘" + "</text>";
  } 


        if (h29 == "flaska" || h29 == "Flaska") {
	h6 = 1;
	input095.value = h29;
	check095.innerHTML = "<text class=button016>" + "✔" + "</text>";
} else {
	input095.value = h29;
	check095.innerHTML = "<text class=button016>" + "✘" + "</text>";
  } 

   
          if (h30 == "Ta" || h30 == "ta") {
	h7 = 1;
	input096.value = h30;
	check096.innerHTML = "<text class=button016>" + "✔" + "</text>";
} else {
	input096.value = h30;
	check096.innerHTML = "<text class=button016>" + "✘" + "</text>";
  } 



          if (h31 == "Ta" || h31 == "ta") {
	h8 = 1;
	input097.value = h31;
	check097.innerHTML = "<text class=button016>" + "✔" + "</text>";
} else {
	input097.value = h31;
	check097.innerHTML = "<text class=button016>" + "✘" + "</text>";
  } 



          if (h32 == "det" || h32 == "Det") {
	h9 = 1;
	input098.value = h32;
	check098.innerHTML = "<text class=button016>" + "✔" + "</text>";
} else {
	input098.value = h32;
	check098.innerHTML = "<text class=button016>" + "✘" + "</text>";
  } 
 


          if (h33 == "kontant" || h33 == "Kontant") {
	h10 = 1;
	input099.value = h33;
	check099.innerHTML = "<text class=button016>" + "✔" + "</text>";
} else {
	input099.value = h33;
	check099.innerHTML = "<text class=button016>" + "✘" + "</text>";
  } 


           if (h34 == "Naturligtvis" || h34 == "naturligtvis") {
	h11 = 1;
	input100.value = h34;
	check100.innerHTML = "<text class=button016>" + "✔" + "</text>";
} else {
	input100.value = h34;
	check100.innerHTML = "<text class=button016>" + "✘" + "</text>";
  } 


           if (h35 == "Här" || h35 == "här") {
	h12 = 1;
	input101.value = h35;
	check101.innerHTML = "<text class=button016>" + "✔" + "</text>";
} else {
	input101.value = h35;
	check101.innerHTML = "<text class=button016>" + "✘" + "</text>";
  } 



            if (h36 == "tillbaka" || h36 == "Tillbaka") {
	h13 = 1;
	input102.value = h36;
	check102.innerHTML = "<text class=button016>" + "✔" + "</text>";
} else {
	input102.value = h36;
	check102.innerHTML = "<text class=button016>" + "✘" + "</text>";
  } 



            if (h37 == "ses" || h37 == "Ses") {
	h14 = 1;
	input103.value = h37;
	check103.innerHTML = "<text class=button016>" + "✔" + "</text>";
} else {
	input103.value = h37;
	check103.innerHTML = "<text class=button016>" + "✘" + "</text>";
  } 




if (h1 == 1 && h2 == 1 && h3 == 1 && h4 == 1 && h5 == 1 && h6 == 1 && h7 == 1 && h8 == 1 && h9 == 1 && h10 == 1 && h11 == 1 && h12 == 1 && h13 == 1 && h14 == 1) {
	message008.innerHTML = "Congratulation! You have succesfully finished this quiz.";
	disappear008.innerHTML = "";
	reload008.innerHTML = "<div id=center015><button class=button015 onclick=repeat008()>Repeat</button></div>";

}

}

function repeat008() {
	location.reload();
}


////////////////////////////////GAME 9///////////////////////////////////////////////
var i1;
var i2;
var i3;
var i4;
var i5;
var i6;
var i7;
var i8;
var i9;
var i10;
var i11;
var i12;
var i13;
var i14;
var i15;


function submit009() {
	i16 = input104.value;
	i17 = input105.value;
	i18 = input106.value;
	i19 = input107.value;
	i20 = input108.value;
    i21 = input109.value;
    i22 = input110.value;
    i23 = input111.value;
    i24 = input112.value;
    i25 = input113.value;  
    i26 = input114.value;
    i27 = input115.value;
    i28 = input116.value;
    i29 = input117.value;
    i30 = input118.value;
    



          if (i16 == "kväll" || i16 == "Kväll") {
	i1 = 1;
	input104.value = i16;
	check104.innerHTML = "<text class=button018>" + "✔" + "</text>";
} else {
	input104.value = i16;
	check104.innerHTML = "<text class=button018>" + "✘" + "</text>";
  }  


        if (i17 == "bord" || i17 == "Bord") {
	i2 = 1;
	input105.value = i17;
	check105.innerHTML = "<text class=button018>" + "✔" + "</text>";
} else {
	input105.value = i17;
	check105.innerHTML = "<text class=button018>" + "✘" + "</text>";
  } 


        if (i18 == "nu" || i18 == "Nu") {
	i3 = 1;
	input106.value = i18;
	check106.innerHTML = "<text class=button018>" + "✔" + "</text>";
} else {
	input106.value = i18;
	check106.innerHTML = "<text class=button018>" + "✘" + "</text>";
  } 


        if (i19 == "vi" || i19 == "Vi") {
	i4 = 1;
	input107.value = i19;
	check107.innerHTML = "<text class=button018>" + "✔" + "</text>";
} else {
	input107.value = i19;
	check107.innerHTML = "<text class=button018>" + "✘" + "</text>";
  } 


        if (i20 == "beställa" || i20 == "Beställa") {
	i5 = 1;
	input108.value = i20;
	check108.innerHTML = "<text class=button018>" + "✔" + "</text>";
} else {
	input108.value = i20;
	check108.innerHTML = "<text class=button018>" + "✘" + "</text>";
  } 


        if (i21 == "kyckling" || i21 == "Kyckling") {
	i6 = 1;
	input109.value = i21;
	check109.innerHTML = "<text class=button018>" + "✔" + "</text>";
} else {
	input109.value = i21;
	check109.innerHTML = "<text class=button018>" + "✘" + "</text>";
  } 

   
          if (i22 == "Njut" || i22 == "njut") {
	i7 = 1;
	input110.value = i22;
	check110.innerHTML = "<text class=button018>" + "✔" + "</text>";
} else {
	input110.value = i22;
	check110.innerHTML = "<text class=button018>" + "✘" + "</text>";
  } 



          if (i23 == "tack" || i23 == "Tack") {
	i8 = 1;
	input111.value = i23;
	check111.innerHTML = "<text class=button018>" + "✔" + "</text>";
} else {
	input111.value = i23;
	check111.innerHTML = "<text class=button018>" + "✘" + "</text>";
  } 



          if (i24 == "annat" || i24 == "Annat") {
	i9 = 1;
	input112.value = i24;
	check112.innerHTML = "<text class=button018>" + "✔" + "</text>";
} else {
	input112.value = i24;
	check112.innerHTML = "<text class=button018>" + "✘" + "</text>";
  } 
 


          if (i25 == "få" || i25 == "Få") {
	i10 = 1;
	input113.value = i25;
	check113.innerHTML = "<text class=button018>" + "✔" + "</text>";
} else {
	input113.value = i25;
	check113.innerHTML = "<text class=button018>" + "✘" + "</text>";
  } 


           if (i26 == "det" || i26 == "Det") {
	i11 = 1;
	input114.value = i26;
	check114.innerHTML = "<text class=button018>" + "✔" + "</text>";
} else {
	input114.value = i26;
	check114.innerHTML = "<text class=button018>" + "✘" + "</text>";
  } 


           if (i27 == "betala" || i27 == "Betala") {
	i12 = 1;
	input115.value = i27;
	check115.innerHTML = "<text class=button018>" + "✔" + "</text>";
} else {
	input115.value = i27;
	check115.innerHTML = "<text class=button018>" + "✘" + "</text>";
  } 



            if (i28 == "hoppas" || i28 == "Hoppas") {
	i13 = 1;
	input116.value = i28;
	check116.innerHTML = "<text class=button018>" + "✔" + "</text>";
} else {
	input116.value = i28;
	check116.innerHTML = "<text class=button018>" + "✘" + "</text>";
  } 



            if (i29 == "Det" || i29 == "det") {
	i14 = 1;
	input117.value = i29;
	check117.innerHTML = "<text class=button018>" + "✔" + "</text>";
} else {
	input117.value = i29;
	check117.innerHTML = "<text class=button018>" + "✘" + "</text>";
  } 


            if (i30 == "också" || i30 == "Också") {
	i15 = 1;
	input118.value = i30;
	check118.innerHTML = "<text class=button018>" + "✔" + "</text>";
} else {
	input118.value = i30;
	check118.innerHTML = "<text class=button018>" + "✘" + "</text>";
  }
  

 
if (i1 == 1 && i2 == 1 && i3 == 1 && i4 == 1 && i5 == 1 && i6 == 1 && i7 == 1 && i8 == 1 && i9 == 1 && i10 == 1 && i11 == 1 && i12 == 1 && i13 == 1 && i14 == 1 && i15 == 1) {
	message009.innerHTML = "Congratulation! You have succesfully finished this quiz.";
	disappear009.innerHTML = "";
	reload009.innerHTML = "<div id=center017><button class=button017 onclick=repeat009()>Repeat</button></div>";

}

}

function repeat009() {
	location.reload();
}
