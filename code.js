var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["224e4dd7-db0d-4e24-b9ae-dc05b97c7dc6","f32569ba-8628-4448-9929-5f794671b147","b33e53fb-520b-4224-bfcb-0bdfa454b6b1","ea2d38d2-a542-452c-becf-ccf16b38d54a"],"propsByKey":{"224e4dd7-db0d-4e24-b9ae-dc05b97c7dc6":{"name":"animation_1","sourceUrl":"assets/api/v1/animation-library/mUlvnlbeZ5GHYr_Lb4NIuMwPs7kGxHWz/category_backgrounds/blank.png","frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":4,"version":"mUlvnlbeZ5GHYr_Lb4NIuMwPs7kGxHWz","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/api/v1/animation-library/mUlvnlbeZ5GHYr_Lb4NIuMwPs7kGxHWz/category_backgrounds/blank.png"},"f32569ba-8628-4448-9929-5f794671b147":{"name":"pupilportrait_01_1","sourceUrl":null,"frameSize":{"x":317,"y":375},"frameCount":1,"looping":true,"frameDelay":12,"version":"VoVNzqTxsq5WP5JfUyyngivriNuDCPvG","categories":["faces"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":317,"y":375},"rootRelativePath":"assets/f32569ba-8628-4448-9929-5f794671b147.png"},"b33e53fb-520b-4224-bfcb-0bdfa454b6b1":{"name":"pupilportrait_01_2","sourceUrl":null,"frameSize":{"x":317,"y":375},"frameCount":1,"looping":true,"frameDelay":12,"version":"PFpv2PKhCJPTmSay9KWyQ2HPdHk2teN5","categories":["faces"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":317,"y":375},"rootRelativePath":"assets/b33e53fb-520b-4224-bfcb-0bdfa454b6b1.png"},"ea2d38d2-a542-452c-becf-ccf16b38d54a":{"name":"gameplay_purplediamond_1","sourceUrl":null,"frameSize":{"x":40,"y":38},"frameCount":1,"looping":true,"frameDelay":12,"version":"QmAaZ_V0R41tVdNhx3dEWWYmOXn3h0ek","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":40,"y":38},"rootRelativePath":"assets/ea2d38d2-a542-452c-becf-ccf16b38d54a.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var parede1 = createSprite(100,222,10,60);
parede1.shapeColor="green";
var parede2 = createSprite(120,150,60,10);
parede2.shapeColor="green";
var parede3 = createSprite(180,300,10,60);
parede3.shapeColor="green";
var parede4 = createSprite(120,280,60,10);
parede4.shapeColor="green";
var parede5 = createSprite(250,90,10,60);
parede5.shapeColor="green";
var parede6 = createSprite(180,180,60,10);
parede6.shapeColor="green";
var parede7 = createSprite(330,280,80,10);
parede7.shapeColor="green";
var parede8 = createSprite(40,90,10,60);
parede8.shapeColor="green";
var parede9 = createSprite(30,300,60,10);
parede9.shapeColor="green";
var parede10 = createSprite(280,170,10,60);
parede10.shapeColor="green";
var parede11 = createSprite(100,50,60,10);
parede11.shapeColor="green";
var parede12 = createSprite(290,361,60,10);
parede12.shapeColor="green";
var parede13 = createSprite(100,350,10,60);
parede13.shapeColor="green";
var parede14 = createSprite(50,190,60,10);
parede14.shapeColor="green";
var parede15 = createSprite(230,240,10,60);
parede15.shapeColor="green";
var parede16 = createSprite(350,60,60,10);
parede16.shapeColor="green";
var parede17 = createSprite(150,50,10,60);
parede17.shapeColor="green";
var parede18 = createSprite(350,170,60,10);
parede18.shapeColor="green";
var parede19 = createSprite(230,40,60,10);
parede19.shapeColor="green";
var parede20 = createSprite(260,290,10,60);
parede20.shapeColor="green";
var parede21 = createSprite(150,350,60,10);
parede21.shapeColor="green";
var parede22 = createSprite(300,90,60,10);
parede22.shapeColor="green";
var sofia = createSprite(20,25,18,18);
sofia.shapeColor="pink";
var gema = createSprite(380,380,10,10);
  gema.setAnimation("gameplay_purplediamond_1");


createEdgeSprites();
  
  
  
  function draw() {
background(144,238,144);

if (keyDown("up")){
  sofia.y=sofia.y-10;
}
if (keyDown("down"))  {
  sofia.y=sofia.y+10
}

if (keyDown("RIGHT")){
  sofia.x=sofia.x+10;
}
if (keyDown("LEFT")){
  sofia.x=sofia.x-10;
}
  
sofia.bounceOff(edges);



sofia.bounceOff (parede1); 

sofia.bounceOff (parede2);

sofia.bounceOff (parede3);

sofia.bounceOff (parede4);

sofia.bounceOff (parede5);

sofia.bounceOff (parede6);

sofia.bounceOff (parede7);

sofia.bounceOff (parede8);

sofia.bounceOff (parede9);

sofia.bounceOff (parede10);

sofia.bounceOff (parede11);

sofia.bounceOff (parede12);

sofia.bounceOff (parede13);

sofia.bounceOff (parede14);

sofia.bounceOff (parede15);

sofia.bounceOff (parede16);

sofia.bounceOff (parede17);

sofia.bounceOff (parede18);

sofia.bounceOff (parede19);

sofia.bounceOff (parede20);

sofia.bounceOff (parede21);

sofia.bounceOff (parede22);

if (sofia.isTouching(gema)){
  fill(0)
  textSize(24);
  text ("ganhou",120,200)
}

  

drawSprites();


}










// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
