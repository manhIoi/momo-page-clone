var navbarListWrap = document.querySelector('.navbar__list-wrap')
var navbarList = document.querySelector('.navbar__list')

navbarListWrap.onclick = function(e){
    var iconSwing = this.classList
    var open = 'swingDown'
    var close = 'swingUp'
    if (iconSwing.contains(open)){
        iconSwing.remove(open)
        iconSwing.add(close)
        navbarList.style.top = '-500px'
    }
    else{
        iconSwing.remove(close)
        iconSwing.add(open)
        navbarList.style.top = 'var(--height-header)'
    }
}