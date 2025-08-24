// Add Money Feature Calculation
const setPin = 1234;
const numberRegex = /^[0-9]+$/
const transactionData = [];

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
    if(accountNumber.length < 11  && (!numberRegex.test(accountNumber))){
        alert("Please Provide a valid account number")
        return;
    }
    if(isNaN(addAmount) || addAmount <= 0){
    alert("Provide valid amount")
    return;
    }
    if(pin !== setPin){
        alert("Incorrect Pin Number")
        return;
    }
    const totalAmount = availableBalance + addAmount
    // availableBalance.innerText = totalAmount;
    document.getElementById("available-balance").innerText = totalAmount

    const data = {
        Name: "Add Money",
        Date: new Date().toLocaleTimeString()
    }
    transactionData.push(data)
    console.log(transactionData)
})

// Cash Out Feature Calculation
document.getElementById("withdraw-btn").addEventListener("click",function(event){
    event.preventDefault();
    const availableBalance = parseInt(document.getElementById("available-balance").innerText);
    const agentNumber = document.getElementById("agent-number").value;
    const cashOutAmount = parseInt(document.getElementById("cashout-amount").value);
    const pinNumber = parseInt(document.getElementById("cashout-pin-number").value);
    console.log(availableBalance,agentNumber,cashOutAmount,pinNumber)

    if(agentNumber.length < 11 && (!numberRegex.test(agentNumber))){
        alert("Please Provide a valid agent number ");
        return;
    }
    if(isNaN(cashOutAmount) || cashOutAmount <= 0){
        alert("Provide valid amount");
        return;
    }
    if(pinNumber !== setPin){
        alert("Invalid pin number")
    }
    const newBalance = availableBalance - cashOutAmount;
    document.getElementById("available-balance").innerText = newBalance;

    const data = {
        Name: "Cash Out",
        Date: new Date().toLocaleTimeString()
    }
    transactionData.push(data)
    console.log(transactionData)
})

// Transfer Money feature calculation

document.getElementById("transfer-money-btn").addEventListener("click", function(event){
    event.preventDefault();
    const availableBalance = parseInt(document.getElementById("available-balance").innerText);
    const userAccountNumber = document.getElementById("user-account-number").value;
    const transferAmount = parseInt(document.getElementById("transfer-amount").value);
    const transferPin = parseInt(document.getElementById("transfer-pin-number").value);

    if(userAccountNumber.length < 11 && (!numberRegex.test(userAccountNumber))){
        alert("Provide valid user account number");
        return;
    }
    if(isNaN(transferAmount) || transferAmount <= 0){
        alert("Provide valid amount");
        return;
    }
    if(transferPin !== setPin){
        alert("Provide valid pin");
        return;
    }
    const remainingAmount = availableBalance - transferAmount;
    document.getElementById("available-balance").innerText = remainingAmount;

    const data = {
        Name: "Transfer Money",
        Date: new Date().toLocaleTimeString()
    }
    transactionData.push(data)
    console.log(transactionData)
})

// Get Bonus feature calculation 

document.getElementById("get-bonus-btn").addEventListener("click", function(event){
    event.preventDefault();
})

// Pay Bill feature calculation 

document.getElementById("pay-bill-btn").addEventListener("click", function(event){
    event.preventDefault();
    const availableBalance = parseInt(document.getElementById("available-balance").innerText);
    const paySelect = document.getElementById("select-pay").value;
    const billerNumber = document.getElementById("biller-number").value;
    const payAmount = parseInt(document.getElementById("pay-amount").value);
    const billPinNumber = parseInt(document.getElementById("bill-pin-number").value);
    if(paySelect === "Select Pay"){
        alert("Fill-Up the select option");
        return;
    }
    if(billerNumber.length < 11 && (!numberRegex.test(billerNumber))){
        alert("Provide valid biller account number");
        return;
    }
    if(isNaN(payAmount) || payAmount <= 0){
        alert("Provide valid amount");
        return;
    }
    if(billPinNumber !== setPin){
        alert("Provide valid pin");
        return;
    }

    const remainingBalance = availableBalance - payAmount;
    document.getElementById("available-balance").innerText = remainingBalance;

    const data = {
        Name: "Pay Bill",
        Date: new Date().toLocaleTimeString()

    }
    transactionData.push(data)
    console.log(transactionData)

})

// Transaction feature calculation 

document.getElementById("btn-transaction").addEventListener("click",function(){
    console.log(transactionData)
    const transactionContainer = document.getElementById("transaction-container");
    transactionContainer.innerText = ""
    for(const main of transactionData){
        const createElementDiv = document.createElement("div");
        createElementDiv.innerHTML = `

        <div class="max-w-md mx-auto w-full flex justify-between items-center pr-3 py-2 bg-white my-4 rounded-sm">
            <div class="flex items-center gap-6 pl-3">
                <div class=" w-[50px] h-[50Px] flex justify-center items-center bg rounded-full bg-gray-100">
                    <img src="./assets/wallet1.png" alt="" width="30px" height="30px">
                </div>
                <div>
                    <h2 class="font-bold">${main.Name}</h2>
                    <p class="text-gray-500">${main.Date  }</p>
                </div>
            </div>
            <i class="fa-solid fa-ellipsis-vertical"></i>
        </div>
        </div>
        ` 
       transactionContainer.appendChild(createElementDiv)
    }
})

// Toggling 

const addMoneySection = document.getElementById("add-money-section");
const cashOutSection = document.getElementById("cash-out-section");
const transferMoneySection = document.getElementById("transfer-money-section");
const getBonusSection = document.getElementById("get-bonus-section")
const payBillSection = document.getElementById("pay-bill-section")
const transaction = document.getElementById("transaction-section");


// add btn 
document.getElementById("btn-add-money").addEventListener("click",function(){
    addMoneySection.style.borderColor = "blue"
    cashOutSection.style.display = "none"
    transferMoneySection.style.display = "none"
    getBonusSection.style.display = "none"
    payBillSection.style.display = "none"
    addMoneySection.style.display = "block"
    transaction.style.display= "none"
    
})

// cash out 
document.getElementById("btn-cash-out").addEventListener("click",function(){
    cashOutSection.style.display = "block"
    transferMoneySection.style.display = "none"
    getBonusSection.style.display = "none"
    payBillSection.style.display = "none"
    addMoneySection.style.display = "none"
    transaction.style.display= "none"
})

// transfer 
document.getElementById("btn-transfer").addEventListener("click",function(){
    cashOutSection.style.display = "none"
    transferMoneySection.style.display = "block"
    getBonusSection.style.display = "none"
    payBillSection.style.display = "none"
    addMoneySection.style.display = "none"
    transaction.style.display= "none"
})

// get bonus 
document.getElementById("btn-get-bonus").addEventListener("click",function(){
    cashOutSection.style.display = "none"
    transferMoneySection.style.display = "none"
    getBonusSection.style.display = "block"
    payBillSection.style.display = "none"
    addMoneySection.style.display = "none"
    transaction.style.display= "none"
})

// pay bill 
document.getElementById("btn-pay-bill").addEventListener("click",function(){
    cashOutSection.style.display = "none"
    transferMoneySection.style.display = "none"
    getBonusSection.style.display = "none"
    payBillSection.style.display = "block"
    addMoneySection.style.display = "none"
    transaction.style.display= "none"
})

// Transaction 

document.getElementById("btn-transaction").addEventListener("click",function(){
    cashOutSection.style.display = "none"
    transferMoneySection.style.display = "none"
    getBonusSection.style.display = "none"
    payBillSection.style.display = "none"
    addMoneySection.style.display = "none"
    transaction.style.display= "block"

})