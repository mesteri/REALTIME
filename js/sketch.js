//Declare arrays and variables

var grassColorRGB = [],
  flowerMarigoldColorRGB = [],
  bushSplashColorRGB = [],
  skyColorRGB = [],
  cloudColorRGB = [],
  bushDetailedColorRGB = [],
  waterColorRGB =[],  
  waterColorR, waterColorG, waterColorB, waterX, waterY, waterBrushMinSize, waterBrushMinSize, bushDetailedColorR, bushDetailedColorG, bushDetailedColorB, bushDetailedDrippingFactor, grassX, grassY, mariGoldX, mariGoldY, violetX, violetY, space, pencilMinSize, pencilMaxSize, opacity, lineDirection, skyX, skyY, skySpace, skyBrushMinSize, skyBrushMaxSize, cloudX, cloudY, cloudSpace, cloudBrushMinSize, cloudBrushMaxSize, spaceMG, flowerMarigoldLeafBrushMinSize, flowerMarigoldLeafBrushMaxSize, flowerMarigoldLeafD, grassColorR, grassColorG, grassColorB, flowerMarigoldColorR, flowerMarigoldColorG, flowerMarigoldColorB, skyColorR, skyColorG, skyColorB, cloudColorR, cloudColorG, cloudColorB, bushSplashColorR, bushSplashColorG, bushSplashColorB, canvas, grassColorRSlider, grassColorGSlider, grassColorBSlider, flowerMarigoldColorRSlider, flowerMarigoldColorGSlider, flowerMarigoldColorBSlider, skyColorRSlider, skyColorGSlider, skyColorBSlider, bushSplashColorRSlider, bushSplashColorGSlider, bushSplashColorBSlider, bushDetailedColorRSlider, bushDetailedColorGSlider, bushDetailedColorBSlider;

// Declare and set speech recording variables

var SpeechRec = new p5.SpeechRec()
let pword = ""
SpeechRec.continuous = true
SpeechRec.interimResults = true

//Set values that cannot be changed while drawing, but setable here.

let bushSplashX = 512; //startpoints
let bushSplashY = 384;
let bushSplashSpace = 13; //step, space between two touch
let bushSplashBrushMinSize = 35;
let bushSplashBrushMaxSize = 55;
let bushSplashSplash = 25;
let bushSplashColorVariability = 3; //Maximum color deviation (variance) from the setting
let bushSplashOpacity = 3;

let bushDetailedX = 512; //startpoints
let bushDetailedY = 384;
let bushDetailedSpace = 11; //step
let bushDetailedBrushMinSize = 11;
let bushDetailedBrushMaxSize = 35;
let bushDetailedDetailed = 11;  //reduces the brush diameter by this maximum
let bushDetailedColorVariability = 150; //the maximum + - deviation from the set color.
let bushDetailedOpacity = 11;


