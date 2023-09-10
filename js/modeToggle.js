const modeToggle = document.querySelector('.topNav .modeToggle')
const progressBadge = document.querySelector('.mainTop .progress .badge')
modeToggle.addEventListener('click', ()=>{
    modeToggle.classList.toggle('on')
    progressBadge.classList.toggle('on')
})