var arr = [
    {name:"Petals of roses", image:"https://plus.unsplash.com/premium_photo-1673427043687-47efe08f42b1?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cm9zZXN8ZW58MHx8MHx8fDA%3D"},
    {name:"Animals of town",image:"https://plus.unsplash.com/premium_photo-1666278379770-440439b08656?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YW5pbWFsc3xlbnwwfHwwfHx8MA%3D%3D"},
    {name:"The crowd of the city",image:"https://plus.unsplash.com/premium_photo-1661306543132-93937b4c242e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGNyb3dkfGVufDB8fDB8fHww"},
    {name:"Fruit of the planet",image:"https://plus.unsplash.com/premium_photo-1676642611795-9f1de2b99f83?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZnJ1aXR8ZW58MHx8MHx8fDA%3D"},
    {name:"Orange peeled",image:"https://plus.unsplash.com/premium_photo-1663926403396-6d9831ce6a1d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8b3JhbmdlJTIwcGVlbGVkfGVufDB8fDB8fHww"},
    {name:"Web design",image:"https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHdlYiUyMGRlc2lnbnxlbnwwfHwwfHx8MA%3D%3D"}
]

function showTheCards(){
    var clutter = "";
    arr.forEach(function(obj){
        clutter += `<div class="box">
        <img class="cursor-pointer" src="${obj.image}" alt="image">
        <div class="caption">Lorem ipsum </div>
        </div>`;
    })
    
    document.querySelector(".container").innerHTML = clutter;
}

function handleSearch(){
    var input = document.querySelector("#searchinput")

    input.addEventListener("focus",function(){
        document.querySelector(".overlay").style.display = "block";
    })
    input.addEventListener("blur",function(){
        document.querySelector(".overlay").style.display = "none";
    })
    input.addEventListener("input",function(){
        filteredArray = arr.filter(obj => obj.name.toLowerCase().startsWith(input.value));
        var clutter = "";
        filteredArray.forEach(function(obj){
            clutter += `<div class="res flex px-8 py-3">
            <i class="ri-search-line font-semibold mr-5"></i>
            <h3 class="font-semibold">${obj.name}</h3>
            </div>`
        })
        document.querySelector(".searchdata").style.display = "block";
        document.querySelector(".searchdata").innerHTML = clutter;
    })
}

handleSearch();
showTheCards();