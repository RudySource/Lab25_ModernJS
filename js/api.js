const amountInput = document.getElementById('amount')
const currencySelect = document.getElementById('currency')
const convertBtn = document.getElementById('convertBtn')
const result = document.getElementById('result')
const rates = {
	eur: 0.92,
	rub: 78.43,
}

convertBtn.addEventListener('click', () => {
	const amount = amountInput.value
	const currency = currencySelect.value
	const converted = amount * rates[currency]
	result.textContent = `${converted.toFixed(2)} ${currency.toUpperCase()}`
})
