/* 
// withdraw btn handler
document.getElementById("btn-withdraw").addEventListener("click", function () {
	// new withdraw value
	const withdrawAmountValue = document.getElementById("withdraw-input");
	const withdrawAmountString = withdrawAmountValue.value;
	const withdrawAmount = parseFloat(withdrawAmountString);
	withdrawAmountValue.value = "";

	// error handling
	if (isNaN(withdrawAmountString)) {
		alert("Please provide a valid number");
		return;
	}

	// old withdraw value
	const withdrawValue = document.getElementById("withdraw-value");
	const withdrawString = withdrawValue.innerText;
	const withdraw = parseFloat(withdrawString);
	withdrawValue.innerText = withdraw + withdrawAmount;

	// update total value
	const total = document.getElementById("total-value");
	const totalValueString = total.innerText;
	const totalValue = parseFloat(totalValueString);

	total.innerText = totalValue - withdrawAmount;
});

*/
