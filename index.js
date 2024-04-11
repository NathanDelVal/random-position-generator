document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('button').addEventListener('mouseover', (e) => {

        let rndmY = Math.random() * window.screen.availHeight - e.target.offsetHeight;
        let rndmX = Math.random() * window.screen.availWidth - e.target.offsetWidth;

        e.target.style.position = 'absolute';
        e.target.style.top = `${rndmY}px`;
        e.target.style.left = `${rndmX}px`;
    })
})