function setup() {
  canvas = createCanvas(1300, 768);
  // SPEECHREC

SpeechRec.start()
  SpeechRec.onResult = showResult
  SpeechRec.onStart = onStart

  //SETS

  skySpace = 21; //step
  skyBrushMinSize = 37;
  skyBrushMaxSize = 172;
  cloudSpace = 21; //step
  cloudBrushMinSize = 7;
  cloudBrushMaxSize = 133;

  skyX = random(1, 1024 / 2);
  skyY = random(1, height / 3);

  cloudX = random(1, 1024 / 2);
  cloudY = random(1, height / 3);

  pencilMinSize = 1;
  pencilMaxSize = 5;
  lineMinLenght = 10;
  lineMaxLenght = 77;

  flowerMarigoldLeafBrushMinSize = 3;
  flowerMarigoldLeafBrushMaxSize = 10;

  colorVariability = 6;
  opacity = 33;

  grassX = 1024 / 2;
  grassY = height - 180;
  spaceGrass = random(5, 13)

  mariGoldX = (1024 / 2) + 100;
  mariGoldY = height - 200;
  spaceMG = 25; //maximum spaces between new marigolds
  
  waterX = (1024 / 2) + 100;
  waterY = height - 200;
  spacewater = 15;
  

  //COLOR MIXERS

  grassColorRSlider = createSlider(0, 255, 49, 1);
  grassColorGSlider = createSlider(0, 255, 150, 1);
  grassColorBSlider = createSlider(0, 255, 42, 1);
  grassColorRSlider.position(1025, 20);
  grassColorRSlider.style('width', '255px');
  grassColorGSlider.position(1025, 40);
  grassColorGSlider.style('width', '255px');
  grassColorBSlider.position(1025, 60);
  grassColorBSlider.style('width', '255px');

  flowerMarigoldColorRSlider = createSlider(0, 255, 236, 1);
  flowerMarigoldColorGSlider = createSlider(0, 255, 247, 1);
  flowerMarigoldColorBSlider = createSlider(0, 255, 15, 1);
  flowerMarigoldColorRSlider.position(1025, 100);
  flowerMarigoldColorRSlider.style('width', '255px');
  flowerMarigoldColorGSlider.position(1025, 120);
  flowerMarigoldColorGSlider.style('width', '255px');
  flowerMarigoldColorBSlider.position(1025, 140);
  flowerMarigoldColorBSlider.style('width', '255px');

  bushSplashColorRSlider = createSlider(0, 255, 33, 1);
  bushSplashColorGSlider = createSlider(0, 255, 222, 1);
  bushSplashColorBSlider = createSlider(0, 255, 22, 1);
  bushSplashColorRSlider.position(1025, 180);
  bushSplashColorRSlider.style('width', '255px');
  bushSplashColorGSlider.position(1025, 200);
  bushSplashColorGSlider.style('width', '255px');
  bushSplashColorBSlider.position(1025, 220);
  bushSplashColorBSlider.style('width', '255px');

  bushDetailedColorRSlider = createSlider(0, 255, 111, 1);
  bushDetailedColorGSlider = createSlider(0, 255, 222, 1);
  bushDetailedColorBSlider = createSlider(0, 255, 100, 1);
  bushDetailedColorRSlider.position(1025, 260);
  bushDetailedColorRSlider.style('width', '255px');
  bushDetailedColorGSlider.position(1025, 280);
  bushDetailedColorGSlider.style('width', '255px');
  bushDetailedColorBSlider.position(1025, 300);
  bushDetailedColorBSlider.style('width', '255px');

  skyColorRSlider = createSlider(0, 255, 0, 1);
  skyColorGSlider = createSlider(0, 255, 0, 1);
  skyColorBSlider = createSlider(0, 255, 225, 1);
  skyColorRSlider.position(1025, 340);
  skyColorRSlider.style('width', '255px');
  skyColorGSlider.position(1025, 360);
  skyColorGSlider.style('width', '255px');
  skyColorBSlider.position(1025, 380);
  skyColorBSlider.style('width', '255px');

  cloudColorRSlider = createSlider(0, 255, 255, 1);
  cloudColorGSlider = createSlider(0, 255, 255, 1);
  cloudColorBSlider = createSlider(0, 255, 255, 1);
  cloudColorRSlider.position(1025, 420);
  cloudColorRSlider.style('width', '255px');
  cloudColorGSlider.position(1025, 440);
  cloudColorGSlider.style('width', '255px');
  cloudColorBSlider.position(1025, 460);
  cloudColorBSlider.style('width', '255px');

  waterColorRSlider = createSlider(0, 255, 0, 1);
  waterColorGSlider = createSlider(0, 255, 35, 1);
  waterColorBSlider = createSlider(0, 255, 200, 1);
  waterColorRSlider.position(1025, 500);
  waterColorRSlider.style('width', '255px');
  waterColorGSlider.position(1025, 520);
  waterColorGSlider.style('width', '255px');
  waterColorBSlider.position(1025, 540);
  waterColorBSlider.style('width', '255px');
  
  
}

