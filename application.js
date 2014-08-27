//Script by Gios
//Awesome Board
"use strict";

function validate() {
	var name = document.forms['awesomeform'].name.value;
	var email = document.forms['awesomeform'].email.value;
	var message = document.forms['awesomeform'].message.value;
	console.log();

	var nameElem = document.getElementById("name");
	var emailElem = document.getElementById("email");
	var messageElem = document.getElementById("message");

	function error(element, message) {
		element.className = "error";
		element.setAttribute("title", message);
	}

	function non_error(element) {
		element.className = "non-error";
		element.setAttribute("title", "Good");
	}

	// Validate yield name
	var validate_name = function() {
		if ((name == "") || !(isNaN(name)) || (name.charAt(0) >= 65 && name.charAt(0) <= 90)) {
			error(nameElem, "Enter Right Name");
		} else {
			non_error(nameElem);
		}
	}
	validate_name();

	// Validate email
	var validate_email = function() {
		if (/^[a-zA-z]{1}[a-zA-Z1-9]{3,20}$/.test(name) === false) {
			error(emailElem, "Enter Right Email");
		} else {
			non_error(emailElem);
		}
	}
	validate_email();

	//Validate message
	var validate_message = function() {
		if (message == "") {
			error(messageElem, "Enter Right Message");
		} else {
			non_error(messageElem);
		}
	}
	validate_message();

	function board() {
		var root = document.getElementById("root");
		root.style.color = "green";
		root.style.margin = "20px auto";
		root.style.textAlign = "center";
		root.style.fontSize = "30px";
		root.innerHTML = "Correct!";
	}



	/*console.log(nameElem.className);
	console.log(emailElem.className);
	console.log(messageElem.className);
	console.log(screen.height);
	console.log(size.scrollHeight);*/
	if ((nameElem.className == "non-error") && (emailElem.className == "non-error") && (messageElem.className == "non-error")) {
		board();
	}
}