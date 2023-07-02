// range input 
const sliders = document.querySelectorAll("input[type='range']");
sliders.forEach(function(slider){
    slider.addEventListener("input",Tipcalculate);
});
//bill counter in total
const billInput = document.getElementById("bill");
billInput.addEventListener("change",Tipcalculate);

function Tipcalculate(){ 
    // Enter bill Amount 
    let bill = parseFloat(billInput.value);
    // tip value 
    let tip = document.getElementById("tip").value;
    // number of people count
    let no = document.getElementById("no-of-people").value;

    billInput.value = bill.toFixed(2);

    let tT = parseFloat((bill * (tip/100)).toFixed(2));
    let total = parseFloat((bill + tT).toFixed(2));

    let tipPerPerson = (tT / no).toFixed(2);
    let totalPerPerson = (total / no).toFixed(2);

    // user input print 
    document.getElementById("tip-amount").textContent = `\$ ${tT}`;
    document.getElementById("total-amount").textContent = `\$ ${total}`;
    
    document.getElementById("tip-percent").textContent = `${tip}%`;
    document.getElementById("num").textContent = no;

    document.getElementById("tip-per-person").textContent = `\$ ${tipPerPerson}`;
    document.getElementById("total-per-person").textContent = `\$ ${totalPerPerson}`;
}
Tipcalculate();