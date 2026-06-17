let title_input = document.querySelector("#title");
let amount_input = document.querySelector("#amount");
let btn = document.querySelector("button");
let expence_value = document.querySelector("#total");
let expenseList = document.querySelector("#expenseList");

let expenses = [];
btn.addEventListener("click", function(){
    let title = title_input.value;
    let amount = Number(amount_input.value);
    console.log(title);
    console.log(amount);
    
    if(title === "" || amount <= 0){
        alert("your data is wrong")
    }
    let obj = {
        title: title,
        amount: amount
    }
    expenses.push(obj);
    console.log(expenses);
    shows();
    title_input.value = "";
    amount.value = "";
})
function shows() {
    expenseList.textContent = "";

    let total = 0;
    for (const element of expenses) {
        let li = document.createElement("li");
        li.textContent = `${element.amount} RS - ${element.title}`
        expenseList.appendChild(li);
        total += element.amount;
    }
    expence_value.textContent = total

}