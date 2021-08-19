//getPin function
function getPin() {
  const pin = Math.round(Math.random() * 10000);
  const pinString = pin.toString();
  if (pinString.length == 4) {
    return pin;
  } else {
    return getPin();
  }
}
//get genterator function
function generatePin() {
  const pin = getPin();
  document.getElementById("pin-display").value = pin;
}
//show display value
function keyPad(event) {
  let number = event.target.innerText;
  const calDisplay = document.getElementById("cal-display");
  let calDisplayValue = calDisplay.value;
  //show display
  if (isNaN(number)) {
    if (number == "C") {
      calDisplay.value = "";
    }
    //< condition
    else if (number == "<") {
      calDisplayValue = calDisplayValue.substring(
        0,
        calDisplayValue.length - 1
      );
      calDisplay.value = calDisplayValue;
    }
  } else {
    calDisplay.value += number;
  }
}
//submti fuction call
function handleSubmit() {
  //get id
  const calDisplay = document.getElementById("cal-display");
  const pinDisplay = document.getElementById("pin-display");
  const sucessMessagee = document.getElementById("notify-success");
  const failMessage = document.getElementById("notify-fail");
  const counterContainer = document.getElementById("counter-container");
  //sucess message or fail message
  if (calDisplay.value == pinDisplay.value) {
    sucessMessagee.style.display = "block";
    failMessage.style.display = "none";
    counterContainer.style.display = "none";
  } else {
    sucessMessagee.style.display = "none";
    failMessage.style.display = "block";
    //counter function call
    counter();
  }
}
//counter function
function counter() {
  const counter = document.getElementById("counter");
  const counterText = counter.innerHTML;
  let counterNumber = parseInt(counterText);
  if (counterNumber <= 0) {
    counter.innerText = counterNumber;
    document.getElementById("submit-btn").setAttribute("disabled", true);
  } else {
    counterNumber = counterNumber - 1;
    counter.innerHTML = counterNumber;
  }
}
