const sidebar = document.querySelector(".navbar-sidebar")
const navitems = document.querySelectorAll('nav .nav-item')
const toggle = document.querySelector('.navbar-sidebar .toggle')
const bar = document.querySelector('#bar-toggle')
bar.addEventListener('click',()=>
{
    sidebar.classList.toggle('openn')
})
toggle.addEventListener('click',() =>
{
    sidebar.classList.toggle('open')
})
navitems.forEach(navItem => {
    navItem.addEventListener('click',()=>
    {
        navitems.forEach(navItem =>
            {
                navItem.classList.remove('active')
            })
            navItem.classList.add('active')
    })
})