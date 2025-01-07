function inputHandler() {
  const costInput = document.querySelector(".cost-input");
  let cost = Number(costInput.value);
  console.log(cost);
  if (cost < 60) {
    cost = cost + 10;
  }
  document.querySelector(".output").innerHTML = `$${cost}`;
}

function handleKeyDown(event) {
  if (event.key === "Enter") {
    inputHandler();
  }
}
