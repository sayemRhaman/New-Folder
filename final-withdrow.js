document.getElementById('btnWithdrow').addEventListener('click', function(){

    const withdrowFild = document.getElementById('withdrowFild');
    const newWithDrowAmountString = withdrowFild.value;
    const newWithDrowAmount = parseFloat(newWithDrowAmountString);

    const withdrowTotalElement = document.getElementById('WithdrowTotal');
    const prevWithdrowTotalString = withdrowTotalElement.innerText;
    const prevWithdrowTotal = parseFloat(prevWithdrowTotalString);
   

    const balnceTotalElement = document.getElementById ('blanceTotal');
    const prevBlanceTotalString = balnceTotalElement.innerText;
    const prevBlanceTotal = parseFloat (prevBlanceTotalString);


    if (newWithDrowAmount > prevBlanceTotal) {
        alert('tr bapar taka nai ato')
        return;
    }

    const currentWithdrowTotal = prevWithdrowTotal + newWithDrowAmount;
     withdrowTotalElement.innerText = currentWithdrowTotal;

  
    const blanceTotal = prevBlanceTotal - newWithDrowAmount;

    balnceTotalElement.innerText = blanceTotal;


    withdrowFild.value = '';
    


})