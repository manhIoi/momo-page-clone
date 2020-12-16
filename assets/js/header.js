var navbarListWrap = document.querySelector('.navbar__list-wrap')
var navbarList = document.querySelector('.navbar__list')

navbarListWrap.onclick = function(e){
    var iconSwing = this.classList
    var open = 'swingDown'
    var close = 'swingUp'
    if (iconSwing.contains(open)){
        iconSwing.remove(open)
        iconSwing.add(close)
        navbarList.style.height = '0'
        
    }
    else{
        iconSwing.remove(close)
        iconSwing.add(open)
        navbarList.style.height = 'calc(6 * var(--height-header))'
    }
}