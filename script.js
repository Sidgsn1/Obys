function locomotiveAnimation(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});


// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}

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

tl.from("#hero1, #page2",{
    opacity:0
},"-=1.2")
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

var videocontainer=document.querySelector("#videocontainer");
var video=document.querySelector("#videocontainer video");

videocontainer.addEventListener("mouseenter",function(){
    videocontainer.addEventListener("mousemove",function(dets){
        gsap.to("#crsr",{
            opacity:0
        })
        gsap.to("#videocursor",{
            left:dets.x -500,
            y:dets.y -250
        })
    })
})
videocontainer.addEventListener("mouseleave",function(){
    gsap.to("#crsr",{
        opacity:1
    })
    gsap.to("#videocursor",{
        left:"68%",
        top:"-15.6%"
    })
})

var flag=0;

videocontainer.addEventListener("click",function(){
    if(flag == 0){
        video.play();
        video.style.opacity=1;
        document.querySelector("#videocursor").innerHTML=`<i class="ri-pause-mini-fill"></i>`;
        gsap.to("#videocursor",{
            scale:0.5
        })
        flag=1;
    }
    else{
        video.pause();
        video.style.opacity=0;
        document.querySelector("#videocursor").innerHTML=`<i class="ri-play-mini-fill"></i>`;
        gsap.to("#videocursor",{
            scale:1
        })
        flag=0;
    }
})
}

function sheryAnimation(){
    Shery.imageEffect(".image-div",{
        style:5,
        config:{"a":{"value":2,"range":[0,30]},"b":{"value":-0.89,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.7272749932567818},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":false},"growSize":{"value":1,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.21,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.46,"range":[0,10]},"metaball":{"value":0.24,"range":[0,2]},"discard_threshold":{"value":0.41,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.38,"range":[0,2]},"noise_scale":{"value":10.69,"range":[0,100]}},
        gooey:true
    })
}

function flagAnimation(){
    document.addEventListener("mousemove",function(dets){
        gsap.to("#flag",{
            x:dets.x,
            y:dets.y
        })
    })
    document.querySelector("#hero3").addEventListener("mouseenter",function(){
        gsap.to("#flag",{
            opacity:1
        })
    })
    document.querySelector("#hero3").addEventListener("mouseleave",function(){
        gsap.to("#flag",{
            opacity:0
        })
    })
    
}

function footerAnimation() {

    var clutter = ""
    var clutter2 = ""
    document.querySelector("#footer h1").textContent.split("").forEach(function (elem) {
      clutter += `<span>${elem}</span>`
    })
    document.querySelector("#footer h1").innerHTML = clutter
    document.querySelector("#footer h2").textContent.split("").forEach(function (elem) {
      clutter2 += `<span>${elem}</span>`
    })
    document.querySelector("#footer h2").innerHTML = clutter2
  
  
    document.querySelector("#footer-text").addEventListener("mouseenter", function () {
      gsap.to("#footer h1 span", {
        opacity: 0,
        stagger: 0.05
      })
      gsap.to("#footer h2 span", {
        delay: 0.35,
        opacity: 1,
        stagger: 0.1
      })
    })
    document.querySelector("#footer-text").addEventListener("mouseleave", function () {
      gsap.to("#footer h1 span", {
        opacity: 1,
        stagger: 0.1,
        delay: 0.35,
  
      })
      gsap.to("#footer h2 span", {
        opacity: 0,
        stagger: 0.05
      })
    })
  }

locomotiveAnimation();
loadingAnimation();
flagAnimation();
cursorAnimation();
sheryAnimation();
footerAnimation();

