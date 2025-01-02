function subscribe() {
  const btnSubscribe = document.querySelector(".btn-subscribe");
  if (btnSubscribe.innerText === "Subscribe") {
    btnSubscribe.innerHTML = "Subscribed";
  } else {
    btnSubscribe.innerHTML = "Subscribe";
  }
}

//innerHTML consider spaces too
//innerText consider only text
