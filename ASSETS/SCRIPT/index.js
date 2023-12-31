
let AllDiv = document.querySelector(".a-divs");
let page = 8;

function ShowData() {

    fetch("http://localhost:3000/Awesome")
        .then(res => res.json())
        .then(data => {
            data.slice(page - 8, page).forEach(element => {
                AllDiv.innerHTML += `
        <div class="div8">
        <div class="div-img">
            <img src="${element.image}" alt="">
        </div>
        <div class="div-text">
            <h3>${element.name}</h3>
            <p>${element.price}</p>
            <div class="cart-div">
                <p id="p">${element.description} </p>
                <i onclick="Fav(${element.id})" class="bi bi-heart"></i>
            </div>
            <div class="div-btn">
            <button onclick="Delete(${element.id})">Delete</button>
            <button onclick="Update(${element.id})">Update</button>
            <button onclick="GoTo(${element.id})">Deatils</button>
        </div>
    </div>
        `
            });
        
        })
}
ShowData();



let Load = document.querySelector("#load");

Load.addEventListener("click", () => {
    page += 8;
    ShowData();

})


function Delete(id) {
    axios.delete("http://localhost:3000/Awesome/" + id)
        .then(res => {
            window.location = "./index.html"
        })
}

function GoTo(id) {
    window.location = `./details.html?id=${id}`
}

function Fav(id) {
    axios.get("http://localhost:3000/Awesome/" + id)
        .then(res => {
            axios.post("http://localhost:3000/Favorites", res.data)
            window.location = `./favorites.html`

        })
}

function Update(id) {
    window.location = `./updates.html?id=${id}`
}



let menuList = document.querySelector("#list");
let menuNav = document.querySelector(".menu");

menuList.addEventListener("click", () => {
    if (menuNav.style.display === "flex") {
        menuNav.style.display = "none";
    } else {
        menuNav.style.display = "flex";
    }
});


let Top = document.querySelector(".top");
Top.style.display = "none"

window.addEventListener("scroll", () => {
    if (window.scrollY > 650) {
        Top.style.position = "fixed"
        Top.style.display = "flex"
    } else {
        Top.style.position = "sticky"
        Top.style.display = "none"
    }
})

let Bn = document.querySelector(".banner");
Top.addEventListener("click", () => {
    Bn.scrollIntoView({
        behavior: 'smooth'
    })
})
