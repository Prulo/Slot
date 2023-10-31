// Gör en arr med alla olika frukter
// gör 3 tomma arr där frukterna hamnar
// gör en random funktion där den bestämmer vad för frukt som hammnar i array 1,2,3
// gör en if stats som gämför frukterna i alla 3 arrayer och ser om dom är lika
// om alla frukter är lika sätt vinnst och lägg vinnst i en tom variabel som + på summan
// samma variabel ska börja på insatt summa med pengar

let frukter = ["Melon", "Melon", "Melon", "Cherry", "Cherry", "Cherry", "Banana", "Banana", "Kiwi", "Kiwi", "Crown!"];
let slotOne = [];
let slotTwo = [];
let slotThree = [];
let sum = 0;

function updateSum() {
  let headone = document.getElementById("headone");
  let valueone = document.getElementById("valueone");
  let valuetwo = document.getElementById("valuetwo");
  let valuethree = document.getElementById("valuethree");
  headone.innerHTML = "SUM: " + sum + " $";
  valueone.innerHTML = slotOne;
  valuetwo.innerHTML = slotTwo;
  valuethree.innerHTML = slotThree;
}

function getRandomFruit() {
  return frukter[Math.floor(Math.random() * frukter.length)];
}

function play() {
    if (sum > 0) {
      
    const playCost = 2;
  if (sum >= playCost) {
    sum -= playCost;
  } 

  slotOne = [];
  slotTwo = [];
  slotThree = [];

  slotOne.push(getRandomFruit());
  slotTwo.push(getRandomFruit());
  slotThree.push(getRandomFruit());

  let message = document.getElementById("message");

  if (
    slotOne[0] === "Melon" &&
    slotTwo[0] === "Melon" &&
    slotThree[0] === "Melon"
  ) {
    message.innerHTML = "You have won $10!";
    sum += 10;
  } else if (
    slotOne[0] === "Cherry" &&
    slotTwo[0] === "Cherry" &&
    slotThree[0] === "Cherry"
  ) {
    message.innerHTML = "You have won $20!";
    sum += 20;
  } else if (
    slotOne[0] === "Banana" &&
    slotTwo[0] === "Banana" &&
    slotThree[0] === "Banana"
  ) {
    message.innerHTML = "You have won $40!";
    sum += 40;
  }else if (
    slotOne[0] === "Kiwi" &&
    slotTwo[0] === "Kiwi" &&
    slotThree[0] === "Kiwi"
  ) {
    message.innerHTML = "You have won $50!";
    sum += 50;
  }else if (
    slotOne[0] === "Crown!" &&
    slotTwo[0] === "Crown!" &&
    slotThree[0] === "Crown!"
  ) {
    message.innerHTML = "Jackpot $1000!";
    sum += 1000;
  } else {
    message.innerHTML = "You lost 2$, Try to spin again!";
  }
  
  updateSum();
}
}

function addMoneyHundred() {
   sum += 100;
   updateSum();
}

function addMoneyFifty() {
  sum += 50;
  updateSum();
}

updateSum();
play();
