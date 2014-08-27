// Awesome Board
"use strict";

function validate() {
	var name = document.forms['awesomeform'].name.value;
	var login = document.forms['awesomeform'].login.value;
	var message = document.forms['awesomeform'].message.value;

	var nameElem = document.getElementById("name");
	var loginElem = document.getElementById("login");
	var messageElem = document.getElementById("message");

	var progressObj = {
		name: {
			correct: 0
		},
		login: {
			correct: 0
		},
		message: {
			correct: 0
		}
	};

	function showError(element, message) {
		element.className = "showError";
		element.setAttribute("title", message);
	}

	function showCorrect(element) {
		element.className = "showCorrect";
		element.setAttribute("title", "Good");
	}

	// Validate yield name
	(function validateName() {
		if ((name === "") || !(isNaN(name)) || /^[A-Z]{1}[a-zA-z]{2,}$/.test(name) === false) {
			showError(nameElem, "Enter Right Name");
		} else {
			showCorrect(nameElem);
			progressObj.name.correct = 1;
		}
	})();


	// Validate login
	(function validateLogin() {
		if (/^[a-zA-z]{1}[a-zA-Z1-9]{3,20}$/.test(login) === false) {
			showError(loginElem, "Enter Right Login");
		} else {
			showCorrect(loginElem);
			progressObj.login.correct = 1;
		}
	})();

	//Validate message
	(function validateMessage() {
		if (message === "") {
			showError(messageElem, "Enter Right Message");
		} else {
			showCorrect(messageElem);
			progressObj.message.correct = 1;
		}
	})();

	// Validate selectCategory
	(function validateSelectCategory() {
		var selectCategoryElem = document.forms['awesomeform'].selectCategory;
		var countSelected = 0;

		for (var i = 0; i < selectCategoryElem.options.length; i++) {
			if (selectCategoryElem.options[i].selected)
				countSelected++;
		}
		if (countSelected >= 5) {
			selectCategoryElem.selected = false;
			alert("Please choose less then 5 items");
		}
	})();

	function correctMessage() {
		var showResultMessage = document.querySelector(".showResultMessage");
		showResultMessage.className = "showResultMessage";
		showResultMessage.style.color = "green";
		showResultMessage.innerHTML = "Correct!";
	}

	function errorMessage() {
		var showResultMessage = document.querySelector(".showResultMessage");
		showResultMessage.className = "showResultMessage";
		showResultMessage.style.color = "red";
		showResultMessage.innerHTML = "Incorrect!";
	}


	if ((progressObj.name.correct == 1) && (progressObj.login.correct == 1) && (progressObj.message.correct == 1)) {
		correctMessage();
	} else {
		errorMessage();
	}
}