function draw() {
  
  //get color from SLIDERS + LABELS
  
  texts();
  
  //drawing at the press of a key
  if (keyIsDown(77)) {
    drawMarigold();
  } //m
  if (keyIsDown(83)) {
    drawSky(), drawSky(), drawSky();
  } //s
  if (keyIsDown(67)) {
    drawClouds();
  } //c
  if (keyIsDown(71)) {
    drawGrass(), drawGrass(), drawGrass(), drawGrass(), drawGrass();
  } //g
  if (keyIsDown(66)) {
    drawBushSplashBrush(), drawBushSplashBrush(), drawBushSplashBrush();
  } //b
  if (keyIsDown(68)) {
    bushDetailedBrush(), bushDetailedBrush(), bushDetailedBrush(), bushDetailedBrush();
  } //d
  if (keyIsDown(87)) {
    drawWater(), drawWater(), drawWater(), drawWater();
  } //w
  if (keyIsDown(81)) {
    saveThePicture();
  } //q as SAVE
}

// ***********************************
// ***********************************
function onStart(){
  pword = SpeechRec.resultString
}
// ***********************************
// ***********************************
function showResult(){
  if(SpeechRec.resultConfidence < 0.009 || pword == SpeechRec.resultString){
    return 0
  }
  pword = SpeechRec.resultString
  switch(SpeechRec.resultString){
 
    case "sky":
      for (let i = 0; i < 500; i++) {
    drawSky();
  }
     break
  
      case "cloud":
      for (let i = 0; i < 90; i++) {
    drawClouds()
  }
      break
   
      case "tree":
    for (let i = 0; i < 90; i++) {
   drawBushSplashBrush();
  }
    break
   
    case "grass":
      for (let i = 0; i < 90; i++) {
  drawGrass();
  }
       break
       
    case "bush":
    for (let i = 0; i < 90; i++) {
    bushDetailedBrush()
    }      
      break
      
    case "flower":
    for (let i = 0; i < 90; i++) {
   drawMarigold()
    }   
      break
      
      case "water":
    for (let i = 0; i < 500; i++) {
   drawWater()
    }   
      break
      
      case "save":  
      saveThePicture()
      break
  
  }
}

//*******************************************************************************************


function drawSky() {

  // // Brush moving
  
  var randomValue = random();
  if (randomValue < .25) {
    skyX = skyX - skySpace;
  } else if (randomValue < .5) {
    skyX = skyX + skySpace;
  } else if (randomValue < .75) {
    skyY = skyY - skySpace;
  } else {
    skyY = skyY + skySpace;
  }

  // wrap around left and right sides
  if (skyX < 0) {
    skyX = random(1, 1024);
  } else if (skyX > 1024) {
    skyX = random(1, 1024);
  }

  // wrap around top and bottom sides
  if (skyY < 0) {
    skyY = height / 2;
  } else if (skyY > height / 2) {
    skyY = random(1, 100);
  }

  //Read the recorded color values from array

  let skyColorR = skyColorRGB[0];
  let skyColorG = skyColorRGB[1];
  let skyColorB = skyColorRGB[2];

  //Brush head
  noStroke();
  fill(skyColorR, skyColorG, skyColorB, 1);
  ellipse(skyX, skyY, (random(skyBrushMinSize, skyBrushMaxSize), (random(skyBrushMinSize, skyBrushMaxSize))));
  ellipse(skyX + random(skyBrushMinSize / 2), skyY - random(skyBrushMinSize / 2), (random(skyBrushMinSize, skyBrushMaxSize) / random(2, 5), (random(skyBrushMinSize, skyBrushMaxSize) / random(2, 5))));
  ellipse(skyX + random(skyBrushMinSize / 2), skyY + random(skyBrushMinSize / 2), (random(skyBrushMinSize, skyBrushMaxSize) / random(2, 5), (random(skyBrushMinSize, skyBrushMaxSize) / random(2, 5))));
  ellipse(skyX - random(skyBrushMinSize / 2), skyY - random(skyBrushMinSize / 2), (random(skyBrushMinSize, skyBrushMaxSize) / random(2, 5), (random(skyBrushMinSize, skyBrushMaxSize) / random(2, 5))));
  ellipse(skyX - random(skyBrushMinSize / 2), skyY + random(skyBrushMinSize / 2), (random(skyBrushMinSize, skyBrushMaxSize) / random(2, 5), (random(skyBrushMinSize, skyBrushMaxSize) / random(2, 5))));

}

