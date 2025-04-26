gsap.registerPlugin(ScrollTrigger)

function countUp(){
    let valueDisplays = document.querySelectorAll(".num");
    let interval = 2000;

    valueDisplays.forEach((valueDisplay) => {
        let startValue = 0;
        let endValue = parseInt(valueDisplay.getAttribute("data-val"));
        let duration = Math.floor(interval / endValue);
        let counter = setInterval(function () {
            startValue += 1;
            valueDisplay.textContent = startValue;
            if (startValue == endValue) {
                clearInterval(counter);
            }
        }, duration);
    });
}

function progressBar(){
    let progress = document.querySelectorAll('.progress-bar');


    progress.forEach((progress) => {
        let finalValue = 0
        let counter = setInterval(() => {
            finalValue++
            progress.style.width = `${finalValue}%`
            if(finalValue == parseInt(progress.getAttribute('val'))){
                clearInterval(counter)
            }
        }, 10)
    })
}

function typewriter(){
    var app = document.getElementById('typewriter');

    var typewriter = new Typewriter(app, {
        loop: true,
        delay: 75,
    });

    typewriter
        .typeString("I'M A PROGRAMMER")
        .pauseFor(300)
        .deleteChars(10)
        .typeString('DESIGNER')
        .pauseFor(300)
        .deleteChars(8)
        .typeString('VISUAL ARTIST...')
        .pauseFor(1000)
        .start();
}

//cta animation
ctaTl = gsap.timeline({
    delay: 1
})
ctaTl.to('#cta-para', {xPercent: 120})
ctaTl.to('.cta-action', { scale: 1 })

gsap.to('#skill', {
    ScrollTrigger: {
        trigger: '.cta',
        start: "top 80%",
        end: "bottom top",
        scrub: true
    },
    opacity: 1,
    duration: 3,
    delay: 4,
    ease: Power2.easeinOut
})

ScrollTrigger.create({
    trigger: "#skill",
    start: "top 20%",
    end: "bottom top",
    scrub: true,
    once: true,
    onEnter: progressBar,
})


gsap.to('#ads', {
    ScrollTrigger: {
        trigger: '#skill',
        start: "top 10%",
        end: "bottom top",
        scrub: true,
    },
    opacity: 1,
    duration: 4,
    delay: 2,
    ease: Power2.easeinOut
})

ScrollTrigger.create({
    trigger: "#metrics",
    start: "top 20%",
    end: "bottom top",
    scrub: true,
    once: true,
    onEnter: countUp,
})

let cardTl = gsap.timeline({
    ScrollTrigger: {
        trigger: '#services',
        start: "top 40%",
        end: "bottom top",
        scrub: true,
    },
    delay: 2,
    ease: Power2.easeinOut
})

cardTl.to('#card1', {xPercent: 120})
cardTl.to('#card2', {xPercent: 120})
cardTl.to('#card3', {xPercent: 120})
cardTl.to('#card4', {xPercent: 120})
cardTl.to('#action', { scale: 1 })

let projectTl = gsap.timeline({
    ScrollTrigger: {
        trigger: '#project',
        start: "top 10%",
        end: "bottom top",
        scrub: true,
    },
    delay: 2,
    ease: Power2.easeinOut
})

projectTl.to('#project1', {scale: 1})
projectTl.to('#project2', {scale: 1})
projectTl.to('#project3', {scale: 1})
projectTl.to('#project4', {scale: 1})
projectTl.to('#project5', {scale: 1})
typewriter()
