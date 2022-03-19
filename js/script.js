console.log("je mooooooeder");

// Hier worden de variabelen aangemaakt en verwezen naar elementen in de html of css.

var buttonElement = document.querySelector("button");

var kaasElement = document.querySelector(".kaas");

var tomaatElement = document.querySelector(".tomaat");

var salamiElement = document.querySelector(".salami");

var makreelElement = document.querySelector(".makreel");

var pos2Element = document.querySelector(".pos2");

var pos3Element = document.querySelector(".pos3");

var pos4Element = document.querySelector(".pos4");

var pos5Element = document.querySelector(".pos5");

var pos6Element = document.querySelector(".pos6");

var tjerrie = document.querySelector(".tjerrieChappen");

// Hier worden de standaard waardes van de posities aangegeven.

var pos2Status = "leeg";
var pos3Status = "leeg";
var pos4Status = "leeg";
var pos5Status = "leeg";
var pos6Status = "leeg";

// Hier staat de code voor het kiezen van de ingredienten, er word gekeken naar de stutus van een positie en als die positie leeg is word hij gevuld met het gekozen ingedient, ander gaat hiuj kijken bij de volgende plek.

function kaasKiezen() {
  if (pos2Status == "leeg") {
    pos2Status = "vol";
    pos2Element.src = "images/kaas_rij.svg";
  } else if (pos3Status == "leeg") {
    pos3Status = "vol";
    pos3Element.src = "images/kaas_rij.svg";
  } else if (pos4Status == "leeg") {
    pos4Status = "vol";
    pos4Element.src = "images/kaas_rij.svg";
  } else if (pos5Status == "leeg") {
    pos5Status = "vol";
    pos5Element.src = "images/kaas_rij.svg";
  };
};

function tomaatKiezen() {
  if (pos2Status == "leeg") {
    pos2Status = "vol";
    pos2Element.src = "images/tomaat_rij.svg";
  } else if (pos3Status == "leeg") {
    pos3Status = "vol";
    pos3Element.src = "images/tomaat_rij.svg";
  } else if (pos4Status == "leeg") {
    pos4Status = "vol";
    pos4Element.src = "images/tomaat_rij.svg";
  } else if (pos5Status == "leeg") {
    pos5Status = "vol";
    pos5Element.src = "images/tomaat_rij.svg";
  };
};

function salamiKiezen() {
  if (pos2Status == "leeg") {
    pos2Status = "vol";
    pos2Element.src = "images/salami_rij.svg";
  } else if (pos3Status == "leeg") {
    pos3Status = "vol";
    pos3Element.src = "images/salami_rij.svg";
  } else if (pos4Status == "leeg") {
    pos4Status = "vol";
    pos4Element.src = "images/salami_rij.svg";
  } else if (pos5Status == "leeg") {
    pos5Status = "vol";
    pos5Element.src = "images/salami_rij.svg";
  };
};

function makreelKiezen() {
  if (pos2Status == "leeg") {
    pos2Status = "vol";
    pos2Element.src = "images/makreel.svg";
  } else if (pos3Status == "leeg") {
    pos3Status = "vol";
    pos3Element.src = "images/makreel.svg";
  } else if (pos4Status == "leeg") {
    pos4Status = "vol";
    pos4Element.src = "images/makreel.svg";
  } else if (pos5Status == "leeg") {
    pos5Status = "vol";
    pos5Element.src = "images/makreel.svg";
  };
};

// Hier onder staat de code voor het random afspelen van een geluid uit een array als je met je muis over de makreel gaat.

function makreelHover (){

  var visGeluid = Math.floor(Math.random()*4) +1;

  var audioArray = ['blub_geluid.m4a', 'vis_geluid.m4a', 'fap_geluid.m4a', 'markreel_geluid.m4a', ]

  var visHover = audioArray[visGeluid-1];

  console.log(visHover);

  var audio = new Audio ("audio/"+visHover);

  audio.play();
}

// Hier onder staat de code die de gif aanroept van tjerrie, ook word daarna het broodje weer vrij gemaakt om opnieuw te kunnen beginnen.

