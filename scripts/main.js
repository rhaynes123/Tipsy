let methodOneElement = document.getElementById('methodOneCard');
let methodTwoElement = document.getElementById('methodTwoCard');
let methodThreeElement = document.getElementById('methodThreeCard');
let tipTotalElement = document.getElementById('tipTotal');

methodOneElement.addEventListener('click', function(){
    let billAmountValue = document.getElementById("billAmt").value;
    let tip = CalculateTip(billAmountValue,1);
    tipTotalElement.innerHTML = tip;
});
methodTwoElement.addEventListener('click', function(){
    let taxAmountValue = document.getElementById('taxAmt').value;
    let tip = CalculateTip(taxAmountValue,2);
    tipTotalElement.innerHTML = tip;
});
methodThreeElement.addEventListener('click', function(){
    let billAmountValue = document.getElementById("billAmt").value;
    let tip = CalculateTip(billAmountValue,3);
    tipTotalElement.innerHTML = tip;
});
//Method 1
let Calculate20PercentOfBill = function(preTaxBill){
    if(preTaxBill <= 0){
        return 0;
    }
    let tenPercentOfBill = preTaxBill * 0.10;
    return tenPercentOfBill * 2;
}
//Method 2
let CalculateDoubleTax = function(taxAmount){
    if(taxAmount <= 0){
        return 0;
    }
    let roundedTax = Math.round(taxAmount);
    return roundedTax * 2;
}
//Method 3
let Calculate15PercentOfBill = function(preTaxBill){
    if(preTaxBill <= 0){
        return 0;
    }
    let tenPercentOfBill = preTaxBill * 0.10;
    return (tenPercentOfBill / 2) + tenPercentOfBill;
}

let CalculateTip = function(amount, method){
    switch(method){
        case 1:
            return Calculate20PercentOfBill(amount);
        case 2:
            return CalculateDoubleTax(amount);
        case 3: 
            return Calculate15PercentOfBill(amount);
        default:
            return 0.0;

    }
}