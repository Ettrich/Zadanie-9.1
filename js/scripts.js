function getTriangleArea(a, h) {

    
    if (( a <= 0 ) || ( h <= 0 )) {
    console.log("Nieprawidłowe dane");}
    
    return (a*h/2);

}

var triangle1Area = getTriangleArea(10, 15);
var triangle2Area = getTriangleArea(15, 25);
var triangle3Area = getTriangleArea(25, 35);

// Function check 

console.log(getTriangleArea(10, 6));

console.log(triangle1Area);
console.log(triangle2Area);
console.log(triangle3Area);