function drawClouds() {

  //Read the recorded color values from array
  
  let cloudColorR = cloudColorRGB[0];
  let cloudColorG = cloudColorRGB[1];
  let cloudColorB = cloudColorRGB[2];

  // Brush moving
  
  var randomValue = random();
  if (randomValue < .25) {
    cloudX = cloudX - skySpace;
  } else if (randomValue < .5) {
    cloudX = cloudX + skySpace;
  } else if (randomValue < .75) {
    cloudY = cloudY - skySpace;
  } else {
    cloudY = cloudY + skySpace;
  }

  // wrap around left and right sides
  if (cloudX < 0) {
    cloudX = random(1, 1024);
  } else if (cloudX > 1024) {
    cloudX = random(1, 1024);
  }

  // wrap around top and bottom sides
  if (cloudY < 0) {
    cloudY = height / 2 - 50;
  } else if (cloudY > height / 2 - 50) {
    cloudY = random(1, 100);
  }

  //Brush head
  noStroke();
  fill(cloudColorR, cloudColorG, cloudColorB, 1);
  ellipse(cloudX, cloudY, (random(cloudBrushMinSize, cloudBrushMaxSize), (random(cloudBrushMinSize, cloudBrushMaxSize))));
  ellipse(cloudX + random(cloudBrushMinSize / 2), cloudY - random(cloudBrushMinSize / 2), (random(cloudBrushMinSize, cloudBrushMaxSize) / random(2, 5), (random(cloudBrushMinSize, cloudBrushMaxSize) / random(2, 5))));
  ellipse(cloudX + random(cloudBrushMinSize / 2), cloudY + random(cloudBrushMinSize / 2), (random(cloudBrushMinSize, cloudBrushMaxSize) / random(2, 5), (random(cloudBrushMinSize, cloudBrushMaxSize) / random(2, 5))));
  ellipse(cloudX - random(cloudBrushMinSize / 2), cloudY - random(cloudBrushMinSize / 2), (random(cloudBrushMinSize, cloudBrushMaxSize) / random(2, 5), (random(cloudBrushMinSize, cloudBrushMaxSize) / random(2, 5))));
  ellipse(cloudX - random(cloudBrushMinSize / 2), cloudY + random(cloudBrushMinSize / 2), (random(cloudBrushMinSize, cloudBrushMaxSize) / random(2, 5), (random(cloudBrushMinSize, cloudBrushMaxSize) / random(2, 5))));

}

