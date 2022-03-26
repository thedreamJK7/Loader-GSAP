window.addEventListener('load', loader);

function loader() {
    let TLLOAD =  gsap.timeline({
        default: {
            ease: "power3"
        }
    });

    TLLOAD
    .to('.images-container', {height: 400, duration: .8, delay: .2})
    .to('.bloc-txt', {height: 100, duration: .8}, '-=0.2')
    .to('.bloc-txt h2', {y: 10, duration: .8}, '-=0.2')
    .to('.f2', {y: 0, duration: .8}, '-=0.2')
    .to('.flip-img1', {display: "none"})
    .to('.f2', {y: "-100%"})
    .to('.load-container', {autoAlpha: 0, duration: 0.8, delay: 0.2})
    .add(()=> {
        document.querySelector('video').play();
    }, '-=0.8')
}