var Buttons = document.getElementsByClassName('button');
console.log(Buttons);
var NumberOfButtons = Buttons.length;

for (var i = 0; i < NumberOfButtons; i++) {
	alert(Buttons[i].innerText);
}