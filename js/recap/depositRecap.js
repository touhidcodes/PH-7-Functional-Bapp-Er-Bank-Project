/* 
// deposit btn handler
document.getElementById("btn-deposit").addEventListener("click", function () {
	// new deposit value
	const depositAmountValue = document.getElementById("deposit-input");
	const depositAmountString = depositAmountValue.value;
	const depositAmount = parseFloat(depositAmountString);
	depositAmountValue.value = "";

	// error handling
	if (isNaN(depositAmountString)) {
		alert("Please provide a valid number");
		return;
	}

	// old deposit value
	const depositValue = document.getElementById("deposit-value");
	const depositString = depositValue.innerText;
	const deposit = parseFloat(depositString);
	depositValue.innerText = deposit + depositAmount;

	// update total value
	const total = document.getElementById("total-value");
	const totalValueString = total.innerText;
	const totalValue = parseFloat(totalValueString);

	total.innerText = totalValue + depositAmount;
});

*/
