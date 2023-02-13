function getInputValue(inputId) {
	const input = document.getElementById(inputId);
	const inputValueString = input.value;
	const inputValue = parseFloat(inputValueString);
	input.value = "";
	return inputValue;
}

function getPreviousValue(previousId) {
	const previous = document.getElementById(previousId);
	const previousValueString = previous.innerText;
	const previousValue = parseFloat(previousValueString);
	return previousValue;
}

function setValue(id, value) {
	const getElement = document.getElementById(id);
	getElement.innerText = value;
}
