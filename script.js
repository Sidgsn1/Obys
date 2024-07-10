function loadingAnimation(){
    var tl=gsap.timeline();

tl.from(".line h1",{
    y:150,
    duration:.6,
    stagger:.3,
    delay:0.5
})

tl.from("#line1-part1",{
    opacity:0,
    onStart:function(){
        var h5timer=document.querySelector("#line1-part1 h5");
        var count='';
        setInterval(function(){
            if(count<100){
                h5timer.textContent=count++;
            }
            else{
                h5timer.textContent=count;
            }
        },35)
    }
})

tl.to(".line h2",{
    animationName:"anime",
    opacity:1
})

tl.to("#loader",{
    opacity:0,
    duration:0.4,
    delay:3.5
})

tl.from("#page1",{
    delay:0.1,
    y:1200,
    opacity:0,
    duration:0.9,
    ease:"power4.out"
})

tl.to("#loader",{
    display:"none"
})

tl.from("#nav",{
    opacity:0
})

tl.from("#hero1 h1,#hero2 h1,#hero3 h2,#hero4 h1",{
    y:120,
    stagger:.2
})
}

function cursorAnimation(){
    var crsr=document.querySelector("#crsr");

document.addEventListener("mousemove",function(dets){
    gsap.to("#crsr",{
        left:dets.x,
        top:dets.y
    })
})

Shery.makeMagnet("#nav-part2 h4");

}

loadingAnimation();
cursorAnimation();