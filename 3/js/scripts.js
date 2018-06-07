var text = 'Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period';
var dinosaur = 'triceratops';
var dinosaurUpperCased = dinosaur.toUpperCase();
console.log(dinosaurUpperCased);
var textReplace = text.replace('Velociraptor', dinosaur.UpperCase);
var partOfTheText = textReplace.slice(0, textReplace.length/2);
console.log(partOfTheText);