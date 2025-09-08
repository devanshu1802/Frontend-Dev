var elem = document.querySelectorAll(".elem")

elem.forEach(function(val){
    val.addEventListener("mouseenter", function(){
        val.childNodes[3].style.opacity = 1
    })

    val.addEventListener("mouseleave", function(){
        val.childNodes[3].style.opacity = 0
    })

   val.addEventListener("mousemove", function (dets) {
    val.querySelector("img").style.left = dets.x + "px";
    val.querySelector("img").style.top = dets.y-y + "px";
    })
})
