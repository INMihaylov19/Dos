const form = document.querySelector(".signal-form")
function validate(e) {

    e.preventDefault();

    if (document.signalForm.name.value == "") {
        alert("Please provide your name!");
    }
    else if (document.signalForm.tnumber.value == "" || isNaN(document.signalForm.tnumber.value)) {
        alert("Please provide your Telephone Number in format +359...!");
    }
    else if (document.signalForm.adres.value == "") {

        alert("Please provide an adress.");
    } 
    else {
        addSignal();
    }
}

var counter = 1;
let signali = [];
const addSignal = (ev) => {

    let signal = {
        id: counter,
        name: document.signalForm.name.value,
        tnumber: document.signalForm.tnumber.value,
        adres: document.signalForm.adres.value,
    }
    signali.push(signal);
    document.forms[0].reset();
    localStorage.setItem('Signali', JSON.stringify(signali));
    counter++;
}

form.addEventListener("submit",validate);
