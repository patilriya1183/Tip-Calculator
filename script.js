
let billAmtEl = document.getElementById("billAmt");

let tipPerEl = document.getElementById("tipPer");

let msgEl = document.getElementById( "msg" ); 

let tipEl = document.getElementById("tip");

let totalEl = document.getElementById("total");


function calculate(){

    let billAmtVal = Number(billAmtEl.value);
    let tipPerVal = Number(tipPerEl.value);

    if( billAmtEl.value === ""){

        msgEl.textContent = "Please enter Bill Amount!!";
        msgEl.style.color = "red";

        tipEl.value = "";
        totalEl.value = "";
        return;
    }

    else if( tipPerEl.value === ""){

        msgEl.textContent = "Please enter Tip Percentage!!";
        msgEl.style.color = "red";

        tipEl.value = "";
        totalEl.value = "";
        return;
    }

    let tipVal = (tipPerVal/100) * billAmtVal;
    let totalVal = billAmtVal + tipPerVal;

    tipEl.textContent = tipVal;
    totalEl.textContent = totalVal;

    tipEl.value = tipVal;
    totalEl.value = totalVal;

    msgEl.textContent = `Tip: ₹${tipVal} | Total: ₹${totalVal}`;
    msgEl.style.color = "green";

    billAmtEl.value = "";
    tipPerEl.value = "";
}


