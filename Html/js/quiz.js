var question001 = ["Q1: How do you say Yellow in Swedish?"];
var choises001 = ["<input onclick=incorrect001() name=button001 type=radio />Röd<br/> <input onclick=correct001() name=button001 type=radio />Gul<br/> <input onclick=incorrect001() name=button001 type=radio />Vit<br />"];

var question002 = ["Q2: How do you say Thursday in Swedish"];
var choises002 = ["<input onclick=incorrect002() name=button002 type=radio />Onsdag<br/> <input onclick=incorrect002() name=button002 type=radio />Sundag<br/> <input onclick=correct002() name=button002 type=radio />Torsdag<br />"];

var question003 = ["Q3: How do you say It Is Nine O'Clock in Swedish"];
var choises003 = ["<input onclick=correct003() name=button003 type=radio />Klockan är nio<br/> <input onclick=incorrect003() name=button003 type=radio />Klockan är halv två<br/> <input onclick=incorrect003() name=button003 type=radio />Klockan är ett<br />"];

var question004 = ["Q4: What is Hello in Swedish?"];
var choises004 = ["<input onclick=correct004() name=button004 type=radio />Hej<br/> <input onclick=incorrect004() name=button004 type=radio />Hej då<br/> <input onclick=incorrect004() name=button004 type=radio />Välkommen<br />"];

var question005 = ["Q5: What is Thirteen in Swedish?"]
var choises005 = ["<input onclick=incorrect005() name=button005 type=radio />ett<br/> <input onclick=correct005() name=button005 type=radio />tretton<br/> <input onclick=incorrect005() name=button005 type=radio />tjugo<br />"];

var question006 = ["Q6: What is the 3rd letter in the Swedish Alphabet?"];
var choises006 = ["<input onclick=incorrect006() name=button006 type=radio />F<br/> <input onclick=correct006() name=button006 type=radio />C<br/> <input onclick=incorrect006() name=button006 type=radio />Z<br />"];

var question007 = ["Q7: Which letters are different from the English Alphabet?"];
var choises007 = ["<input onclick=correct007() name=button007 type=radio />Å, Ä, Ö<br/> <input onclick=incorrect007() name=button007 type=radio />R, Z, Q<br/> <input onclick=incorrect007() name=button007 type=radio />P, L, K<br />"];

var question008 = ["Q8: How do you ask someone's Name in Swedish?"];
var choises008 = ["<input onclick=incorrect008() name=button008 type=radio />Hur mår du?<br/> <input onclick=correct008() name=button008 type=radio />Vad heter du?<br/> <input onclick=incorrect008() name=button008 type=radio />Bra, tack<br />"];

var question009 = ["Q9: How do you say Several Forks in Swedish?"];
var choises009 = ["<input onclick=incorrect009() name=button009 type=radio />Flera lampor<br/> <input onclick=correct009() name=button009 type=radio />Flera gafflar<br/> <input onclick=incorrect009() name=button009 type=radio />En gaffel<br />"];

var question010 = ["Q10: How do you say June in Swedish?"];
var choises010 = ["<input onclick=incorrect010() name=button0010 type=radio />September<br/> <input onclick=incorrect010() name=button010 type=radio />Blå<br/> <input onclick=correct010() name=button010 type=radio />Juni<br />"];

var a;
var b;
var d;
var e;
var f;
var g;
var h;
var i;
var j;
var k;
var c;
 
///////////
window.addEventListener('load', function(){
  a = 0;
message001.innerHTML = question001;
options001.innerHTML = choises001;
click001.innerHTML = "<button onclick=set002()>Submit</button";                                  
});

function correct001() {
  a = 1;
}

function incorrect001(){
  a = 0;

}
//////
function set002(){
  b = 0;
  message001.innerHTML = question002;
  options001.innerHTML = choises002;
  click001.innerHTML = "<button onclick=set003()>Next</button>";
}

function correct002(){
  b = 1;
}

function incorrect002(){
  b = 0;
}
//////
function set003(){
  d = 0;
  message001.innerHTML = question003;
  options001.innerHTML = choises003;
  click001.innerHTML = "<button onclick=set004()>Next</button>";
}

function correct003(){
  d = 1;
}

function incorrect003(){
  d = 0;
}

//////
function set004(){
  e = 0;
  message001.innerHTML = question004;
  options001.innerHTML = choises004;
  click001.innerHTML = "<button onclick=set005()>Next</button>";
}

