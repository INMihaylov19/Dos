let signali = JSON.parse(localStorage.getItem("Signali"));
console.log(signali);
var count = 0;
for (const sgnl of signali) {
  const sgnlc = Object.assign(sgnl);
  delete sgnlc.id;
  count++;
  document.body.innerHTML += `<p>${sgnlc.name} е изпратил сигнал за пожар на адрес ${sgnlc.adres} (телефонен номер - ${sgnlc.tnumber} )</p>`;
}

if (count == 0) {
    document.write("Не е наличен");
}

if (count >= 1) {
    document.write("Не е наличен");
}

if (count >= 2) {
    document.write("Не е наличен");
}

if (count >= 3) {
    document.write("Не е наличен");
}

if (count >= 4) {
    document.write("Не е наличен");
}

if (count >= 5) {
    document.write("Не е наличен");
}

if (count >= 6) {
    document.write("Не е наличен");
}

if (count >= 7) {
    document.write("Не е наличен");
}