console.log("script.js is running..");

//Pernilles kode//
//https://www.w3schools.com/howto/howto_js_curtain_menu.asp//
function openNav() {
  document.getElementById("myNav").style.width = "65%";
}
function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

function openNav2() {
  document.getElementById("myNav2").style.width = "65%";
}
function closeNav2() {
  document.getElementById("myNav2").style.width = "0%";
}
//pernille kode slut//
//Lauras kode// - //https://www.w3schools.com/howto/howto_js_toggle_hide_show.asp
function openSearch() {
  var x = document.getElementById("searchBar");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

//Lauras kode slut//

//dropdown// - //Jakobs kode//
//https://stackoverflow.com/questions/19206919/how-to-create-checkbox-inside-dropdown

var checkList = document.getElementById("list1");
checkList.getElementsByClassName("anchor")[0].onclick = function (evt) {
  if (checkList.classList.contains("visible"))
    checkList.classList.remove("visible");
  else checkList.classList.add("visible");
};

var checkList2 = document.getElementById("list2");
checkList2.getElementsByClassName("anchor")[0].onclick = function (evt) {
  if (checkList2.classList.contains("visible"))
    checkList2.classList.remove("visible");
  else checkList2.classList.add("visible");
};

var checkList3 = document.getElementById("list3");
checkList3.getElementsByClassName("anchor")[0].onclick = function (evt) {
  if (checkList3.classList.contains("visible"))
    checkList3.classList.remove("visible");
  else checkList3.classList.add("visible");
};
var checkList4 = document.getElementById("list4");
checkList4.getElementsByClassName("anchor")[0].onclick = function (evt) {
  if (checkList4.classList.contains("visible"))
    checkList4.classList.remove("visible");
  else checkList4.classList.add("visible");
};

//kalender//
function activeFunc(id) {
  document.querySelector("#" + id).classList.add("dateActive");
}

function activeFuncTime(id) {
  document.querySelector("#" + id).classList.add("timeActive");
}

function newPrice() {
  document.getElementById("newPrices").innerHTML =
    "<i>400kr</i> - <b>300kr</b>";
  document.getElementById("newPrices2").innerHTML =
    "<i>360kr</i> - <b>280kr</b>";
  document.getElementById("newPrices3").innerHTML =
    "<i>900kr</i> - <b>810kr</b>";
}

//Jakobs kode slut//

//Tharshika kode start// // https://www.w3schools.com/howto/howto_css_modals.asp

var modal = document.getElementById("myModal");

var btn = document.getElementById("cancelBtn");

btn.onclick = function () {
  modal.style.display = "block";
};
//Tharshika kode slut//

// daniels kode// https://codepen.io/SimonHRD/pen/RwPVyVR
var input = document.getElementsByClassName("toggleswitch");
var outputtext = document.getElementById("status");

input.addEventListener("change", function () {
  if (this.checked) {
    outputtext.innerHTML = "aktiv";
  } else {
    outputtext.innerHTML = "inaktiv";
  }
});
//daniels kode slut//
