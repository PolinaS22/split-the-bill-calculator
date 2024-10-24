// button calculate 
const button = document.querySelector("#btn");
const btnTip = document.querySelector("#addTip");
button.addEventListener("click", calculateAmount);
btnTip.addEventListener("click", showTip);

function showTip(e) {
    e.preventDefault();
    tip.style.display = "block";
}

function calculateAmount(e) {
    //4 - запретить перезагружаться странице
    e.preventDefault();
    //1- доступ к полям счет, кол-тво людей, чаевые
    const bill = document.querySelector("#bill").value;
    const people = document.querySelector("#people").value;
    const tip = document.querySelector("#tip").value;

    // условие, что если поле не заполнено - alert
    if (bill === "" || people === "" || people < 1){
        Swal.fire({
            icon: 'error',
            title: 'Error...',
            text: 'Please enter your information!',
        });
        return false;
    }

    // 2 - создаем переменную которая будет отвечать за результат деления, сколько заплатит 1 человек 
    let amountPerPerson = bill / people;

    // 3 - сколько чаевых заплатит 1 чел
    let tipPerPerson = (bill * tip) / people;
    // 4 - перевести чаевые в число - через html
    // 5 - сумма счета и чаевых
    let totalSum = amountPerPerson + tipPerPerson;


    // 6 - эти переменные показать в соответствующих графах
    document.querySelector("#dividedBill").textContent = amountPerPerson.toFixed(2);
    document.querySelector("#dividedTip").textContent = tipPerPerson.toFixed(2);
    document.querySelector("#billAndTip").textContent = totalSum.toFixed(2);

}
