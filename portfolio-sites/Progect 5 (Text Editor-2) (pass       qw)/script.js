window.onload = function () {
		function getID(a) {
			return document.getElementById(a);
		} 
//-------------------------------------------вставка графічного файла -----------------------------------------
    getID('file').addEventListener('change', readURL, true);
    function readURL(){
        var file = getID('file').files[0];
        var reader = new FileReader();
        reader.onloadend=function(){
            getID('cont-2-1').style.backgroundImage="url("+reader.result+")"
        }
        if (file) {
            reader.readAsDataURL(file);
        } else {}
    }
//--------------------------------------------------------------------------------------------------------------------------------
//-----------------------------------форма паролю-------------------------------------------------------------------------------    
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
//--------------------------функціонал кнопки реіет у формах------------------------------------------------------------------------------------------------------
document.getElementById('reset').onclick = function(){
    document.getElementById('borderColor').value = "";
    document.getElementById('row').value = "";
    document.getElementById('col').value = "";
    document.getElementById('weight').value = "";
    document.getElementById('height').value = "";
    document.getElementById('Cellspasing').value = "";
    document.getElementById('text').value = "";
    document.getElementById('border').value = "";
    document.getElementById('border').value = "";
}
document.getElementById('reset2').onclick = function(){
    document.getElementById('clist').value = "";
}
document.getElementById('reset3').onclick = function(){
    document.getElementById('clist22').value = "";
}
//--------------------------задання стилю в основному вікні------------------------------------------------------------------------------------------------------
		getID('bold').onclick = function () {
			getID('p').classList.toggle('p-bold');
		}
		getID('italic').onclick = function () {
			getID('p').classList.toggle('p-italic');
		}
		getID('u').onclick = function () {
			getID('p').classList.toggle('p-underline');
		}
		getID("size").onchange = function () {
			for (var i = 0; i < this.children.length; i++) {
				if (this.children[i].selected) {
					getID("p").style.fontSize = this.children[i].innerHTML;
				}
			}
		}
		getID("font").onchange = function () {
				for (var i = 0; i < this.children.length; i++) {
					if (this.children[i].selected) {
						getID("p").style.fontFamily = this.children[i].innerHTML;
					}
				}
			}
// ---------------------таблиця з кольором-----------------------
		getID("color").onclick = function () {
			getID("colorMain").classList.add("firstTabShow");
			getID("layout").classList.add("layout-show"); 
		}
        getID("layout").onclick = function () {
			getID("layout").classList.remove("layout-show");
		}
		getID("col1").onclick = function () {
			getID("p").className = "col11";
		}
		getID("col2").onclick = function () {
			getID("p").className = "col21";
		}
		getID("col3").onclick = function () {
			getID("p").className = "col31";
		}
		getID("col4").onclick = function () {
			getID("p").className = "col41";
		}
		getID("col5").onclick = function () {
			getID("p").className = "col51";
		}
		getID("col6").onclick = function () {
			getID("p").className = "col61";
		}
		getID("col7").onclick = function () {
			getID("p").className = "col71";
		}
		getID("col8").onclick = function () {
			getID("p").className = "col81";
		}
		getID("col9").onclick = function () {
            getID("p").className = "col91";
			}
//------------------------таблиця з фоном----------------------------------------
		getID("col1-1").onclick = function () {
			getID("cont-2-1").className = "col1";
		}
		getID("col2-1").onclick = function () {
			getID("cont-2-1").className = "col2";
		}
		getID("col3-1").onclick = function () {
			getID("cont-2-1").className = "col3";
		}
		getID("col4-1").onclick = function () {
			getID("cont-2-1").className = "col4";
		}
		getID("col5-1").onclick = function () {
			getID("cont-2-1").className = "col5";
		}
		getID("col6-1").onclick = function () {
			getID("cont-2-1").className = "col6";
		}
		getID("col7-1").onclick = function () {
			getID("cont-2-1").className = "col7";
		}
		getID("col8-1").onclick = function () {
			getID("cont-2-1").className = "col8";
		}
		getID("col9-1").onclick = function () {
				getID("cont-2-1").className = "col9";
        }
        getID("bagImage").onclick = function () {
				getID("bagFon").classList.add("bagFon-show");
                getID("bagMain").classList.remove("bagMain-show");
            getID("layout2").classList.add("layout-show");
        }
//--------------------таблиця з картинками фоном--------------------------------------
		getID("bag").onclick = function () {
			getID("bagMain").classList.add("bagMain-show");
            getID("layout1").classList.add("layout-show"); 
		}
        getID("layout1").onclick = function () {
			getID("layout1").classList.remove("layout-show");
		}
        getID("layout2").onclick = function () {
			getID("layout2").classList.remove("layout-show");
		}
        getID("BI-1").onclick = function () {
			getID("cont-2-1").className = "BI1";
		}
		getID("BI-2").onclick = function () {
			getID("cont-2-1").className = "BI2";
		}
		getID("BI-3").onclick = function () {
			getID("cont-2-1").className = "BI3";
		}
		getID("BI-4").onclick = function () {
			getID("cont-2-1").className = "BI4";
		}
		getID("BI-5").onclick = function () {
			getID("cont-2-1").className = "BI5";
		}
		getID("BI-6").onclick = function () {
			getID("cont-2-1").className = "BI6";
		}
		getID("BI-7").onclick = function () {
			getID("cont-2-1").className = "BI7";
		}
		getID("BI-8").onclick = function () {
			getID("cont-2-1").className = "BI8";
		}
		getID("BI-9").onclick = function () {
			getID("cont-2-1").className = "BI9";
		}
        getID("bagColor").onclick = function () {
			getID("bagFon").classList.remove("bagFon-show");
			getID("layout2").classList.add("layout-show");
			getID("layout1").classList.add("layout-show");
            getID("bagMain").classList.add("bagMain-show");
		}
//-------------------------функціонал копіювання в нове вікно----------------------------------------------
		getID('edit1').onclick = function () {
			getID('some1').classList.toggle("cont-2-2-show");
			var x = document.getElementById('p').innerHTML;
			document.getElementById('tA').value = x;
		}
		getID("save").onclick = function () {
				var x = document.getElementById('tA').value;
				document.getElementById('p').innerHTML = x;
				getID('some1').classList.remove("cont-2-2-show");
			}
//---------------------------вирівнювання тексту-----------------------
		getID('rad1').onclick = function () {
			getID('p').style.textAlign = 'left';
		}
		getID('rad2').onclick = function () {
			getID('p').style.textAlign = 'center';
		}
		getID('rad3').onclick = function () {
				getID('p').style.textAlign = 'right';
			}
//--------------------------------вікно для редагування---------------------------------------------------------------------
        getID('edit1').onclick = function () {
			getID('newContainer').classList.add("newContainer1-show");
			var x = document.getElementById('p').innerHTML;
			document.getElementById('tA').value = x;
		}
		getID("save").onclick = function () {
				var x = document.getElementById('tA').value;
				document.getElementById('p').innerHTML = x;
				getID('newContainer').classList.remove("newContainer1-show");
			}
//--------------------таблиця---------------------
       getID("createTable").onclick = function () {
			getID("boxTable").classList.toggle("boxTableS");
		} 
		getID('creat').onclick = function () {
            var row = document.getElementById('row').value;
			var tborder = document.getElementById('border').value;
			var tborderline = document.getElementById('border').value;
			var tborderColor = document.getElementById('borderColor').value;
			var cols = document.getElementById('col').value;
				var tdWidth = document.getElementById('weight').value;
				var tdHeight = document.getElementById('height').value;
				var table = document.createElement('table');
//            table.style.cellspacing="50"
//			table.classList.add('ggg');
				var text = document.getElementById('text').value;
				for (var i = 1; i <= row; i++) {
					var tr = document.createElement('tr');
					for (var j = 1; j <= cols; j++) {
						var td = document.createElement('td');
						td.width = tdWidth + "px";
                        td.height = tdHeight + "px";
                        td.style.borderWidth = tborderline+'px';
                        td.style.borderStyle = ('solid');
                        td.style.borderColor = tborderColor;
						td.textContent = text;
						tr.appendChild(td);
					}
					table.appendChild(tr);
				}
				getID('p').appendChild(table);
				getID('boxTable').classList.remove("boxTableS");
                getID('newContainer').classList.remove("newContainer1-show");
			}
//---------------------------------список--------------------------
		 getID("createlId").onclick = function () {
			getID("olOrUl").classList.add("olOrUl-show");
		}     
         getID("ulBtn").onclick = function () {
			getID("cList2").classList.add("cList2-show");
			getID("olOrUl").classList.remove("olOrUl-show"); 
		} 
          getID("olBtn").onclick = function () {
			getID("cList1").classList.add("cList-show");
			getID("olOrUl").classList.remove("olOrUl-show"); 
		} 
//-------------------для ol--------------------------------------------------------------
        getID('create2').onclick = function () {
			var list = document.getElementById('clist').value;
			var type = document.getElementById('type').value;
            
			var ol = document.createElement('ol');
			for (var i = 1; i <= list; i++) {
				var li = document.createElement('li');
				li.type = type;
				li.textContent = 'Element ' + i;
				ol.appendChild(li);
			}
			getID('p').appendChild(ol);
			 getID('create2').classList.remove("cList-show");
             getID("cList1").classList.remove("cList-show");
		     getID('newContainer').classList.remove("newContainer1-show");
		}
	
//---------------ul--------------------------------------------------------
getID('create22').onclick = function () {
			var list = document.getElementById('clist22').value;
			var type = document.getElementById('type2').value;
            
			var ul = document.createElement('ul');
			for (var i = 1; i <= list; i++) {
				var li = document.createElement('li');
				li.type = type;
				li.textContent = 'Element ' + i;
				ul.appendChild(li);
			}
			getID('p').appendChild(ul);
			 getID('cList2').classList.remove("cList2-show");
		     getID('newContainer').classList.remove("newContainer1-show");
		}
	}