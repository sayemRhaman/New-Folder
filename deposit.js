document.getElementById('btnDeposit').addEventListener('click', function(){
      const depositField = document.getElementById('depositBox');
      const newDepositAmountString = depositField.value;
      const newDepositAmount = parseFloat(newDepositAmountString);

      const depositTotalElement = document.getElementById('depositTotal');
      const prevDepositTotalString = depositTotalElement.innerText;
      const prevDepositTotal = parseFloat(prevDepositTotalString);


      const currentDepositTotal = prevDepositTotal + newDepositAmount;

      depositTotalElement.innerText = currentDepositTotal;



      const balnceTotalElement = document.getElementById ('blanceTotal');
      const prevBlanceTotalString = balnceTotalElement.innerText;
      const prevBlanceTotal = parseFloat (prevBlanceTotalString);


      const currentBlance = prevBlanceTotal + newDepositAmount;
      balnceTotalElement.innerText = currentBlance;


      depositField.value = '';

})