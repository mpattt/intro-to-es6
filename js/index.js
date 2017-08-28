var test = false;
function keyshift(){
	if(!test){
		test = true;
		document.getElementById("keyshift").style.backgroundColor = 'red';
	} else {
		test = false;
		document.getElementById("keyshift").style.backgroundColor = '#A4C8F0';
	}
	
}

function key(word){
	if(!test){
		document.getElementById("test").innerHTML = document.getElementById("test").innerHTML + word;
	} else {
		document.getElementById("test").innerHTML = document.getElementById("test").innerHTML + word.toUpperCase;
		test = false;
		document.getElementById("keyshift").style.backgroundColor = '#A4C8F0';
	}
	
}

function key1(){
	document.getElementById("test").innerHTML = '';
}

function keydel(){
	var word = document.getElementById("test").innerHTML;
	document.getElementById("test").innerHTML =  word.substr(0,word.length-1) ;

}

function spacebar(){
	var word = document.getElementById("test").innerHTML;
	document.getElementById("test").innerHTML =  document.getElementById("test").innerHTML + ' ' ;

}



