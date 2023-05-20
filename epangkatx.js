const inputX = document.querySelector(".input-x");
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

// function gamma(z) {
//   return (
//     Math.sqrt((2 * Math.PI) / z) *
//     Math.pow((1 / Math.E) * (z + 1 / (12 * z - 1 / (10 * z))), z)
//   );
// }

// function hitungDeretEksponensial(a, r, n) {
//   var deret = [];
//   for (var i = 0; i < n; i++) {
//     var nilai = a * Math.pow(r, i);
//     deret.push(nilai);
//   }
//   return deret;
// }

function hitungDeretEksponensial(x, n) {
  let result = 1;
  let fact = 1;

  for (let i = 1; i <= n; i++) {
    fact *= x / i;
    result += fact;
  }

  return result;
}
// console.log(hitungDeretEksponensial(2, 5));

btnHitung.addEventListener("click", function (e) {
  e.preventDefault();
  const x = inputX.value;
  const n = inputN.value;

  const sum = hitungDeretEksponensial(x, n);

  calculateResultWrapper.classList.add("visible");

  console.log(sum);
  // change , to + in result array
  // const result = sum.join(" + ");
  document.querySelector(".deret").innerHTML = `Hasil e^x (${x},${n}) : ${sum}`;
  // document.querySelector(".result").innerHTML = `Jumlah n suku : ${sum.reduce(
  //   (a, b) => a + b,
  //   0
  // )}`;
});

btnClear.addEventListener("click", () => {
  inputs.forEach((input) => (input.value = ""));
  calculateResultWrapper.classList.remove("visible");
});
