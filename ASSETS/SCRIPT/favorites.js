let id =new URLSearchParams(window.location.search).get("id");
let AllDiv=document.querySelector(".a-divs");


fetch("http://localhost:3000/Favorites")
.then(res=>res.json())
.then(data=>{
    console.log(data);
   data.forEach(element => {
    AllDiv.innerHTML+=`
    <div class="div8">
    <div class="div-img">
        <img src="${element.image}" alt="">
    </div>
    <div class="div-text">
        <h3>${element.name}</h3>
        <p>${element.price}</p>
        <div class="cart-div">
            <p id="p">${element.description} </p>
            <i class="bi bi-heart"></i> 
        </div>
        <div class="div-btn">
        <button onclick="Delete(${element.id})">Delete</button>
    </div>
</div>
    `
   });
})

function Delete (id){
    axios.delete("http://localhost:3000/Favorites/"+id)
    .then(res=>{
        window.location="./favorites.html"
    })
}