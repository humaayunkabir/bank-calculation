// step - 1
document.getElementById('deposit-button').addEventListener('click', function () {
    // step - 2
    const depositField = document.getElementById('deposit-fild');
    const newDepositeAmountString = depositField.value;
    const newDepositeAmount = parseFloat(newDepositeAmountString);


    // step - 3
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);

    const currentDepositTotal = previousDepositTotal + newDepositeAmount;

    depositTotalElement.innerText = currentDepositTotal;
    depositField.value = '';

    // step - 4
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    const currentBalanceTotal = previousBalanceTotal + newDepositeAmount;
    balanceTotalElement.innerText = currentBalanceTotal;



})