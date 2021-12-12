// iPhone event handle
// Phone Plus
const phonePlus = document.getElementById("phonePlus");
phonePlus.addEventListener("click", function () {
  const phoneInputCount = document.getElementById("phoneInputCount").value;
  const phoneInputCountNumber = parseInt(phoneInputCount);
  const phoneTotalCount = phoneInputCountNumber + 1;

  document.getElementById("phoneInputCount").value = phoneTotalCount;

  const phoneCurrentPrice = document.getElementById("phoneCurrentPrice").innerText;
  const phoneCurrentPriceNumber = parseFloat(phoneCurrentPrice);
  const totalphoneCurrentPrice = phoneCurrentPriceNumber + 1219;

  document.getElementById("phoneCurrentPrice").innerText = totalphoneCurrentPrice;

  const subTotal = document.getElementById("subTotal").innerText;
  const subTotalNumber = parseFloat(subTotal);
  const totlaPhoneSubTotal = subTotalNumber + 1219;

  document.getElementById("subTotal").innerText = totlaPhoneSubTotal;
  document.getElementById("totalBalance").innerText = totlaPhoneSubTotal;
});

// Phone Minus
const phoneMinus = document.getElementById("phoneMinus");
phoneMinus.addEventListener("click", function () {
  const phoneInputCount = document.getElementById("phoneInputCount").value;
  const phoneInputCountNumber = parseInt(phoneInputCount);

  if (phoneInputCountNumber != 1) {
    const phoneTotalCount = phoneInputCountNumber - 1;

    document.getElementById("phoneInputCount").value = phoneTotalCount;

    const phoneCurrentPrice = document.getElementById("phoneCurrentPrice").innerText;
    const phoneCurrentPriceNumber = parseFloat(phoneCurrentPrice);
    const totalphoneCurrentPrice = phoneCurrentPriceNumber - 1219;

    document.getElementById("phoneCurrentPrice").innerText = totalphoneCurrentPrice;

    const subTotal = document.getElementById("subTotal").innerText;
    const subTotalNumber = parseFloat(subTotal);
    const totlaPhoneSubTotal = subTotalNumber - 1219;

    document.getElementById("subTotal").innerText = totlaPhoneSubTotal;
    document.getElementById("totalBalance").innerText = totlaPhoneSubTotal;
  } else {
    document.getElementById("phoneInputCount").value = 1;
    document.getElementById("phoneCurrentPrice").innerText = 1219;
  }
});

// iPhone Case event handle
// Phone Case Plus
const phoneCasePlus = document.getElementById("phoneCasePlus");
phoneCasePlus.addEventListener("click", function () {
  const phoneCaseInputCount = document.getElementById("phoneCaseInputCount").value;
  const phoneCaseCountNumber = parseInt(phoneCaseInputCount);
  const totalPhoneCaseCountNumber = phoneCaseCountNumber + 1;

  document.getElementById("phoneCaseInputCount").value = totalPhoneCaseCountNumber;

  const phoneCaseCurrentPrice = document.getElementById("phoneCaseCurrentPrice").innerText;
  const phoneCaseCurrentPriceNumber = parseFloat(phoneCaseCurrentPrice);
  const totalPhoneCaseCurrentPriceNumber = phoneCaseCurrentPriceNumber + 59;

  document.getElementById("phoneCaseCurrentPrice").innerText = totalPhoneCaseCurrentPriceNumber;

  const subTotal = document.getElementById("subTotal").innerText;
  const subTotalNumber = parseFloat(subTotal);
  const totlaCaseSubTotal = subTotalNumber + 59;

  document.getElementById("subTotal").innerText = totlaCaseSubTotal;
  document.getElementById("totalBalance").innerText = totlaCaseSubTotal;
});

// Phone Case Minus
const phoneCaseMinus = document.getElementById("phoneCaseMinus");
phoneCaseMinus.addEventListener("click", function () {
  const phoneCaseInputCount = document.getElementById("phoneCaseInputCount").value;
  const phoneCaseCountNumber = parseInt(phoneCaseInputCount);

  if (phoneCaseCountNumber != 1) {
    const totalPhoneCaseCountNumber = phoneCaseCountNumber - 1;
    document.getElementById("phoneCaseInputCount").value = totalPhoneCaseCountNumber;
    const phoneCaseCurrentPrice = document.getElementById("phoneCaseCurrentPrice").innerText;
    const phoneCaseCurrentPriceNumber = parseFloat(phoneCaseCurrentPrice);
    const totalPhoneCaseCurrentPriceNumber = phoneCaseCurrentPriceNumber - 59;

    document.getElementById("phoneCaseCurrentPrice").innerText = totalPhoneCaseCurrentPriceNumber;

    const subTotal = document.getElementById("subTotal").innerText;
    const subTotalNumber = parseFloat(subTotal);
    const totlaCaseSubTotal = subTotalNumber - 59;

    document.getElementById("subTotal").innerText = totlaCaseSubTotal;
    document.getElementById("totalBalance").innerText = totlaCaseSubTotal;
  } else {
    document.getElementById("phoneCaseInputCount").value = 1;
    document.getElementById("phoneCaseCurrentPrice").innerText = 59;
  }
});

// Remove event Handle
// Remove Phone Prices
function removePhoneIteam() {
  const phoneCurrentPrice = document.querySelector("#phoneCurrentPrice").innerText;
  const phoneCurrentPriceNuber = parseFloat(phoneCurrentPrice);
  const removePhoneSubTotal = document.querySelector("#subTotal").innerText;
  const removePhoneSubTotalNumber = parseFloat(removePhoneSubTotal);
  const subTotal = removePhoneSubTotalNumber - phoneCurrentPriceNuber;

  document.querySelector("#subTotal").innerText = subTotal;
  document.querySelector("#totalBalance").innerText = subTotal;
  document.querySelector("#phoneItem").style.display = "none";
}


// Remove Phone Case Prices
function caseRemoveIteam() {
  const phoneCaseCurrentPrice = document.querySelector("#phoneCaseCurrentPrice").innerText;
  const phoneCaseCurrentPriceNumber = parseFloat(phoneCaseCurrentPrice);
  const currentSubTotal = document.querySelector("#subTotal").innerText;
  const currentSubTotalNumber = parseFloat(currentSubTotal);

  const subTotal = currentSubTotalNumber - phoneCaseCurrentPriceNumber;
  document.querySelector("#subTotal").innerText = subTotal;
  document.querySelector("#totalBalance").innerText = subTotal;
  document.querySelector("#phoneCaseIteam").style.display = "none";
}

// Check Out Button
function checkOutBtn(){
  alert("Welcome to Shopping my site.")
}
