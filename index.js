

document.getElementById("blog").addEventListener("click",function(){
  window.location.href ="./blog.html"
})


// js-section-1-start
document.getElementById("btn-donate-money-1").addEventListener("click",function(){


    const addMoney = getInputFieldById("add-money-1")
    const mainBalance = getTextFieldById("main-balance")
    const balance = getTextFieldById("account-balance-1");

     
 
// validation
    if(addMoney <=0 || isNaN(addMoney)|| mainBalance < addMoney){
document.getElementById("income-error-1").classList.remove("hidden");
return
    }else{
      const newBalance = balance + addMoney;
      document.getElementById("account-balance-1").innerText = newBalance
    
      const totalBalance =  mainBalance - addMoney
      document.getElementById("main-balance").innerText = totalBalance
    }


  

const div = document.createElement('div');
div.className = "bg-white p-4 rounded-lg border"
div.innerHTML =`

<p class ="font-bold  text-gray-500 p-4">${addMoney} Taka is Donated for Flood flood at Noakhali,Bangladesh</p>
<p class ="font-bold  text-gray-500 p-2"> Date:${new Date().toString()}</p>


`;
document.getElementById("transaction-history").appendChild(div);


const modal = document.getElementById("my_modal_1");
modal.showModal();
modal.classList.remove("hidden")
})

// history- btn
const historyBtn = document.getElementById("btn-history");
const donationBtn = document.getElementById("btn-donation");
historyBtn.addEventListener("click",function(){
  // ----change style for active button-----
    historyBtn.classList.add("text-black","bg-arrow-primary","border","rounded-md")
    historyBtn.classList.remove("text-gray-500")
  // ----change style for inactive button-----
    donationBtn.classList.remove("text-black","bg-arrow-primary","border","rounded-md")
    donationBtn.classList.add("text-gray-500")
//  -----hide donation section-----
    document.getElementById("donate-section-1").classList.add("hidden")
    document.getElementById("donate-section-2").classList.add("hidden")
    document.getElementById("donate-section-3").classList.add("hidden")
    // show the transaction history
    document.getElementById("transaction-history").classList.remove("hidden")
    document.getElementById("donate-section").classList.add("hidden")
});

donationBtn.addEventListener("click",function(){
  // ----change style for active button-----
donationBtn.classList.add(
"text-black","bg-arrow-primary","border","rounded-md"

);
historyBtn.classList.remove(
  "text-black","bg-arrow-primary","border","rounded-md"
)
historyBtn.classList.add("text-gray-500")
// ---- hide the transaction history---
document.getElementById("transaction-history").classList.add("hidden")

// Show donation sections
document.getElementById("donate-section-1").classList.remove("hidden");
document.getElementById("donate-section-2").classList.remove("hidden");
document.getElementById("donate-section-3").classList.remove("hidden");
// document.getElementById("transaction-history").classList.add("hidden")
document.getElementById("donate-section").classList.remove("hidden")
});






//js-section-1-end



// js-section-2-start
document.getElementById("btn-donate-money-2").addEventListener("click",function(){

  const addMoney = getInputFieldById("add-money-2")
  const mainBalance = getTextFieldById("main-balance")
  const balance = getTextFieldById("account-balance-2");

   

// validation
  if(addMoney <=0 || isNaN(addMoney)|| mainBalance < addMoney){
document.getElementById("income-error-2").classList.remove("hidden");
return
  }else{
    const newBalance = balance + addMoney;
    document.getElementById("account-balance-2").innerText = newBalance
  
    const totalBalance =  mainBalance - addMoney
    document.getElementById("main-balance").innerText = totalBalance
  }




const div = document.createElement('div');
div.className = "bg-white p-4 rounded-lg border"
div.innerHTML =`

<p class ="font-bold p-4 text-gray-500 ">${addMoney} Taka is  Donate for Flood Relief in Feni,Bangladesh, Bangladesh</p>
<p class ="font-bold  text-gray-500 p-4"> Date:${new Date().toString()}</p>


`;
document.getElementById("transaction-history").appendChild(div);


const modal = document.getElementById("my_modal_1");
modal.showModal();
modal.classList.remove("hidden")
})



// js-section-3-start
document.getElementById("btn-donate-money-3").addEventListener("click",function(){


  const addMoney = getInputFieldById("add-money-3")
  const mainBalance = getTextFieldById("main-balance")
  const balance = getTextFieldById("account-balance-3");

   

// validation
  if(addMoney <=0 || isNaN(addMoney)|| mainBalance < addMoney){
document.getElementById("income-error-3").classList.remove("hidden");
return
  }else{
    const newBalance = balance + addMoney;
    document.getElementById("account-balance-3").innerText = newBalance
  
    const totalBalance =  mainBalance - addMoney
    document.getElementById("main-balance").innerText = totalBalance
  }




const div = document.createElement('div');
div.className = "bg-white p-4 rounded-lg border"
div.innerHTML =`

<p class ="font-bold p-4 text-gray-500 ">${addMoney} Taka is Aid for Injured in the Quota Movement, Bangladesh</p>
<p class ="font-bold  text-gray-500 p-4"> Date:${new Date().toString()}</p>


`;
document.getElementById("transaction-history").appendChild(div);


const modal = document.getElementById("my_modal_1");
modal.showModal();
modal.classList.remove("hidden")
})

//js-section-3-end
