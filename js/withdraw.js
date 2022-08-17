// Step - 1
document.getElementById('withdraw-button').addEventListener('click', function () {
    // Step - 2
    const withdrawFild = document.getElementById('withdraw-fild');
    const newWithdrawAmountString = withdrawFild.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);

    // Step - 3
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawBlanceString = withdrawTotalElement.innerText;
    const previousWithdrawBlance = parseFloat(previousWithdrawBlanceString);


    withdrawFild.value = '';


    // Step - 5
    const balanceTotalElement = document.getElementById('balance-total');
    const previouseBalanceTotalString = balanceTotalElement.innerText;
    const previouseBalanceTotal = parseFloat(previouseBalanceTotalString);

    if (newWithdrawAmount > previouseBalanceTotal) {
        alert("Accout dosn't have valid Amount")
        return;
    }


    // Step - 4
    const currentWithdrawAmount = previousWithdrawBlance + newWithdrawAmount;
    withdrawTotalElement.innerText = currentWithdrawAmount;

    // Step - 5.5
    const newBlanceTotal = previouseBalanceTotal - newWithdrawAmount;
    balanceTotalElement.innerText = newBlanceTotal;


})