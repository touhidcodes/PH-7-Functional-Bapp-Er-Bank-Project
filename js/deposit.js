document.getElementById("btn-deposit").addEventListener("click", function () {
	const inputValue = getInputValue("deposit-input");
	const previousValue = getPreviousValue("deposit-value");
	const balanceValue = getPreviousValue("balance-value");

	const depositTotal = previousValue + inputValue;
	const balanceTotal = balanceValue + inputValue;

	setValue("deposit-value", depositTotal);
	setValue("balance-value", balanceTotal);
});
