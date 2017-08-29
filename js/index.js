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
	var letter;
	if(document.getElementById("keyshift").style.backgroundColor == 'red'){
		letter = word;
		switch (word) {
		case '0':
			letter = ')';
			break;
		case '1':
			letter = '!';
			break;
		case '2':
			letter = '@';
			break;
		case '3':
			letter = '#';
			break;
		case '4':
			letter = '$';
			break;
		case '5':
			letter = '%';
			break;
		case '6':
			letter = '^';
			break;
		case '7':
			letter = '|';
			break;
		case '8':
			letter = '*';
			break;
		case '9':
			letter = '(';
			break;
	}
		document.getElementById("test").innerHTML = document.getElementById("test").innerHTML + letter.toUpperCase();
		test = false;
		document.getElementById("keyshift").style.backgroundColor = '#A4C8F0';
		
	} else {
		document.getElementById("test").innerHTML = document.getElementById("test").innerHTML + word;
	}
	
}

function key1(){
	document.getElementById("test").innerHTML = '';
}

function keydel(){
	var word = document.getElementById("test").innerHTML;
	document.getElementById("test").innerHTML =  word.slice(0,word.length-1) ;

}

function spacebar(){
	document.getElementById("test").innerHTML =  document.getElementById("test").innerHTML + ' ' ;

}
function keyenter(){
	document.getElementById("test").innerHTML =  document.getElementById("test").innerHTML + '<br>' ;

}



