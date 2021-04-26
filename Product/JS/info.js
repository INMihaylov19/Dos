let signals = JSON.parse(window.localStorage.getItem("Signali"));
console.log(signals);
var count = 0;
for (const sgnl of signals) {
  const sgnlc = Object.assign(sgnl);
  delete sgnlc.id;
  count++;
  document.getElementById("list1").innerHTML += `<p>${sgnlc.name} е изпратил сигнал за пожар на адрес ${sgnlc.adres} (телефонен номер - ${sgnlc.tnumber} )</p>`;
}

if (count >= 1) {
    document.getElementById("status1").innerHTML=("Не е наличен");
}

if (count >= 2) {
    document.getElementById("status2").innerHTML=("Не е наличен");
}

if (count >= 3) {
    document.getElementById("status3").innerHTML=("Не е наличен");
}

if (count >= 4) {
    document.getElementById("status4").innerHTML=("Не е наличен");
}

if (count >= 5) {
    document.getElementById("status5").innerHTML=("Не е наличен");
}

if (count >= 6) {
    document.getElementById("status6").innerHTML=("Не е наличен");
}

if (count >= 7) {
    document.getElementById("status7").innerHTML=("Не е наличен");
}

if (count >= 8) {
    document.getElementById("status8").innerHTML=("Не е наличен");
}