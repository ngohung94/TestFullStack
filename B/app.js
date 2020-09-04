document.getElementById('clickWelcome').addEventListener('click', (e)=> {
    e.preventDefault()
    document.getElementById('welcome').style.display = 'block'
    document.getElementById('project').style.display = 'none'
    document.getElementById('contact').style.display = 'none'
})
document.getElementById('clickProject').addEventListener('click', (e)=> {
    e.preventDefault()
    document.getElementById('project').style.display = 'block'
    document.getElementById('welcome').style.display = 'none'
    document.getElementById('contact').style.display = 'none'
})
document.getElementById('clickContact').addEventListener('click', (e)=> {
    e.preventDefault()
    document.getElementById('contact').style.display = 'block'
    document.getElementById('project').style.display = 'none'
    document.getElementById('welcome').style.display = 'none'
})