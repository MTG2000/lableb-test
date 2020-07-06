window.onscroll = _.debounce(function () {
  scrollFunction();
}, 350);
var sn = document.getElementById("sticky_nav");

function scrollFunction() {
  if (
    document.body.scrollTop > 1080 ||
    document.documentElement.scrollTop > 1080
  ) {
    sn.style.top = "0";
    sn.classList.add("position-fixed");
  } else {
    sn.style.top = "-130px";
    sn.classList.remove("position-fixed");
  }
}

function openList(x) {
  var cL = document.getElementsByClassName("content_list");
  var i;
  for (i = 0; i < cL.length; i++) {
    var OcL = cL[i];
    if (cL[i] != document.getElementById("thisList_" + x)) {
      OcL.classList.remove("show_list");
    }
  }
  document.getElementById("thisList_" + x).classList.toggle("show_list");
}

function openSearch() {
  document.getElementById("thisSearch").classList.toggle("show_search");
  document
    .getElementById("btnSearch")
    .getElementsByTagName("i")[0]
    .classList.toggle("hidden");
  document
    .getElementById("btnSearch")
    .getElementsByTagName("i")[1]
    .classList.toggle("visible");
}

function openMenu() {
  document.getElementById("thisMenu").classList.toggle("show_menu");
  document
    .getElementById("btnMenu")
    .getElementsByTagName("i")[0]
    .classList.toggle("hidden");
  document
    .getElementById("btnMenu")
    .getElementsByTagName("i")[1]
    .classList.toggle("visible");
}
