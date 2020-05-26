var question001 = ["Q1: How do you say Yellow in Swedish?"];
var choises001 = ["<input onclick=incorrect001() name=button001 type=radio />Röd<br/> <input onclick=correct001() name=button001 type=radio />Gul<br/> <input onclick=incorrect001() name=button001 type=radio />Vit<br />"];

var question002 = ["Q2: How do you say Thursday in Swedish"];
var choises002 = ["<input onclick=incorrect002() name=button002 type=radio />Onsdag<br/> <input onclick=incorrect002() name=button002 type=radio />Sundag<br/> <input onclick=correct002() name=button002 type=radio />Torsdag<br />"];

var question003 = ["Q3: How do you say It Is Nine O'Clock in Swedish"];
var choises003 = ["<input onclick=correct003() name=button003 type=radio />Klockan är nio<br/> <input onclick=incorrect003() name=button003 type=radio />Klockan är halv två<br/> <input onclick=incorrect003() name=button003 type=radio />Klockan är ett<br />"];

var question004 = ["Q4: What is Hello in Swedish?"];
var choises004 = ["<input onclick=correct004() name=button004 type=radio />Hej<br/> <input onclick=incorrect005() name=button004 type=radio />Hej då<br/> <input onclick=incorrect004() name=button004 type=radio />Välkommen<br />"];

var question005 = ["Q5: What is Thirteen in Swedish?"];
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


window.onload = function(){
  a = 0;
message001.innerHTML = question001;
options001.innerHTML = choises001;
click001.innerHTML = "<button onclick=set002()>Submit</button";                                  
}

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