function correct004(){
  e = 1;
}

function incorrect004(){
  e = 0;
}
//////
function set005(){
  f = 0;
  message001.innerHTML = question005;
  options001.innerHTML = choises005;
  click001.innerHTML = "<button onclick=set006()>Next</button>";
}

function correct005(){
  f = 1;
}

function incorrect005(){
  f = 0;
}

//////
function set006(){
  g = 0;
  message001.innerHTML = question006;
  options001.innerHTML = choises006;
  click001.innerHTML = "<button onclick=set007()>Next</button>";
}

function correct006(){
  g = 1;
}

function incorrect006(){
  g = 0;
}
//////

function set007(){
  h = 0;
  message001.innerHTML = question007;
  options001.innerHTML = choises007;
  click001.innerHTML = "<button onclick=set008()>Next</button>";
}

function correct007(){
  h = 1;
}

function incorrect007(){
  h = 0;
}

//////
function set008(){
  i = 0;
  message001.innerHTML = question008;
  options001.innerHTML = choises008;
  click001.innerHTML = "<button onclick=set009()>Next</button>";
}

function correct008(){
  i = 1;
}

function incorrect008(){
  i = 0;
}

//////

function set009(){
  j = 0;
  message001.innerHTML = question009;
  options001.innerHTML = choises009;
  click001.innerHTML = "<button onclick=set010()>Next</button>";
}

function correct009(){
  j = 1;
}

function incorrect009(){
  j = 0;
}

//////

function set010(){
  k = 0;
  message001.innerHTML = question010;
  options001.innerHTML = choises010;
  click001.innerHTML = "<button onclick=result001()>Score</button>";
}


function correct010(){
  k = 1;
}

function incorrect010(){
  k = 0;
}

//////
function result001(){
  c = a + b + d + e + f + g + h + i + j + k;
  message001.innerHTML = "End of Quiz";
  options001.innerHTML = "";
  click001.innerHTML = "";
  comment001.innerHTML = "Congratulations! Your score is: " + c;
  comment002.innerHTML = "If you scored lower than 2, please keep practising";
  
}

///////////////////////////////////START 2ND QUIZ/////////////////


var question011 = ["Q11: Translate: I am a woman"];
var choises011 = ["<input onclick=incorrect011() name=button011 type=radio />Hon är min granne<br/> <input onclick=correct011() name=button011 type=radio />Jag är en kvinna<br/> <input onclick=incorrect011() name=button011 type=radio />Han går till skolan<br />"];

var question012 = ["Q12: Translate: We"];
var choises012 = ["<input onclick=incorrect012() name=button012 type=radio />Jag<br/> <input onclick=incorrect012() name=button012 type=radio />Ni<br/> <input onclick=correct012() name=button012 type=radio />Vi<br />"];

var question013 = ["Q13: Translate: Where (to)..?"];
var choises013 = ["<input onclick=correct013() name=button013 type=radio />Vart..?<br/> <input onclick=incorrect013() name=button013 type=radio />Var..?<br/> <input onclick=incorrect013() name=button013 type=radio />Varifrån..?<br />"];

var question014 = ["Q14: Translate: How much is that car?"];
var choises014 = ["<input onclick=correct014() name=button014 type=radio />Hur mycket är den bilen?<br/> <input onclick=incorrect014() name=button014 type=radio />När ska du gå i skolan?<br/> <input onclick=incorrect014() name=button014 type=radio />Hur många bilar har du?<br />"];

var question015 = ["Q15: Translate: At work."];
var choises015 = ["<input onclick=incorrect015() name=button015 type=radio />I kyrkan.<br/> <input onclick=correct015() name=button015 type=radio />På arbetet.<br/> <input onclick=incorrect015() name=button015 type=radio />På banken.<br />"];

var question016 = ["Q16: Translate: The lamp stands on the bureau."];
var choises016 = ["<input onclick=incorrect016() name=button016 type=radio />Lampan hänger i taket.<br/> <input onclick=correct016() name=button016 type=radio />Lampan står på byrån<br/> <input onclick=incorrect016() name=button016 type=radio />Lampan står på golvet.<br />"];

var question017 = ["Q17: Translate: Cry, Crying, Cried."];
var choises017 = ["<input onclick=correct017() name=button017 type=radio />Gråta, Gråter, Grät.<br/> <input onclick=incorrect017() name=button017 type=radio />Blåsa, Blåser, Blåste<br/> <input onclick=incorrect017() name=button017 type=radio />Ramla, Ramlar, Ramlade.<br />"];

