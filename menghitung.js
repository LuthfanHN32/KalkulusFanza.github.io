const inputA = document.querySelector(".input-a");
const inputR = document.querySelector(".input-r");
const inputN = document.querySelector(".input-n");
const btnHitung = document.querySelector(".calculate");
const navbarNav = document.querySelector(".navbar-nav");
let btnClear = document.querySelector(".erase");
let inputs = document.querySelectorAll("input");

document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

const hamburger = document.querySelector("#hamburger-menu");
document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

const calculateResultWrapper = document.querySelector(".calculate-result");

function gamma(z) {
  return (
    Math.sqrt((2 * Math.PI) / z) *
    Math.pow((1 / Math.E) * (z + 1 / (12 * z - 1 / (10 * z))), z)
  );
}

function hitungDeretEksponensial(a, r, n) {
  var deret = [];
  for (var i = 0; i < n; i++) {
    var nilai = a * Math.pow(r, i);
    deret.push(nilai);
  }
  return deret;
}

// function factorial(n)
// {
//     let res = 1;
//     for (let i = 2;  i <= n; i++)
//         res *= i;
//     return res;
// }

// function sum(n)
// {
//     let sum = 0;
//     for (let i = 1; i <= n; i++)
//         sum += 1.0 / factorial(i);
//     return sum;
// }

btnHitung.addEventListener("click", function (e) {
  e.preventDefault();
  const a = inputA.value;
  const r = inputR.value;
  const n = inputN.value;

  const sum = hitungDeretEksponensial(a, r, n);

  calculateResultWrapper.classList.add("visible");

  // change , to + in result array
  const deret = sum.join(" + ");
  document.querySelector(".deret").innerHTML = `Deret : ${deret}`;
  document.querySelector(".result").innerHTML = `Jumlah n suku : ${sum.reduce(
    (a, b) => a + b,
    0
  )}`;
});

btnClear.addEventListener("click", () => {
  inputs.forEach((input) => (input.value = ""));
  calculateResultWrapper.classList.remove("visible");
});
