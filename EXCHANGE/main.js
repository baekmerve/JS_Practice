//choosing elements

const amountInput = document.querySelector("#amount");
const resultInput = document.querySelector("#result");
const firstOption = document.querySelector("#firstCurrencyOption");
const secondOption = document.querySelector("#secondCurrencyOption");
const button = document.querySelector("#button");

//in order to use the method in the Currency class, creaing a child using new keyword
const currency = new Currency();

runEventListeners();

function runEventListeners() {
  button.addEventListener("click", exchange);
}

function exchange() {
  const amount = Number(amountInput.value.trim());
  const firstOptionValue =
    firstOption.options[firstOption.selectedIndex].textContent;
  const secondOptionValue =
    secondOption.options[secondOption.selectedIndex].textContent;

  //exchange method returns promise, need to use then-catch
  currency
    .exchange(amount, firstOptionValue, secondOptionValue)
    .then((result) => {
      resultInput.value = result.toFixed(2);
    });
}
