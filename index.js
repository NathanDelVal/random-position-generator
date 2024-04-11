document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('button').addEventListener('mouseover', (e) => {

        let rndmY = Math.random() * window.screen.height - e.target.offsetHeight;
        let rndmX = Math.random() * window.screen.width - e.target.offsetWidth;

        e.target.style.position = 'absolute';
        e.target.style.top = `${rndmY}px`;
        e.target.style.left = `${rndmX}px`;
    })
})