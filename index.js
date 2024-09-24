document.getElementById("btn-donate-money").addEventListener("click",function(){


    const addMoney = getInputFieldById("add-money")
// validation
    if(addMoney <=0 || isNaN(addMoney)){
document.getElementById("income-error").classList.remove("hidden");
return
    }
    
   const mainBalance = getTextFieldById("main-balance")
   

    const balance = getTextFieldById("account-balance");
  const newBalance = balance + addMoney;
  document.getElementById("account-balance").innerText = newBalance

  const totalBalance =  mainBalance - addMoney
  document.getElementById("main-balance").innerText = totalBalance




const div = document.createElement('div');
div.innerHTML =`

<p class ="font-bold border text-gray-500 p-4">${addMoney} Taka is Donated for Flood Relief in Feni,Bangladesh</p>
<p class ="font-bold border text-gray-500 p-4"> Date:${new Date().toLocaleDateString()}</p>


`;
document.getElementById("transaction-history").appendChild(div);


const modal = document.getElementById("my_modal_1");
modal.showModal();
modal.classList.remove("hidden")
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

donationBtn.addEventListener("click",function(){
donationBtn.classList.add(
"text-black","bg-arrow-primary","border","rounded-md"

);
historyBtn.classList.remove(
  "text-black","bg-arrow-primary","border","rounded-md"
)
document.getElementById("donate-section").classList.remove("hidden");
document.getElementById("transaction-history").classList.add("hidden")
})

