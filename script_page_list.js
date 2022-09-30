console.log("hello");

const myList = document.getElementById("my_list");

function addLi(element, text) {
    const newLi = document.createElement("li");
    newLi.innerText = text;
    element.appendChild(newLi);
};

let localList = localStorage.getItem("myList");
if (localList) {
    localList = JSON.parse(localList);
} else {
    localList = [];
};

for (let i = 0; i < localList.length; i++) {
    addLi(myList, localList[i]);
};

const input = document.getElementById("input_list");
const button = document.getElementById("submit_list");

button.addEventListener("click", () => {
    addLi(myList, input.value);
    localList.push(input.value);
    localStorage.setItem("myList", JSON.stringify(localList));
});

const containerBox = document.getElementById("carrousel_container");
const myBox = document.querySelectorAll("box_carrousel");
const myLeft = document.getElementById("img_box_left");
const myRight = document.getElementById("img_box_right");

const onlyBox = document.querySelector(".box_carrousel");
let myBoxWidth = onlyBox.offsetWidth;

myRight.addEventListener("click", function() {
    containerBox.scrollLeft += myBoxWidth;
});

myLeft.addEventListener("click", function() {
    containerBox.scrollLeft -= myBoxWidth;
});