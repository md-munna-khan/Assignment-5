document.getElementById("btn-donate-money").addEventListener("click",function(){


    const addMoney = getInputFieldById("add-money")
   const mainBalance = getTextFieldById("main-balance")
   

    const balance = getTextFieldById("account-balance");
  const newBalance = balance + addMoney;
  document.getElementById("account-balance").innerText = newBalance

  const totalBalance =  mainBalance - newBalance
  document.getElementById("main-balance").innerText = totalBalance
})

// history btn
const historyBtn = document.getElementById("btn-history");
const donationBtn = document.getElementById("btn-donation");
historyBtn.addEventListener("click",function(){
    historyBtn.classList.add("text-black","bg-arrow-primary","border","rounded-md")
    historyBtn.classList.remove("text-gray-500")
    donationBtn.classList.remove("text-black","bg-arrow-primary","border","rounded-md")
    donationBtn.classList.add("text-gray-500")

    document.getElementById("donate-section").classList.add("hidden")
})