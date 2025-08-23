
// Login Button 

document.getElementById("login-btn").addEventListener("click",function(event){
    event.preventDefault();
    const mobileNumber = 12345678910;
    const pinNumber = 1234;
    const mobileNum = document.getElementById("mobile-number").value
    const pinNum = document.getElementById("pin-number").value;
    const mobileNumberValue = parseInt(mobileNum);
    const pinNumberValue = parseInt(pinNum);
    if(mobileNumberValue === mobileNumber && pinNumberValue === pinNumber){
        window.location.href="./home.html"
    }else{
        alert("Incorrect Number or Pin !!")
    }
})


