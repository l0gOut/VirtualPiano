let audioA = new Audio("sounds/A.mp3")
let audioS = new Audio("sounds/D.mp3");
let audioD = new Audio("sounds/F.mp3");
let audioF = new Audio("sounds/G.mp3");
let audioG = new Audio("sounds/H.mp3");
let audioH = new Audio("sounds/J.mp3");
let audioJ = new Audio("sounds/S.mp3");
let audioW = new Audio("sounds/W.mp3");
let audioE = new Audio("sounds/E.mp3");
let audioT = new Audio("sounds/T.mp3");
let audioY = new Audio("sounds/Y.mp3");
let audioU = new Audio("sounds/U.mp3");

function color(evCode) {
    let element = document.getElementById(evCode);
    element.style.backgroundColor = "gray";
    document.addEventListener("keyup", ev => {
        if (evCode === "KeyW" || evCode === "KeyE" || evCode === "KeyT" || evCode === "KeyY" || evCode === "KeyU") {
            element.style.backgroundColor = "black";
        } else {
            element.style.backgroundColor = "white";
        }
    })
}

document.addEventListener("keydown", ev => {
   if (ev.code === "KeyA") {
       audioT.load();
       audioA.play().then();
       color(ev.code);
   } else if (ev.code === "KeyS") {
       audioS.load();
       audioS.play().then();
       color(ev.code);
   } else if (ev.code === "KeyD") {
       audioD.load();
       audioD.play().then();
       color(ev.code);
   } else if (ev.code === "KeyF") {
       audioF.load();
       audioF.play().then();
       color(ev.code);
   } else if (ev.code === "KeyG") {
       audioG.load();
       audioG.play().then();
       color(ev.code);
   } else if (ev.code === "KeyH") {
       audioH.load();
       audioH.play().then();
       color(ev.code);
   } else if (ev.code === "KeyJ") {
       audioJ.load();
       audioJ.play().then();
       color(ev.code);
   } else if (ev.code === "KeyW") {
       audioW.load();
       audioW.play().then();
       color(ev.code);
   } else if (ev.code === "KeyE") {
       audioE.load();
       audioE.play().then();
       color(ev.code);
   } else if (ev.code === "KeyT") {
       audioT.load();
       audioT.play().then();
       color(ev.code);
   } else if (ev.code === "KeyY") {
       audioY.load();
       audioY.play().then();
       color(ev.code);
   } else if (ev.code === "KeyU") {
       audioU.load();
       audioU.play().then();
       color(ev.code);
   } else console.log("Error!");
});