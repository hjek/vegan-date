// ==UserScript==
// @name        Vegan Bumble
// @namespace   Violentmonkey Scripts
// @match       file:///home/pelle/code/bumbetest.html
// @match       https://am1.bumble.com/app
// @grant       none
// @version     1.0
// @author      -
// @description 26/04/2023, 13.46.44
// ==/UserScript==

// GOAL:
// highlight vegans,
// auto-discard carnist

var vegan_match = /vegan/
var carnist_match = /hunting/

var vegan_theme = {
 "--color-primary" : "lime",
 "--color-primary-light" : "lime",
 "background":"lime" // just for testing on plain html
}

var carnist_theme = {
 "--color-primary" : "red",
 "--color-primary-light" : "red",
 "background":"red"
}


function veganize() {
  console.log("veganizing...")
  if (document.getElementsByTagName("html")[0].innerText.match(/e/)) {
  //if (true) {
    for (property in vegan_theme) {
      document.querySelector(":root").style.setProperty(property, vegan_theme[property])
    }
  }
}

//document.onload = veganize()
setTimeout(veganize, "5000")

