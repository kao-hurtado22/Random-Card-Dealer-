window.onload = () => {
  let generateRandomNumber = () => {
    let numbers = [
      "A",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "J",
      "Q",
      "K"
    ];
    let indexNumbers = Math.floor(Math.random() * numbers.length);
    return numbers[indexNumbers];
  };

  let generateRandomSuit = () => {
    let suit = ["diamond", "spades", "hearts", "clubs"];
    let indexSuit = Math.floor(Math.random() * suit.length);
    return suit[indexSuit];
  };
  document.querySelector(".card").className = `card ${generateRandomSuit()}`;
  document.querySelector(".card").innerHTML = generateRandomNumber();
};
