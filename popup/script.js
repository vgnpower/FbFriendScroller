var dwnld_csv = function(csv, filename){
	var data = "data:text/csv;charset=utf-8," + encodeURIComponent(csv);
	var link = document.createElement("a");
	
	link.download = filename;
	link.href = data;

	document.body.appendChild(link);
	link.click();
	document.body.removeChild(link);
	delete link;
}

var getCsv = function(){
	var nodi = document.querySelectorAll('ul[class^="uiList _262m"] li[class="_698"] div[class="clearfix _42ef"] div[class="uiProfileBlockContent"] div[class="_6a"] div[class="_6a _6b"] div[class="fsl fwb fcb"] a');
	var csv = 'Nome,link\n';

	for(var i = 0; i < nodi.length; i++)
	{
		var linkprofilo = nodi[i].href.substring(0, nodi[i].href.indexOf("?"));
		csv += nodi[i].innerHTML + ',' + linkprofilo + '\n';
	}
	
	return csv;
}

var scrolla = function(){
	window.scrollTo(0, document.body.scrollHeight);
}

var handler = function(count) {
    var caller = arguments.callee;

    if (count > 0) {
        if (count == 0) return;
        scrolla();
        window.setTimeout(function() {
            caller(count - 1);
        }, 500);    
    }
	else{
		var today = new Date();
		var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
		var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
		var dateTime = date + ' ' + time;
		var nome = "firends_" + dateTime + ".csv";
		dwnld_csv(getCsv(), nome);
	}
};

var n_amici = document.querySelectorAll('span._3d0')[0].innerHTML;
n_amici = n_amici.replace(/\D/g,''); //toglie il punto che vedrebbe come virgola
var n_scroll = n_amici / 20;

handler(n_scroll);