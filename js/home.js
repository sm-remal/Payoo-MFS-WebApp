const setPin = 1234;
document.getElementById('add-money-btn').addEventListener('click',(event) => {
    event.preventDefault();
    const availableBalance = parseInt(document.getElementById("available-balance").innerText);
    const bankName = document.getElementById("bank").value;
    const accountNumber = document.getElementById("account-number").value;
    const addAmount = parseInt(document.getElementById("add-amount").value);
    const pin = parseInt(document.getElementById("pin-number").value);
    if(bankName === "Select Bank"){
        alert("Please select a Bank")
        return;
    }
    if(accountNumber.length < 11){
        alert("Please Provide a valid account number")
        return;
    }
    // if(typeof addAmount !== "number"){
    //     alert("Provide valid amount")
    //     return;
    // }

    if(pin !== setPin){
        alert("Incorrect Pin Number")
        return;
    }
    const totalAmount = availableBalance + addAmount
    // availableBalance.innerText = totalAmount;
    document.getElementById("available-balance").innerText = totalAmount
})


// Toggling 

const addMoneySection = document.getElementById("add-money-section");
const cashOutSection = document.getElementById("cash-out-section");
const transferMoneySection = document.getElementById("transfer-money-section");
const getBonusSection = document.getElementById("get-bonus-section")
const payBillSection = document.getElementById("pay-bill-section")


// add btn 
document.getElementById("btn-add-money").addEventListener("click",function(){
    cashOutSection.style.display = "none"
    transferMoneySection.style.display = "none"
    getBonusSection.style.display = "none"
    payBillSection.style.display = "none"
    addMoneySection.style.display = "block"
})

// cash out 
document.getElementById("btn-cash-out").addEventListener("click",function(){
    cashOutSection.style.display = "block"
    transferMoneySection.style.display = "none"
    getBonusSection.style.display = "none"
    payBillSection.style.display = "none"
    addMoneySection.style.display = "none"
})

// transfer 
document.getElementById("btn-transfer").addEventListener("click",function(){
   cashOutSection.style.display = "none"
    transferMoneySection.style.display = "block"
    getBonusSection.style.display = "none"
    payBillSection.style.display = "none"
    addMoneySection.style.display = "none"
})

// get bonus 
document.getElementById("btn-get-bonus").addEventListener("click",function(){
    cashOutSection.style.display = "none"
    transferMoneySection.style.display = "none"
    getBonusSection.style.display = "block"
    payBillSection.style.display = "none"
    addMoneySection.style.display = "none"
})

// pay bill 
document.getElementById("btn-pay-bill").addEventListener("click",function(){
    cashOutSection.style.display = "none"
    transferMoneySection.style.display = "none"
    getBonusSection.style.display = "none"
    payBillSection.style.display = "block"
    addMoneySection.style.display = "none"
})