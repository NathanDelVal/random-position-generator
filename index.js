document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('button').addEventListener('mouseover', (e) => {

        let rndmY = Math.random() * e.target.closest('[data-rndm-target]').offsetHeight - e.target.offsetHeight + 20;
        let rndmX = Math.random() * e.target.closest('[data-rndm-target]').offsetWidth - e.target.offsetWidth + 20;

        e.target.style.position = 'absolute';
        e.target.style.top = `${rndmY}px`;
        e.target.style.left = `${rndmX}px`;
    })
})