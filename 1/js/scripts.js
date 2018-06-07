function getTriangleArea(a, h) {
    if ((a > 0) && (h > 0)) {
    return a * h / 2;
    } else {
    document.write('nieprawidłowe dane');
    }
}

var triangle1Area = getTriangleArea(0, 4);
var triangle2Area = getTriangleArea(2, 8);
var triangle3Area = getTriangleArea(5, 4);

console.log(triangle1Area);
console.log(triangle2Area);
console.log(triangle3Area);