let id = new URLSearchParams(window.location.search).get("id");
let formDiv = document.querySelector("#form");
let imgDiv = document.querySelector("#imgDiv");
let fileImg = document.querySelector("#file");
let Name = document.querySelector("#name");
let Des = document.querySelector("#des");
let Price = document.querySelector("#price");
let submitBtn = document.querySelector("#submit");

fileImg.addEventListener("input", (e) => {
    let file = e.target.files[0];
    if (file) {
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
            imgDiv.src = reader.result;
        }
    }
})

formDiv.addEventListener("submit", (e) => {
    e.preventDefault();
    let obj = {};
    let src = fileImg.files[0];
    const reader = new FileReader();
    reader.onload = function (e) {
        obj = {
            image: e.target.result,
            name: Name.value,
            description: Des.value,
            price: Price.value

        }
        axios.post("http://localhost:3000/Awesome", obj)
            .then(res => window.location = "./index.html")
    }
    reader.readAsDataURL(src);
})