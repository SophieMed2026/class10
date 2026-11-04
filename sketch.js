let sound
//slider 
let slider
async function setup() {
  createCanvas(windowWidth, windowHeight);
  //use the p5 dom to create another paragraph 
  let p = createP('added this with p5')
  p.center()
  p.style('background-color', 'forestGreen')
sound = await loadSound ('07070103.wav')
 sound.play()
 sound.loop()
  slider = createSlider(-2, 2, 1, 0.5)
  slider.changed(newSliderValue)
  
}

function draw() {
  background(220);
  //this is drawn on canvas and cannot be highlighted 
  //dose not have css styling
  text('this is p5 text', 20, 20)
  function newSliderValue(){
    print(slider.value())
    sound.rate(slider.value())
  }
}