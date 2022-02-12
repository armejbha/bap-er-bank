function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const amountValue = parseFloat(inputAmountText);
    // clear 
    inputField.value = '';
    return amountValue;
}
function updateTotalField(totalFieldId, amount) {
    const totalElement = document.getElementById(totalFieldId);
    const totalText = totalElement.innerText;
    const previusTotal = parseFloat(totalText);
    totalElement.innerText = previusTotal + amount;
}
function getCurrentBalance() {
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previusBalanceTotal = parseFloat(balanceTotalText);
    return previusBalanceTotal;
}
function updateBalance(amount, isAdd) {
    debugger;
    const balanceTotal = document.getElementById('balance-total');
    const previusBalanceTotal = getCurrentBalance();
    if (isAdd == true) {
        balanceTotal.innerText = previusBalanceTotal + amount;
    }
    else {
        balanceTotal.innerText = previusBalanceTotal - amount;
    }
}
// for deposit 
document.getElementById('deposit-button').addEventListener('click', function () {
    const depositAmount = getInputValue('deposit-input');
    if (depositAmount > 0) {
        updateTotalField('deposit-total', depositAmount);
        updateBalance(depositAmount, true);
    }

})
// for withdraw 
document.getElementById('withdraw-button').addEventListener('click', function () {
    const withrawAmount = getInputValue('withdraw-input');
    const currentBalance = getCurrentBalance();
    if (withrawAmount > 0 && withrawAmount < currentBalance) {
        updateTotalField('withdraw-total', withrawAmount);
        updateBalance(withrawAmount, false);
    }

})