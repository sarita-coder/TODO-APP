function getInputValue() {
	var inputBox = document.getElementById("inputBox").value;
	if (inputBox!== "") {
		doTweet(inputBox);
		clear();
	}
}
function doTweet(tweetText) {
	var tweets = document.getElementById("tweets");
	
	var elemento = document.createElement("div");
	elemento.id="tweet";
	var element_one = document.createElement("input");
	element_one.setAttribute("type","checkbox");
	element_one.id="tarea"
	element_one.onchange=function(){
		element_two=tweetText.strike();
	}
	var element_two=document.createElement("span");
	element_two.id="description";
	element_two.innerHTML=tweetText;

	var element_three=document.createElement("span");
	element_three.setAttribute("class","glyphicon-trash glyphicon");
	element_three.onclick=function(){
		tweets.removeChild(elemento);
	}

	tweets.appendChild(elemento);
	elemento.appendChild(element_one);
	elemento.appendChild(element_two);
	elemento.appendChild(element_three);
}
function clear() {
	var inputBox = document.getElementById("inputBox");
	inputBox.value = "";
	inputBox.focus();
}