function drawMarigold() {

  // Stamp moving
  
  var randomValue = random();
  if (randomValue < .25) {
    mariGoldX = mariGoldX - random(5, spaceMG);
  } else if (randomValue < .5) {
    mariGoldX = mariGoldX + random(5, spaceMG);
  } else if (randomValue < .75) {
    mariGoldY = mariGoldY - random(5, spaceMG);
  } else {
    mariGoldY = mariGoldY + random(5, spaceMG);
  }

  // wrap around left and right sides
  if (mariGoldX < 0) {
    mariGoldX = 1024;
  } else if (mariGoldX > 1024) {
    mariGoldX = 0;
  }

  // wrap around top and bottom sides
  if (mariGoldY < height - 200) {
    mariGoldY = random(height - 100, height - 200);
  } else if (mariGoldY > height - 100) {
    mariGoldY = random(height - 100, height - 200);
  }

  //Use the grass color to coloring flowers leaves
  
  let grassColorR = grassColorRGB[0];
  let grassColorG = grassColorRGB[1];
  let grassColorB = grassColorRGB[2];
  
  //Read the recorded color values from array
  
  let flowerMarigoldColorR = flowerMarigoldColorRGB[0];
  let flowerMarigoldColorG = flowerMarigoldColorRGB[1];
  let flowerMarigoldColorB = flowerMarigoldColorRGB[2];

  //Stamping the flower
  
  noStroke();
  fill(grassColorR, grassColorG, grassColorB, opacity);
  flowerMarigoldLeafD = random(flowerMarigoldLeafBrushMinSize, flowerMarigoldLeafBrushMaxSize);
  ellipse(mariGoldX, mariGoldY, flowerMarigoldLeafD, flowerMarigoldLeafD / 2);
  ellipse(mariGoldX + flowerMarigoldLeafD / 2, mariGoldY + flowerMarigoldLeafD / 2, flowerMarigoldLeafD, flowerMarigoldLeafD / 2);
  ellipse(mariGoldX + flowerMarigoldLeafD / 2, mariGoldY - flowerMarigoldLeafD / 2, flowerMarigoldLeafD, flowerMarigoldLeafD / 2);
  ellipse(mariGoldX - flowerMarigoldLeafD / 2, mariGoldY + flowerMarigoldLeafD / 2, flowerMarigoldLeafD, flowerMarigoldLeafD / 2);
  ellipse(mariGoldX - flowerMarigoldLeafD / 2, mariGoldY - flowerMarigoldLeafD / 2, flowerMarigoldLeafD, flowerMarigoldLeafD / 2);
  ellipse(mariGoldX - flowerMarigoldLeafD / 2, mariGoldY, flowerMarigoldLeafD, flowerMarigoldLeafD / 2);
  ellipse(mariGoldX + flowerMarigoldLeafD / 2, mariGoldY, flowerMarigoldLeafD, flowerMarigoldLeafD / 2);

  fill(flowerMarigoldColorR, flowerMarigoldColorG, flowerMarigoldColorB, opacity + 200);

  ellipse(mariGoldX, mariGoldY, flowerMarigoldLeafD / 2, flowerMarigoldLeafD / 3);
  ellipse(mariGoldX - 2, mariGoldY, flowerMarigoldLeafD / 2, flowerMarigoldLeafD / 3);
  ellipse(mariGoldX, mariGoldY - 3, flowerMarigoldLeafD / 2, flowerMarigoldLeafD / 3);
  ellipse(mariGoldX, mariGoldY + 3, flowerMarigoldLeafD / 2, flowerMarigoldLeafD / 3);

  fill(flowerMarigoldColorR, flowerMarigoldColorG, flowerMarigoldColorB, opacity);
  flowerMarigoldLeafD = random(flowerMarigoldLeafBrushMinSize, flowerMarigoldLeafBrushMaxSize);
  ellipse(mariGoldX, mariGoldY, flowerMarigoldLeafD, flowerMarigoldLeafD / 2);
  ellipse(mariGoldX + flowerMarigoldLeafD / 2, mariGoldY + flowerMarigoldLeafD / 2, flowerMarigoldLeafD, flowerMarigoldLeafD / 2);
  ellipse(mariGoldX + flowerMarigoldLeafD / 2, mariGoldY - flowerMarigoldLeafD / 2, flowerMarigoldLeafD, flowerMarigoldLeafD / 2);
  ellipse(mariGoldX - flowerMarigoldLeafD / 2, mariGoldY + flowerMarigoldLeafD / 2, flowerMarigoldLeafD, flowerMarigoldLeafD / 2);
  ellipse(mariGoldX - flowerMarigoldLeafD / 2, mariGoldY - flowerMarigoldLeafD / 2, flowerMarigoldLeafD, flowerMarigoldLeafD / 2);
  ellipse(mariGoldX - flowerMarigoldLeafD / 2, mariGoldY, flowerMarigoldLeafD, flowerMarigoldLeafD / 2);
  ellipse(mariGoldX + flowerMarigoldLeafD / 2, mariGoldY, flowerMarigoldLeafD, flowerMarigoldLeafD / 2);
}

