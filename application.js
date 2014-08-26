//Script by Gios
//Awesome Board
"use strict";

function validate(form) {
	var name = form.name.value;
	var email = form.email.value;
	var message = form.message.value;

	var nameElem = document.getElementById("name");
	var emailElem = document.getElementById("email");
	var messageElem = document.getElementById("message");
	var size = document.getElementById("size");

	function error(element, message) {
		element.className = "error";
		element.setAttribute("title",message);
	}

	function non_error(element) {
		element.className = "non-error";
		element.setAttribute("title","Good");
	}

	// Validate yield name
	var validate_name = function() {
		if((name == "") || !(isNaN(name))) {
			error(nameElem, "Enter Right Name");
		} else {
			non_error(nameElem);
		}
	}
	validate_name();

	// Validate email
	var validate_email = function() {
		if((email == "") || (email.indexOf("@") < 1) || (email.indexOf(".") < 1)) {
			error(emailElem, "Enter Right Email");
		} else {
			non_error(emailElem);
		}
	}
	validate_email();

	//Validate message
	var validate_message = function () {
		if(message == "") {
			error(messageElem, "Enter Right Message");
		} else {
			non_error(messageElem);
		}
	}
	validate_message();

	function board(name, message) {
			var root = document.getElementById("root");
			var _div = document.createElement("div");
			var _name = document.createElement("h2");
			var _message = document.createElement("p");
			root.appendChild(_div);
			_div.appendChild(_message);
			_div.insertBefore(_name, _message);
			_name.innerHTML = name;
			_message.innerHTML = message;
			_div.style.width = "200px";
			_div.style.height = "150px";
			_div.style.backgroundColor = "yellow";
			_div.style.borderRadius = "50px";
			_name.style.textAlign = "center";
			_message.style.textAlign = "center";
			_name.style.fontFamily = "Comic Sans MS";
			_message.style.fontFamily = "Comic Sans MS";
			_name.style.padding = "10px";
			_message.style.padding = "10px";
			_div.style.float = "left";
			_div.style.margin = "10px";
			_div.onclick = function() {
				_div.style['-webkit-transition-duration'] = "2s";
				_div.style['-webkit-transform'] = "scale(0)";
				_div.style.width = "0px";
				_div.style.height = "0px";
				_name.style.padding = "0px";
				_message.style.padding = "0px";
				_div.style.margin = "0px";
			}
		}



	/*console.log(nameElem.className);
	console.log(emailElem.className);
	console.log(messageElem.className);
	console.log(screen.height);
	console.log(size.scrollHeight);*/
	if((nameElem.className == "non-error") && (emailElem.className == "non-error") && (messageElem.className == "non-error")) {
		board(name, message);
	}
}



