  // Mie/Lauras kode - Side menu dropdowns - https://stackoverflow.com/questions/19206919/how-to-create-checkbox-inside-dropdown //
console.log ("script.js is running");

  var checkList6 = document.getElementById('list6');
  checkList6.getElementsByClassName('anchor')[0].onclick = function(evt) {
    if (checkList6.classList.contains('visible'))
      checkList6.classList.remove('visible');
    else
      checkList6.classList.add('visible');
  }

  var checkList7 = document.getElementById('list7');
  checkList7.getElementsByClassName('anchor')[0].onclick = function(evt) {
    if (checkList7.classList.contains('visible'))
      checkList7.classList.remove('visible');
    else
      checkList7.classList.add('visible');
  }

  var checkList8 = document.getElementById('list8');
  checkList8.getElementsByClassName('anchor')[0].onclick = function(evt) {
    if (checkList8.classList.contains('visible'))
      checkList8.classList.remove('visible');
    else
      checkList8.classList.add('visible');
  }

  var checkList9 = document.getElementById('list9');
  checkList9.getElementsByClassName('anchor')[0].onclick = function(evt) {
    if (checkList9.classList.contains('visible'))
      checkList9.classList.remove('visible');
    else
      checkList9.classList.add('visible');
  }

  var checkList10 = document.getElementById('list10');
  checkList10.getElementsByClassName('anchor')[0].onclick = function(evt) {
    if (checkList10.classList.contains('visible'))
      checkList10.classList.remove('visible');
    else
      checkList10.classList.add('visible');
  }

// Sidemenu dropdowns - slut //
// Mie/Laura kode slut //

/// Mie/Laura kode - Side menu navigation - https://www.w3schools.com/howto/howto_js_sidenav.asp //
function openNav() {
    document.getElementById("mySidenav").style.width = "500px";

  }

  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }
 // Side menu navigation slut -  //

// Progressbar - https://codepen.io/aramloosman/pen/eLVxrL //
  function setPrc( progress ) {
    if( progress ) {
      // the background-position needs the inverted value from 0% to 100% (0% means full bar, 100% means empty)
      document.getElementById('progress').setAttribute( 'style', 'background-position: ' + (100-progress) + '% 0')
    } else {
      document.getElementById('progress').setAttribute( 'style', '')
    }
  }
// Mie/Laura kode slut - Sidemenu nav - slut //



// Jakob - Picture and text changer //
  function resetImage() {
    document.getElementById("imgClickAndChange").src = "images/page1-crp.png"
    document.getElementById("guideText").innerHTML = "<b>Start:</b><br /> By double clicking on the name of the newly created mission on the bar on the left, you will be presented with the three views that you will interact with in order to perform the test."
}

function changeImage() {
    document.getElementById("imgClickAndChange").src = "images/page4-crp.png"
    document.getElementById("guideText").innerHTML = "<b>Step 1:</b> <br />The first view called the “calibration” allows you to change the information regarding the referencing system (model, manufacturer, configuration, frequency, position, orientation and radom). <br /><br/> It also allows you to adjust the antennas position and orientation. Lastly, you are able to adjust the payload settings, if any are connected."
}

function changeImage2() {
  document.getElementById("imgClickAndChange").src = "images/page5-crop.png"
  document.getElementById("guideText").innerHTML = "<b>Step 2:</b> <br />The second view called the “scan” allows you to create the flights of the drone that you will be using to test the antenna. Here, you will also be doing the data gathering as well as the data processing. "
}

function changeImage3() {
  document.getElementById("imgClickAndChange").src = "images/calipage6-cropd.png"
  document.getElementById("guideText").innerHTML = "<b>Step 3:</b> <br />In the third and last view, called the “plot”, is where you will be viewing the created data sets."
}

function changeImage4() {
  document.getElementById("imgClickAndChange").src = "images/scanPage7-crop.png"
  document.getElementById("guideText").innerHTML = "<b>Step 4:</b> <br />In order to proceed with the test, you must select the scan plans you wish to perform in a flight - then you export them. The software will then present you with an estimate of how much time it will take to perform the flight. If you are not satisfied with the estimate, you have the option to change the transfer speed. This is related to the speed between the different flights. The software will then prompt you to choose where you want to export the files to, therefore you must select a location.  "
}
// Change image and text on click - slut //

// Søge box - https://codepen.io/ChrisBarberRiley/pen/eYdBXPP - https://www.youtube.com/watch?v=bRdjEpodiaQ //

let searchable = [
  'Antenna',
  'Antenna measurements',
  'Antenna flexibility',
  'Antenna range',
  'Missions',
  'Newly created mission',
  'Caution',
  'Equipment',
  'Operator',
  'Flexibility and range',
  'Gathering data',
];

const searchInput = document.getElementById('search');
const searchWrapper = document.querySelector('.wrapper');
const resultsWrapper = document.querySelector('.results');

searchInput.addEventListener('keyup', () => {
  let results = [];
  let input = searchInput.value;
  if (input.length) {
    results = searchable.filter((item) => {
      return item.toLowerCase().includes(input.toLowerCase());
    });
  }
  renderResults(results);
});

function renderResults(results) {
  if (!results.length) {
    return searchWrapper.classList.remove('show');
  }

  const content = results
    .map((item) => {
      return `<li><a href="searchresults.html">${item}</a></li>`;
    })
    .join('');

  searchWrapper.classList.add('show');
  resultsWrapper.innerHTML = `<ul>${content}</ul>`;
}

// Jakob kode - slut //