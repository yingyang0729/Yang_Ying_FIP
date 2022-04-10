
const bartips = document.querySelectorAll('.all-bartips .bartip');
const fullDiv = document.querySelector('section');
const container = document.querySelector('.container');
let timeoutId;

window.addEventListener('DOMContentLoaded', contentPosition);
window.addEventListener('resize', contentPosition);

function contentPosition(){
    bartips.forEach(bartip => {
        const pin = bartip.querySelector('.pin');
        const content = bartip.querySelector('.bartip-content');
        const arrow = bartip.querySelector('.arrow');
        content.style.left = pin.offsetLeft  + 50 +  'px';
        content.style.top = pin.offsetTop + 100 +'px';
        arrow.style.left = pin.offsetLeft - content.offsetLeft + pin.offsetWidth/2 + 'px';
    })
}

bartips.forEach(bartip=>{    
    const pin = bartip.querySelector('.pin');
    const content = bartip.querySelector('.bartip-content');
    pin.addEventListener('click',() => {
        bartip.classList.add('active');
    })
    pin.addEventListener('click',() => {
        timeoutId = setTimeout(() => {
            bartip.classList.remove('active');    
        }, 1000)
    })

    content.addEventListener('click',() => {
        clearTimeout(timeoutId)
        bartip.classList.add('active');
    })

    content.addEventListener('click',() => {
        timeoutId = setTimeout(() => {
            bartip.classList.remove('active');
        },1000)
    })
})