document.getElementById('deposit-btn').addEventListener('click', function () {
    const depositField = document.getElementById('deposit-field');
    const newDepositAmount = depositField.value;
    //const makeAmountNumber = parseFloat(newDepositAmount);

    const depositTotalElement = document.getElementById('deposit-total');
    const previosDepositTotal = depositTotalElement.innerText;
    //const makePreviousDepositNumber = parseFloat(previosDepositTotal);

    //const updateDepositTotal = makePreviousDepositNumber + makeAmountNumber;

    const updateDepositTotal = parseFloat(previosDepositTotal) + parseFloat(newDepositAmount);
    depositTotalElement.innerText = parseFloat(updateDepositTotal);


    //step 5: balance update

    //catching previous balance
    const previousBalanceElement = document.getElementById('total-balance');
    const previousBalanceAmount = previousBalanceElement.innerText;
    // Updating balance ammount
    const updateBalance = parseFloat(previousBalanceAmount) + parseFloat(newDepositAmount);
    //showing current balance
    previousBalanceElement.innerText = updateBalance;




    depositField.value = '';
})
//Withdraw function
document.getElementById('withdraw-btn').addEventListener('click', function () {
    const WithdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmount = WithdrawField.value;

    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previosWithdrawTotal = withdrawTotalElement.innerText;

    const updateWithdrawTotal = parseFloat(previosWithdrawTotal) + parseFloat(newWithdrawAmount);
    withdrawTotalElement.innerText = parseFloat(updateWithdrawTotal);

    //catching previous balance
    const previousBalanceElement = document.getElementById('total-balance');
    const previousBalanceAmount = previousBalanceElement.innerText;
    // Updating balance ammount
    const updateBalance = parseFloat(previousBalanceAmount) - parseFloat(newWithdrawAmount);
    //showing current balance
    previousBalanceElement.innerText = updateBalance;

    WithdrawField.value = '';

})