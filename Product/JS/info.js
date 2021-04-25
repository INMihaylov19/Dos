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
    document.write("1010 не е наличен");
}

if (count >= 1) {
    document.write("1011 не е наличен");
}

if (count >= 2) {
    document.write("1100 не е наличен");
}

if (count >= 3) {
    document.write("1101 не е наличен");
}

if (count >= 4) {
    document.write("1110 не е наличен");
}

if (count >= 5) {
    document.write("1111 не е наличен");
}

if (count >= 6) {
    document.write("10000 не е наличен");
}

if (count >= 7) {
    document.write("10001 не е наличен");
}