function getInputFieldById (id){
    const inputValue = document.getElementById(id).value;
    const inputNumber = parseFloat(inputValue)
    return inputNumber;
}
function getTextFieldById (id){
    const textValue = document.getElementById(id).innerText;
    const textNumber = parseFloat(textValue)
    return textNumber;
}

function ShowBalanceHistory(id){
    // hide section
    document.getElementById("transaction-history").classList.add("hidden")
    // document.getElementById("btn-donation").classList.add("hidden")

    // show the section with the provide id as parameter
    document.getElementById(id).classList.remove("hidden")
}