function tjerrieChappen() {
  tjerrie.src = "images/tjerrie_chappen.gif";

  var audioEten = new Audio ("audio/tjerrie_chappen.mp3");

  audioEten.play();
}

function tjerrieWeg(){
  tjerrie.src = "images/";
  pos2Status = "leeg";
  pos2Element.src = "";
  pos3Status = "leeg";
  pos3Element.src = "";
  pos4Status = "leeg";
  pos4Element.src = "";
  pos5Status = "leeg";
  pos5Element.src = "";
  pos6Status = "leeg";
  pos6Element.src = "";
}

function broodjeKlaar() {
  if (pos2Status == "leeg") {
    pos2Status = "vol";
    pos3Status = "vol";
    pos4Status = "vol";
    pos5Status = "vol";
    pos2Element.src = "images/brood_boven.svg";
  } else if (pos3Status == "leeg") {
    pos3Status = "vol";
    pos4Status = "vol";
    pos5Status = "vol";
    pos3Element.src = "images/brood_boven.svg";
  } else if (pos4Status == "leeg") {
    pos4Status = "vol";
    pos5Status = "vol";
    pos4Element.src = "images/brood_boven.svg";
  } else if (pos5Status == "leeg") {
    pos5Status = "vol";
    pos5Element.src = "images/brood_boven.svg";
  } else if (pos6Status == "leeg") {
    pos6Status = "vol";
    pos6Element.src = "images/brood_boven.svg";
  };

  // Hier worden na een bepaalde tijd de bovenstaande 2 functies aangroepen. Eerst de gif van Tjerrie en dan het verdwijnen van de ingredienten.

  setTimeout(tjerrieChappen, 5000);
  setTimeout(tjerrieWeg, 14000);
};

// Hier staat de code waarmee je de ingedienten weg kan halen als je iets wil veranderen

function pos6Leeg(){
  if (pos6Status == "vol") {
    pos6Status = "leeg";
    pos6Element.src = "";
  }
}

function pos5Leeg(){
  if (pos6Status == "vol") {
    pos6Status = "leeg";
    pos6Element.src = "";
  } else if (pos5Status == "vol") {
    pos5Status = "leeg";
    pos5Element.src = "";
  }
}

function pos4Leeg(){
  if (pos6Status == "vol") {
    pos6Status = "leeg";
    pos6Element.src = "";
  } else if (pos5Status == "vol") {
    pos5Status = "leeg";
    pos5Element.src = "";
  } else if (pos4Status == "vol") {
    pos4Status = "leeg";
    pos4Element.src = "";
  }
}

function pos3Leeg(){
  if (pos6Status == "vol") {
    pos6Status = "leeg";
    pos6Element.src = "";
  } else if (pos5Status == "vol") {
    pos5Status = "leeg";
    pos5Element.src = "";
  } else if (pos4Status == "vol") {
    pos4Status = "leeg";
    pos4Element.src = "";
  } else if (pos3Status == "vol") {
    pos3Status = "leeg";
    pos3Element.src = "";
  }
}

function pos2Leeg(){
  if (pos6Status == "vol") {
    pos6Status = "leeg";
    pos6Element.src = "";
  } else if (pos5Status == "vol") {
    pos5Status = "leeg";
    pos5Element.src = "";
  } else if (pos4Status == "vol") {
    pos4Status = "leeg";
    pos4Element.src = "";
  } else if (pos3Status == "vol") {
    pos3Status = "leeg";
    pos3Element.src = "";
  } else if (pos2Status == "vol") {
    pos2Status = "leeg";
    pos2Element.src = "";
  }
}

// Hier worden de functies aangeroepen

kaasElement.addEventListener("click", kaasKiezen);
tomaatElement.addEventListener("click", tomaatKiezen);
salamiElement.addEventListener("click", salamiKiezen);
makreelElement.addEventListener("click", makreelKiezen);
buttonElement.addEventListener("click", broodjeKlaar);

makreelElement.addEventListener("mouseover", makreelHover);

pos6Element.addEventListener("click", pos6Leeg);
pos5Element.addEventListener("click", pos5Leeg);
pos4Element.addEventListener("click", pos4Leeg);
pos3Element.addEventListener("click", pos3Leeg);
pos2Element.addEventListener("click", pos2Leeg);
