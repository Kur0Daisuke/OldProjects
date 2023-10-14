let character = document.querySelector("#test");
let map = document.querySelector(".map");

let keys = "";
let speed = 1;

window.onkeydown = function (event) {
   var characterTop = window.getComputedStyle(character, null).getPropertyValue("top");
   var x = event.keyCode;
   keys = x;
   if (keys == 68) {
      console.log("It's D key");
   }else if (keys == 65) {
      console.log("It's A key");
   }
   else if (keys == 83) {
      console.log("It's S key");
   }else if (keys == 87) {
      console.log("It's W key");
   }
   console.log(keys, characterTop);
}