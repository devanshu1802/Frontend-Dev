function homepageAnimation(){
    gsap.set(".slidesm",{ scale: 5 })

var tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".home",
        start: "top top",
        end: "bottom bottom", 
        scrub: 1
    }
})

tl
.to(".vdodiv", {
    '--clip': "0%",
    ease: Power2
}, 'a')
.to(".slidesm", {
    scale: 1,
    ease: Power2
}, 'a')

.to(".lft", {
    xPercent: -30,   
    ease: Power4
}, 'b')
.to(".rgt", {
    xPercent: 30,
    ease: Power4
}, 'b')

}
function realpageAnimation(){

gsap.to(".slide",{
     scrollTrigger: {
        trigger: ".real",
        start: "top top",
        end: "bottom bottom", 
        scrub: 1
    },
    xPercent: -200,
    ease: Power4

})

}



homepageAnimation();
realpageAnimation();