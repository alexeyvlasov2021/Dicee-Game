
function getRandomNumber() {
    return Math.floor(Math.random() * 6 + 1);
  }
  
  // Проверьте, есть ли переменная "count" в sessionStorage
  if (!sessionStorage.getItem("count")) {
    // Если переменной нет, установите ее в 1
    sessionStorage.setItem("count", 1);
  }
  
  var randomNumber1 = 6;
  var randomNumber2 = 6;
  var image1Path = "";
  var image2Path = "";
  
  // Если значение переменной "count" равно 1
  if (sessionStorage.getItem("count") == 1) {
    console.log("first if");
    image1Path = "./images/dice" + randomNumber1 + ".png";
    image2Path = "./images/dice" + randomNumber2 + ".png";
    document.querySelector("h1").innerHTML = "Refresh Me";
    // Измените значение переменной "count" на 2
    sessionStorage.setItem("count", 2);
    
  } else {
    console.log("second if");
    randomNumber1 = getRandomNumber();
    randomNumber2 = getRandomNumber();
    image1Path = "./images/dice" + randomNumber1 + ".png";
    image2Path = "./images/dice" + randomNumber2 + ".png";
  
    document.querySelector("img.img1").setAttribute("src", image1Path);
    document.querySelector("img.img2").setAttribute("src", image2Path);
  
    if (randomNumber1 > randomNumber2) {
      document.querySelector("h1").innerHTML = "&#128681Player1 won";
    } else if (randomNumber1 < randomNumber2) {
      document.querySelector("h1").innerHTML = "Player2 won&#128681";
    } else {
      document.querySelector("h1").innerHTML = "Draw";
    }
  }