function drawGrass() {
  
  // Pencil moving
  
  var randomValue = random();
  if (randomValue < .25) {
    grassX = grassX - spaceGrass;
  } else if (randomValue < .5) {
    grassX = grassX + spaceGrass;
  } else if (randomValue < .75) {
    grassY = grassY - spaceGrass;
  } else {
    grassY = grassY + spaceGrass;
  }
  // wrap around left and right sides
  if (grassX < 0) {
    grassX = 1024;
  } else if (grassX > 1024) {
    grassX = 0;
  }

  // wrap around top and bottom sides
  if (grassY < height - 200) {
    grassY = random(height - 100, height - 180);
  } else if (grassY > height - 100) {
    grassY = random(height - 100, height - 180);
  }
  lineDirection = random(-1, 1);

  //Read the recorded color values from array
  
  let grassColorR = grassColorRGB[0];
  let grassColorG = grassColorRGB[1];
  let grassColorB = grassColorRGB[2];

  stroke(grassColorR, grassColorG, grassColorB, opacity);
  strokeWeight(random(pencilMinSize, pencilMaxSize));
  line(grassX, grassY, grassX + (random(lineMinLenght, lineMaxLenght)) * lineDirection, grassY - (random(lineMinLenght, lineMaxLenght)));

}

function drawBushSplashBrush() {

  //Brush moving

  var randomValue = random();
  if (randomValue < .25) {
    bushSplashX = bushSplashX - random(bushSplashSpace);
  } else if (randomValue < .5) {
    bushSplashX = bushSplashX + random(bushSplashSpace);
  } else if (randomValue < .75) {
    bushSplashY = bushSplashY - random(bushSplashSpace);
  } else {
    bushSplashY = bushSplashY + random(bushSplashSpace);
  }

  // wrap around left and right sides
  if (bushSplashX < 0) {
    bushSplashX = random(1, 1024);
  } else if (bushSplashX > 1024) {
    bushSplashX = random(1, 1024);
  }

  // wrap around top and bottom sides
  if (bushSplashY < height / 2 - 100) {
    bushSplashY = height - 180;
  } else if (bushSplashY > height - 180) {
    bushSplashY = random(height / 2 - 100, height - 180);
  }

  //Read the recorded color values from array
  
  let bushSplashColorR = bushSplashColorRGB[0];
  let bushSplashColorG = bushSplashColorRGB[1];
  let bushSplashColorB = bushSplashColorRGB[2];

  noStroke();
  fill(bushSplashColorR, bushSplashColorG, bushSplashColorB, bushSplashOpacity);
  ellipse(bushSplashX, bushSplashY - random(bushSplashSplash), random(bushSplashBrushMinSize / 3, bushSplashBrushMaxSize / 3), random(bushSplashBrushMinSize / 3, bushSplashBrushMaxSize / 3));
  ellipse(bushSplashX + random(bushSplashSplash), bushSplashY - random(bushSplashSplash), random(bushSplashBrushMinSize / 3, bushSplashBrushMaxSize / 3), random(bushSplashBrushMinSize / 3, bushSplashBrushMaxSize / 3));
  ellipse(bushSplashX + random(bushSplashSplash), bushSplashY, random(bushSplashBrushMinSize / 3, bushSplashBrushMaxSize / 3), random(bushSplashBrushMinSize / 3, bushSplashBrushMaxSize / 3));
  ellipse(bushSplashX + random(bushSplashSplash), bushSplashY + random(bushSplashSplash), random(bushSplashBrushMinSize / 3, bushSplashBrushMaxSize / 3), random(bushSplashBrushMinSize / 3, bushSplashBrushMaxSize / 3));
  ellipse(bushSplashX, bushSplashY + random(bushSplashSplash), random(bushSplashBrushMinSize / 3, bushSplashBrushMaxSize / 3), random(bushSplashBrushMinSize / 3, bushSplashBrushMaxSize / 3));
  ellipse(bushSplashX - random(bushSplashSplash), bushSplashY + random(bushSplashSplash), random(bushSplashBrushMinSize / 3, bushSplashBrushMaxSize / 3), random(bushSplashBrushMinSize / 3, bushSplashBrushMaxSize / 3));
  ellipse(bushSplashX - random(bushSplashSplash), bushSplashY, random(bushSplashBrushMinSize / 3, bushSplashBrushMaxSize / 3), random(bushSplashBrushMinSize / 3, bushSplashBrushMaxSize / 3));
  ellipse(bushSplashX - random(bushSplashSplash), bushSplashY - random(bushSplashSplash), random(bushSplashBrushMinSize / 3, bushSplashBrushMaxSize / 3), random(bushSplashBrushMinSize / 3, bushSplashBrushMaxSize / 3));
}

