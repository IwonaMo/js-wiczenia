var list = document.getElementById("list");
var add = document.getElementById("addElem");
add.addEventListener("click", function() {
  var element = document.createElement("li");
  var li = list.getElementsByTagName("li");
  var variable = li.length;
  element.innerHTML = "item " + variable;
  list.appendChild(element);
});
