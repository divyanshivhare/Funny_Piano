var len = document.querySelectorAll(".container").length;
for (var i = 0; i < len; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function () {
    var ch = this.innerHTML.toLowerCase();
    soundKeys(ch);
    // buttonAnimation(ch);

    switch (ch) {
      case "a":
        var a1 = new Audio("sounds/tom-1.mp3");
        a1.play();
        break;
      case "b":
        var b1 = new Audio("sounds/crash.mp3");
        b1.play();
        break;
      case "c":
        var c1 = new Audio("sounds/tom-2.mp3");
        c1.play();
        break;
      case "d":
        var d1 = new Audio("sounds/snare.mp3");
        d1.play();
        break;
      case "e":
        var e1 = new Audio("sounds/tom-3.mp3");
        e1.play();
        break;
      case "f":
        var f1 = new Audio("sounds/tom-4.mp3");
        f1.play();
        break;
      case "g":
        var g1 = new Audio("sounds/kick-bass.mp3");
        g1.play();
        break;
      case "h":
        var h1 = new Audio("sounds/tom-1.mp3");
        h1.play();
        break;
      case "i":
        var i1 = new Audio("sounds/snare.mp3");
        i1.play();
        break;
      case "j":
        var j1 = new Audio("sounds/kick-bass.mp3");
        j1.play();
        break;
      case "k":
        var k1 = new Audio("sounds/crash.mp3");
        k1.play();
        break;
      case "l":
        var l1 = new Audio("sounds/tom-1.mp3");
        l1.play();
        break;
      case "m":
        var m1 = new Audio("sounds/tom-1.mp3");
        m1.play();
        break;
      case "n":
        var n1 = new Audio("sounds/crash.mp3");
        n1.play();
        break;
      case "o":
        var o1 = new Audio("sounds/tom-2.mp3");
        o1.play();
        break;
      case "p":
        var p1 = new Audio("sounds/snare.mp3");
        p1.play();
        break;
      case "q":
        var q1 = new Audio("sounds/tom-4.mp3");
        q1.play();
        break;
      case "r":
        var r1 = new Audio("sounds/tom-3.mp3");
        r1.play();
        break;
      case "s":
        var s1 = new Audio("sounds/tom-2.mp3");
        s1.play();
        break;
      case "t":
        var t1 = new Audio("sounds/kick-bass.mp3");
        t1.play();
        break;
      case "u":
        var u1 = new Audio("sounds/snare.mp3");
        u1.play();
        break;
      case "v":
        var v1 = new Audio("sounds/tom-2.mp3");
        v1.play();
        break;
      case "w":
        var w1 = new Audio("sounds/crash.mp3");
        w1.play();
        break;
      case "x":
        var x1 = new Audio("sounds/tom-1.mp3");
        x1.play();
        break;
      case "y":
        var y1 = new Audio("sounds/snare.mp3");
        y1.play();
        break;
      case "z":
        var z1 = new Audio("sounds/kick-bass.mp3");
        z1.play();
        break;
      default:
        console.log("Nothing found");
        break;
    }
  });
}

document.addEventListener("keypress", function (event) {
  soundKeys(event.key.toLowerCase());
  buttonAnimation(event.key);
});

function soundKeys(key) {
  switch (key) {
    case "a":
      var a1 = new Audio("sounds/tom-1.mp3");
      a1.play();
      break;
    case "b":
      var b1 = new Audio("sounds/crash.mp3");
      b1.play();
      break;
    case "c":
      var c1 = new Audio("sounds/tom-2.mp3");
      c1.play();
      break;
    case "d":
      var d1 = new Audio("sounds/snare.mp3");
      d1.play();
      break;
    case "e":
      var e1 = new Audio("sounds/tom-3.mp3");
      e1.play();
      break;
    case "f":
      var f1 = new Audio("sounds/tom-4.mp3");
      f1.play();
      break;
    case "g":
      var g1 = new Audio("sounds/kick-bass.mp3");
      g1.play();
      break;
    case "h":
      var h1 = new Audio("sounds/tom-1.mp3");
      h1.play();
      break;
    case "i":
      var i1 = new Audio("sounds/snare.mp3");
      i1.play();
      break;
    case "j":
      var j1 = new Audio("sounds/kick-bass.mp3");
      j1.play();
      break;
    case "k":
      var k1 = new Audio("sounds/crash.mp3");
      k1.play();
      break;
    case "l":
      var l1 = new Audio("sounds/tom-1.mp3");
      l1.play();
      break;
    case "m":
      var m1 = new Audio("sounds/tom-1.mp3");
      m1.play();
      break;
    case "n":
      var n1 = new Audio("sounds/crash.mp3");
      n1.play();
      break;
    case "o":
      var o1 = new Audio("sounds/tom-2.mp3");
      o1.play();
      break;
    case "p":
      var p1 = new Audio("sounds/snare.mp3");
      p1.play();
      break;
    case "q":
      var q1 = new Audio("sounds/tom-4.mp3");
      q1.play();
      break;
    case "r":
      var r1 = new Audio("sounds/tom-3.mp3");
      r1.play();
      break;
    case "s":
      var s1 = new Audio("sounds/tom-2.mp3");
      s1.play();
      break;
    case "t":
      var t1 = new Audio("sounds/kick-bass.mp3");
      t1.play();
      break;
    case "u":
      var u1 = new Audio("sounds/snare.mp3");
      u1.play();
      break;
    case "v":
      var v1 = new Audio("sounds/tom-2.mp3");
      v1.play();
      break;
    case "w":
      var w1 = new Audio("sounds/crash.mp3");
      w1.play();
      break;
    case "x":
      var x1 = new Audio("sounds/tom-1.mp3");
      x1.play();
      break;
    case "y":
      var y1 = new Audio("sounds/snare.mp3");
      y1.play();
      break;
    case "z":
      var z1 = new Audio("sounds/kick-bass.mp3");
      z1.play();
      break;
    default:
      console.log("Nothing found");
      break;
  }
}


var buttons = document.querySelectorAll(".container");

// Click event listener
buttons.forEach(function (button) {
  button.addEventListener("click", function () {
    var ch = button.innerHTML.toLowerCase();
    soundKeys(ch);
    button.classList.add("pressed");
    setTimeout(function () {
      button.classList.remove("pressed");
    }, 200);
  });
});

// Keydown event listener
document.addEventListener("keypress", function (event) {
  var key = event.key.toLowerCase();
  var button = Array.from(buttons).find(function (btn) {
    return btn.innerHTML.toLowerCase() === key;
  });
  if (button) {
    soundKeys(key);
    button.classList.add("pressed");
    setTimeout(function () {
      button.classList.remove("pressed");
    }, 200);
  }
});