function bushDetailedBrush() {

  //Brush moving

  var randomValue = random();
  if (randomValue < .25) {
    bushDetailedX = bushDetailedX - random(bushDetailedSpace);
  } else if (randomValue < .5) {
    bushDetailedX = bushDetailedX + random(bushDetailedSpace);
  } else if (randomValue < .75) {
    bushDetailedY = bushDetailedY - random(bushDetailedSpace);
  } else {
    bushDetailedY = bushDetailedY + random(bushDetailedSpace);
  }

  // wrap around left and right sides
  if (bushDetailedX < 0) {
    bushDetailedX = random(1, 1024);
  } else if (bushDetailedX > 1024) {
    bushDetailedX = random(1, 1024);
  }

  // wrap around top and bottom sides
  if (bushDetailedY < height / 2 - 100) {
    bushDetailedY = height - 180;
  } else if (bushDetailedY > height - 180) {
    bushDetailedY = random(height / 2 - 100, height - 180);
  }

  //Read the recorded color values from array
  
  let bushDetailedColorR = bushDetailedColorRGB[0];
  let bushDetailedColorG = bushDetailedColorRGB[1];
  let bushDetailedColorB = bushDetailedColorRGB[2];

 //Set the detailed bush colors 
  
  let variedBushDetailedColorR = bushDetailedColorR + random(-1 * bushDetailedColorVariability, bushDetailedColorVariability);
  let variedBushDetailedColorG = bushDetailedColorG + random(-1 * bushDetailedColorVariability, bushDetailedColorVariability);
  let variedBushDetailedColorB = bushDetailedColorB + random(-1 * bushDetailedColorVariability, bushDetailedColorVariability);

  //Paint the detailed bush
  
  noStroke();
  fill(variedBushDetailedColorR, variedBushDetailedColorG, variedBushDetailedColorB, bushDetailedOpacity);
  ellipse(bushDetailedX, bushDetailedY - random(bushDetailedDetailed), random(bushDetailedBrushMinSize / 3, bushDetailedBrushMaxSize / 3), random(bushDetailedBrushMinSize / 3, bushDetailedBrushMaxSize / 3));
  ellipse(bushDetailedX + random(bushDetailedDetailed), bushDetailedY - random(bushDetailedDetailed), random(bushDetailedBrushMinSize / 3, bushDetailedBrushMaxSize / 3), random(bushDetailedBrushMinSize / 3, bushDetailedBrushMaxSize / 3));
  ellipse(bushDetailedX + random(bushDetailedDetailed), bushDetailedY, random(bushDetailedBrushMinSize / 3, bushDetailedBrushMaxSize / 3), random(bushDetailedBrushMinSize / 3, bushDetailedBrushMaxSize / 3));
  ellipse(bushDetailedX + random(bushDetailedDetailed), bushDetailedY + random(bushDetailedDetailed), random(bushDetailedBrushMinSize / 3, bushDetailedBrushMaxSize / 3), random(bushDetailedBrushMinSize / 3, bushDetailedBrushMaxSize / 3));
  ellipse(bushDetailedX, bushDetailedY + random(bushDetailedDetailed), random(bushDetailedBrushMinSize / 3, bushDetailedBrushMaxSize / 3), random(bushDetailedBrushMinSize / 3, bushDetailedBrushMaxSize / 3));
  ellipse(bushDetailedX - random(bushDetailedDetailed), bushDetailedY + random(bushDetailedDetailed), random(bushDetailedBrushMinSize / 3, bushDetailedBrushMaxSize / 3), random(bushDetailedBrushMinSize / 3, bushDetailedBrushMaxSize / 3));
  ellipse(bushDetailedX - random(bushDetailedDetailed), bushDetailedY, random(bushDetailedBrushMinSize / 3, bushDetailedBrushMaxSize / 3), random(bushDetailedBrushMinSize / 3, bushDetailedBrushMaxSize / 3));
  ellipse(bushDetailedX - random(bushDetailedDetailed), bushDetailedY - random(bushDetailedDetailed), random(bushDetailedBrushMinSize / 3, bushDetailedBrushMaxSize / 3), random(bushDetailedBrushMinSize / 3, bushDetailedBrushMaxSize / 3));
}

  function drawWater() {
  
  // Brush moving
  
  var randomValue = random();
  if (randomValue < .25) {
    waterX = waterX - spacewater;
  } else if (randomValue < .5) {
    waterX = waterX + spacewater;
  } else if (randomValue < .75) {
    waterY = waterY - spacewater;
  } else {
    waterY = waterY + spacewater;
  }
  // wrap around left and right sides
  if (waterX < 0) {
    waterX = 1024;
  } else if (waterX > 1024) {
    waterX = 0;
  }

  // wrap around top and bottom sides
  if (waterY < height - 200) {
    waterY = random(height - 100, height - 180);
  } else if (waterY > height - 100) {
    waterY = random(height - 100, height - 180);
  }
  
  //Read the recorded color values from array
  
  let waterColorR = waterColorRGB[0];
  let waterColorG = waterColorRGB[1];
  let waterColorB = waterColorRGB[2];

  noStroke();
    fill(waterColorR, waterColorG, waterColorB, random(1,5));
  ellipse(waterX + random(1,55), waterY+ random(1,5), random(5,55), random(5,25));
    fill(waterColorR, waterColorG+random(10,60), waterColorB, random(1,7));
  arc(waterX + random(1,35), waterY+ random(1,30), (waterX + (random(-10,75)))/25, waterY/70, PI, TWO_PI);
     fill(waterColorR, waterColorG+random(10,60), waterColorB+random(1,20), random(1,7));
  arc(waterX + random(1,35), waterY+ random(1,40), (waterX + (random(-10,75)))/25, waterY/70, TWO_PI, PI); 

}  
  
