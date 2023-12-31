let id =new URLSearchParams(window.location.search).get("id");
let AllDiv=document.querySelector(".a-divs");

fetch("http://localhost:3000/Awesome/"+id)
.then(res=>res.json())
.then(data=>{
    AllDiv.innerHTML+=`
    <div class="div8">
    <div class="div-img">
        <img src="${data.image}" alt="">
    </div>
    <div class="div-text">
        <h3>${data.name}</h3>
        <p>${data.price}</p>
        <div class="cart-div">
            <p id="p">${data.description} </p>
            <i class="bi bi-heart"></i>
        </div>
        <div class="div-btn">
        <button onclick="Delete(${data.id})">Delete</button>
        <button>Update</button>
        <button>Deatils</button>
    </div>
</div>
    `
})