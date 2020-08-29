var gg;
var hh;
var ii;
var jj;
var kk;
var ll;
var mm;
var nn;


function submit001() {
	b = input001.value;
	c = input002.value;
	d = input003.value;
	e = input004.value;
	f = input005.value;
	g = input006.value;
	h = input007.value;
	i = input008.value;



if (b == "heter" || b == "Heter") {
	gg = 1;
	input001.value = b;
	check001.innerHTML = "<text class=button002>" + "✔" + "</text>";
} else {
	input001.value = b;
	check001.innerHTML = "<text class=button002>" + "✘" + "</text>";
  }

  
if (c == "Trevligt" || c == "trevligt") {
   hh = 1;
	input002.value = c;
	check002.innerHTML = "<text class=button002>" + "✔" + "</text>";
} else {
	input002.value = c;
	check002.innerHTML = "<text class=button002>" + "✘" + "</text>";
  }


if (d == "Bor" || d == "bor") {
	ii = 1;
	input003.value = d;
	check003.innerHTML = "<text class=button002>" + "✔" + "</text>";
} else {
	input003.value = d;
	check003.innerHTML = "<text class=button002>" + "✘" + "</text>";
  }

  if (e == "från" || e == "Från") {
	jj = 1;
	input004.value = e;
	check004.innerHTML = "<text class=button002>" + "✔" + "</text>";
} else {
	input004.value = e;
	check004.innerHTML = "<text class=button002>" + "✘" + "</text>";
  }

  if (f == "Svensk" || f == "svensk") {
	kk = 1;
	input005.value = f;
	check005.innerHTML = "<text class=button002>" + "✔" + "</text>";
} else {
	input005.value = f;
	check005.innerHTML = "<text class=button002>" + "✘" + "</text>";
  }

  if (g == "Måste" || g == "måste") {
	ll = 1;
	input006.value = g;
	check006.innerHTML = "<text class=button002>" + "✔" + "</text>";
} else {
	input006.value = g;
	check006.innerHTML = "<text class=button002>" + "✘" + "</text>";
  }

  if (h == "hej" || h == "Hej") {
	mm = 1;
	input007.value = h;
	check007.innerHTML = "<text class=button002>" + "✔" + "</text>";
} else {
	input007.value = h;
	check007.innerHTML = "<text class=button002>" + "✘" + "</text>";
  }   
 
  if (i == "då" || i == "Då") {
	nn = 1;
	input008.value = i;
	check008.innerHTML = "<text class=button002>" + "✔" + "</text>";
} else {
	input008.value = i;
	check008.innerHTML = "<text class=button002>" + "✘" + "</text>";
  }   
 

if (gg == 1 && hh == 1 && ii == 1 && jj == 1 && kk == 1 && ll == 1 && mm == 1 && nn == 1) {
	message001.innerHTML = "Congratulation! You have succesfully finished this quiz.";
	disappear001.innerHTML = "";
	reload001.innerHTML = "<div id=center001><button class=button001 onclick=repeat001()>Repeat</button></div>";

}

}

function repeat001() {
	location.reload();
}