//get color from SLIDERS + LABELS
function texts() {
  fill(0);
  noStroke();
  text('Set the RGB mixer and press /g/ for draw grass', 1025, 10);
  grassColorRGB[0] = grassColorRSlider.value();
  grassColorRGB[1] = grassColorGSlider.value();
  grassColorRGB[2] = grassColorBSlider.value();

  text('Press /m/ for marigolds - ', 1025, 90);
  flowerMarigoldColorRGB[0] = flowerMarigoldColorRSlider.value();
  flowerMarigoldColorRGB[1] = flowerMarigoldColorGSlider.value();
  flowerMarigoldColorRGB[2] = flowerMarigoldColorBSlider.value();

  text('Press /b for bushes', 1025, 170);
  bushSplashColorRGB[0] = bushSplashColorRSlider.value();
  bushSplashColorRGB[1] = bushSplashColorGSlider.value();
  bushSplashColorRGB[2] = bushSplashColorBSlider.value();

  text('Press /d for more detailed bush', 1025, 250);
  bushDetailedColorRGB[0] = bushDetailedColorRSlider.value();
  bushDetailedColorRGB[1] = bushDetailedColorGSlider.value();
  bushDetailedColorRGB[2] = bushDetailedColorBSlider.value();

  text('Press /s for sky', 1025, 330);
  skyColorRGB[0] = skyColorRSlider.value();
  skyColorRGB[1] = skyColorGSlider.value();
  skyColorRGB[2] = skyColorBSlider.value();

  text('Press /c for clouds', 1025, 410);
  cloudColorRGB[0] = cloudColorRSlider.value();
  cloudColorRGB[1] = cloudColorGSlider.value();
  cloudColorRGB[2] = cloudColorBSlider.value();

  text('Press /w for water', 1025, 490);
  waterColorRGB[0] = waterColorRSlider.value();
  waterColorRGB[1] = waterColorGSlider.value();
  waterColorRGB[2] = waterColorBSlider.value();
  
  text('You can change the colors by sliders', 1025, 590);
  text('while you hold down the buttons.', 1025, 605);
  text('Press /q for save your picture.', 1025, 630);
}

//Save the picture

function saveThePicture() {
  saveCanvas(canvas, 'myPicture', 'jpg');
}