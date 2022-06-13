function populateResults(){
  container1 = document.getElementById("res-content-1");
  container1.innerHTML = "<p>".concat(JSON.stringify(alignment), "</p>");
}
