const tableElement = Array.from(document.querySelectorAll("li:nth-child(odd)"));

tableElement.forEach(function(element){
    element.style.backgroundColor = "lightGrey";
})

console.log(tableElement);

let value = document.links.item(2).getAttribute("class");
let value2 = document.forms.item(1);

console.log(value+"\n"+value2);

const button = document.getElementById("#warnbutton");
console.log(button.getAttribute("id"));
console.log(button.getAttribute("class"));