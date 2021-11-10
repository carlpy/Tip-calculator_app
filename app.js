const billInput = document.getElementById('bill-input');
const numberInput = document.getElementById('number-input');
const TipBtns = document.querySelectorAll('.tip-btns'); // this drop out a list
const customInput = document.getElementById('custom-input');
const resetBtn = document.querySelector('.reset-btn');

// the final results
const totalTip = document.querySelector('.tip-amount');
const totalBill = document.querySelector('.bill-count');

const numberAlert = document.querySelector('.number__alert');
const numberContainer = document.querySelector('.number');

let tipValue = 0; // starts in cero

// events
billInput.addEventListener('input',totalOftheBill);
numberInput.addEventListener('input',numberOfTips);
customInput.addEventListener('input',customValue);
resetBtn.addEventListener('click', resetButton);
TipBtns.forEach(btns => {btns.addEventListener('click', btnsNumber)})


function btnsNumber() {
    TipBtns.forEach((btn) => {
        btn.classList.remove('btn-focus');
        btn.addEventListener('click', (event) => {
            tipValue = parseFloat(btn.innerHTML) / 100;
    
            if (event.target.innerHTML == btn.innerHTML) {
                btn.classList.add('btn-focus');
                customInput.value = '';
            }
        })
    })
}

// calculate the total

function numberOfTips() {
    console.log(`number of people: ${numberInput.value}`);

    if ( (parseInt(numberInput.value) == 0 )|| numberInput.value == "" ) {
        numberContainer.classList.add('alert') // activate the alert
        numberAlert.innerHTML = "Can't be zero";

    } else { numberContainer.classList.remove('alert'); numberAlert.innerHTML = "";}
}

function customValue() {
    let customVal = parseInt(customInput.value);
    if (customVal > 0) { tipValue = customVal / 100; }
}

function totalOftheBill() {
    const billValue = parseFloat(this.value);
    const numberValue = parseInt(numberInput.value);

    let tipTotal = (billValue * tipValue) / numberValue;
    let billTotal = billValue + tipTotal;

    totalTip.innerHTML =`$${tipTotal.toFixed(2)}`;
    totalBill.innerHTML = `$${billTotal.toFixed(2)}`;
}

function resetButton() {
    tipValue = 0;
    billInput.value = '';
    numberInput.value = '';
    customInput.value = '';
    totalTip.innerHTML = '$0.00';
    totalBill.innerHTML = '$0.00';
}