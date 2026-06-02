const n1 = document.getElementById("num1");
const n2 = document.getElementById("num2");
const btn = document.getElementById("btn");
const result = document.getElementById("result");

btn.addEventListener("click", function () {
  const sum = parseFloat(n1.value) + parseFloat(n2.value);
      result.textContent = "Result: " + sum;

});
