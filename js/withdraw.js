document.getElementById("btn-withdraw").addEventListener("click", function () {
	const inputValue = getInputValue("withdraw-input");
	const previousValue = getPreviousValue("withdraw-value");
	const balanceValue = getPreviousValue("balance-value");

	const withdrawTotal = previousValue + inputValue;
	const balanceTotal = balanceValue - inputValue;

	setValue("withdraw-value", withdrawTotal);
	setValue("balance-value", balanceTotal);
});
