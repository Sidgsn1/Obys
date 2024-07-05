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
    delay:3.8
})

tl.from("#page1",{
    delay:0.2,
    y:1200,
    opacity:0,
    duration:0.5,
    ease:"power4.out"
})

tl.to("#loader",{
    display:"none"
})