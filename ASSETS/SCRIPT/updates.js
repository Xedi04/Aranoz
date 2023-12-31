let id = new URLSearchParams(window.location.search).get("id");
let formDiv = document.querySelector("#form");
let imgDiv = document.querySelector("#imgDiv");
let fileImg = document.querySelector("#file");
let Name = document.querySelector("#name");
let Des = document.querySelector("#des");
let Price = document.querySelector("#price");
let submitBtn = document.querySelector("#submit");

fetch("http://localhost:3000/Awesome/" + id)
    .then(res => res.json())
    .then(data => {
        imgDiv.src = data.image;
        Name.value = data.name;
        Des.value = data.description;
        Price.value = data.price;

    })

fileImg.addEventListener("input", (e) => {
    let file = e.target.files[0];
    if (file) {
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
            imgDiv.src = reader.result  
        }
    }
})


formDiv.addEventListener("submit", (e) => {
    e.preventDefault();
    axios.put("http://localhost:3000/Awesome/" + id, {
        image: imgDiv.src,
        description: Des.value,
        name: Name.value,
        price: Price.value
    }).then(res => {
        console.log(res);
        window.location = "./index.html"
    })
})


