function _(x) {
  return document.getElementById(x);
}
function initMenu() {
  _("btn_marker").style.left = _("btn1").offsetLeft + "px";
  _("btn_marker").style.width = _("btn1").offsetWidth - 6 + "px";
  _("btn_marker").style.display = "block";
}
function loadContent(btn) {
  _("btn_marker").style.left = btn.offsetLeft + "px";
  _("btn_marker").style.width = btn.offsetWidth - 6 + "px";
  _("myContent").innerHTML = "Content for " + btn.innerHTML + " loaded";
}
window.addEventListener("load", function (event) {
  initMenu();
});