var question018 = ["Q18: En or Ett - An Apple"];
var choises018 = ["<input onclick=incorrect018() name=button018 type=radio />En äpple<br/> <input onclick=correct018() name=button018 type=radio />Ett äpple<br/> <input onclick=incorrect018() name=button018 type=radio />Äpplena<br />"];

var question019 = ["Q19: Translate: The painting"];
var choises019 = ["<input onclick=incorrect019() name=button019 type=radio />En tavla<br/> <input onclick=correct019() name=button019 type=radio />Tavlan<br/> <input onclick=incorrect019() name=button019 type=radio />Tavlor<br />"];

var question020 = ["Q20: Translate: The eyes"];
var choises020 = ["<input onclick=incorrect020() name=button020 type=radio />Ögat<br/> <input onclick=incorrect020() name=button020 type=radio />Öga<br/> <input onclick=correct020() name=button020 type=radio />Ögonen<br />"];

var l;
var m;
var o;
var p;
var q;
var r;
var s;
var t;
var u;
var v;
var n;
///////////
window.addEventListener('load', function(){
  l = 0;
message002.innerHTML = question011;
options002.innerHTML = choises011;
click002.innerHTML = "<button onclick= set012()>Submit</button";                                  
});

function correct011() {
  l = 1;
}

function incorrect011(){
  l = 0;

}
//////
function set012(){
  m = 0;
  message002.innerHTML = question012;
  options002.innerHTML = choises012;
  click002.innerHTML = "<button onclick=set013()>Next</button>";
}

function correct012(){
  m = 1;
}

function incorrect012(){
  m = 0;
}
//////
function set013(){
  o = 0;
  message002.innerHTML = question013;
  options002.innerHTML = choises013;
  click002.innerHTML = "<button onclick=set014()>Next</button>";
}

function correct013(){
  o = 1;
}

function incorrect013(){
  o = 0;
}

//////
function set014(){
  p = 0;
  message002.innerHTML = question014;
  options002.innerHTML = choises014;
  click002.innerHTML = "<button onclick=set015()>Next</button>";
}

function correct014(){
  p = 1;
}

function incorrect014(){
  p = 0;
}
//////
function set015(){
  q = 0;
  message002.innerHTML = question015;
  options002.innerHTML = choises015;
  click002.innerHTML = "<button onclick=set016()>Next</button>";
}

function correct015(){
  q = 1;
}

function incorrect015(){
  q = 0;
}

//////
function set016(){
  r = 0;
  message002.innerHTML = question016;
  options002.innerHTML = choises016;
  click002.innerHTML = "<button onclick=set017()>Next</button>";
}

function correct016(){
  r = 1;
}

function incorrect016(){
  r = 0;
}
//////

function set017(){
  s = 0;
  message002.innerHTML = question017;
  options002.innerHTML = choises017;
  click002.innerHTML = "<button onclick=set018()>Next</button>";
}

function correct017(){
  s = 1;
}

function incorrect017(){
  s = 0;
}

//////
function set018(){
  t = 0;
  message002.innerHTML = question018;
  options002.innerHTML = choises018;
  click002.innerHTML = "<button onclick=set019()>Next</button>";
}

function correct018(){
  t = 1;
}

function incorrect018(){
  t = 0;
}

//////

function set019(){
  u = 0;
  message002.innerHTML = question019;
  options002.innerHTML = choises019;
  click002.innerHTML = "<button onclick=set020()>Next</button>";
}

function correct019(){
  u = 1;
}

function incorrect019(){
  u = 0;
}

//////

function set020(){
  v = 0;
  message002.innerHTML = question020;
  options002.innerHTML = choises020;
  click002.innerHTML = "<button onclick=result0003()>Score</button>";
}


function correct020(){
  v = 1;
}

function incorrect020(){
  v = 0;
}

//////
function result0003(){
  n = l + m + o + p + q + r + s + t + u + v;
  message002.innerHTML = "End of Quiz";
  options002.innerHTML = "";
  click002.innerHTML = "";
  comment003.innerHTML = "Congratulations! Your score is: " + n;
  comment004.innerHTML = "If you scored lower than 2, please keep practising";  
}
//////////////////////////////