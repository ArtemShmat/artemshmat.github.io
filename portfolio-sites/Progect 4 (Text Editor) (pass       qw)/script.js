function getID(a) {
	return document.getElementById(a);
}
getID("change").onclick = function(){
	getID("ta").classList.toggle('holder-show');
    var x = document.getElementById('pHolder').innerHTML;
    document.getElementById('pHolder1').value = x;
}
getID("save").onclick = function(){
    var x = document.getElementById('pHolder1').value;
    document.getElementById('pHolder').innerHTML = x;
	getID("ta").classList.toggle('holder-show');
}
//-------------------------------розмір шрифту----------------------------------------------------
getID("style").onclick = function(){
	getID("lay2").classList.toggle("layer2-show");
}
getID('rad1').onclick = function() {
	getID('pHolder').style.fontSize = '12px';
}
getID('rad2').onclick = function() {
	getID('pHolder').style.fontSize = '14px';
}
getID('rad3').onclick = function() {
	getID('pHolder').style.fontSize = '16px';
}
getID('rad4').onclick = function() {
	getID('pHolder').style.fontSize = '18px';
}
getID('rad5').onclick = function() {
	getID('pHolder').style.fontSize = '20px';
}
//-------------------------------вид шрифту----------------------------------------------------
getID("font").onchange = function () {
				for (var i = 0; i < this.children.length; i++) {
					if (this.children[i].selected) {
						getID("pHolder").style.fontFamily = this.children[i].innerHTML;
					}
				}
			}
//-------------------------------колір тексту і заливка фону----------------------------------------------------
getID("colText").onclick = function(){ 
    getID("firstSQ").classList.toggle("firstSquare-show");
                                     }
getID('fS1').onclick = function() {
	getID('pHolder').style.color = 'aqua';
}
getID('fS2').onclick = function() {
	getID('pHolder').style.color = 'brown';
}
getID('fS3').onclick = function() {
	getID('pHolder').style.color = 'palegreen';
}
getID('fS4').onclick = function() {
	getID('pHolder').style.color = 'greenyellow';
}
getID('fS5').onclick = function() {
	getID('pHolder').style.color = 'peachpuff';
}
getID('fS6').onclick = function() {
	getID('pHolder').style.color = 'red';
}
getID('fS7').onclick = function() {
	getID('pHolder').style.color = 'blue';
}
getID('fS8').onclick = function() {
	getID('pHolder').style.color = 'violet';
}
getID('fS9').onclick = function() {
	getID('pHolder').style.color = 'yellow';
}
getID("colBag").onclick = function(){ getID("secondSQ").classList.toggle("secondSquare-show");
                                    }
getID('sS1').onclick = function() {
	getID('lev1-1').style.background = 'aqua';
}
getID('sS2').onclick = function() {
	getID('lev1-1').style.background = 'brown';
}
getID('sS3').onclick = function() {
	getID('lev1-1').style.background = 'palegreen';
}
getID('sS4').onclick = function() {
	getID('lev1-1').style.background = 'greenyellow';
}
getID('sS5').onclick = function() {
	getID('lev1-1').style.background = 'peachpuff';
}
getID('sS6').onclick = function() {
	getID('lev1-1').style.background = 'red';
}
getID('sS7').onclick = function() {
	getID('lev1-1').style.background = 'blue';
}
getID('sS8').onclick = function() {
	getID('lev1-1').style.background = 'violet';
}
getID('sS9').onclick = function() {
	getID('lev1-1').style.background = 'yellow';
}
var fw = document.forms.f4;
	fw.firstCheck.onclick = function() {
		if(this.checked) {
			getID('pHolder').style.fontWeight = 'bold';
		}
		else {getID('pHolder').style.fontWeight = 'normal';}
    }
var fs = document.forms.f4;
	fs.secondCheck.onclick = function() {
		if(this.checked) {
			getID('pHolder').style.fontStyle = 'italic';
		}
		else {getID('pHolder').style.fontStyle = 'normal';}
    }
getID("add").onclick = function(){
	getID("cont-2").classList.toggle("cont2-show");
}
getID("add").onclick = function(){
	getID("cont-2").classList.toggle("cont2-show");
}
//----------------------------------створення сторінки де можна створити таблицю-------------------

getID("rd2").onclick = function(){
	getID("li").classList.add("cont-2-third-2-show")
}
getID("rd1").onclick = function(){
	getID("li").classList.remove("cont-2-third-2-show")
}

//------------------------------створення таблиці---------------------------------------------
getID('butTab').onclick = function () {
            var row = document.getElementById('textRow').value;
            var tborder = document.getElementById('border1').value;
            var tborderline = document.getElementById('selType').value;
            var tborderColor = document.getElementById('selColor').value;
			var cols = document.getElementById('textCol').value;
                var tdWidth = document.getElementById('textWrite').value;
				var tdHeight = document.getElementById('colHeight').value;
				var table = document.createElement('table');
				var text = document.getElementById('text').value;
				for (var i = 1; i <= row; i++) {
					var tr = document.createElement('tr');
					for (var j = 1; j <= cols; j++) {
						var td = document.createElement('td');
						td.width = tdWidth + "px";
                        td.height = tdHeight + "px";
                        td.style.borderWidth = tborder+'px';
                        td.style.borderStyle = tborderline;
                        td.style.borderColor = tborderColor;
						td.textContent = text;
						tr.appendChild(td);
					}
					table.appendChild(tr);
				}
				getID('pHolder').appendChild(table);
				getID('cont-2').classList.remove("cont2-show");
}
//--------------------------------------------створення списку---------------------------------------
getID('butLi').onclick = function () {
			var list = document.getElementById('countList').value;
			var type = document.getElementById('typeList').value;
			var ul = document.createElement('ul');
			for (var i = 1; i <= list; i++) {
				var li = document.createElement('li');
				li.type = type;
				li.textContent = 'Element ' + i;
				ul.appendChild(li);
			}
			getID('pHolder').appendChild(ul);
			getID('cont-2').classList.remove("cont2-show");
		}
//--------------------------------------------функціонал входу на сайт---------------------------------------
  getID('enter').onclick = function () {
    var pass = document.getElementById('pass').value;
       if(pass=="qw") {
           getID("login").classList.add("Login-close");
           getID("logPass").classList.add("Login-close");
       }
        else {  
             getID("WrongPass").classList.add("wrongPass-show");
        }
    }