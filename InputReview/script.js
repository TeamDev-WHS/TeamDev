// Add JavaScript code for your web site here and call it from index.html.
// https://www.geeksforgeeks.org/star-rating-using-html-css-and-javascript/
 
// To access the stars
let stars = 
    document.getElementsByClassName("star");
let output = 
    document.getElementById("output");
 
// Funtion to update rating
function update(n) {
    remove();
    for (let i = 0; i < n; i++) {
        if (n == 1) cls = "one";
        else if (n == 2) cls = "two";
        else if (n == 3) cls = "three";
        else if (n == 4) cls = "four";
        else if (n == 5) cls = "five";
        stars[i].className = "star " + cls;
    }
}
 
// To remove the pre-applied styling
function remove() {
    let i = 0;
    while (i < 5) {
        stars[i].className = "star";
        i++;
    }
}