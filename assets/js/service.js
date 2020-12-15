var serviceList = document.querySelector('.service-list')
var serviceItems = serviceList.querySelectorAll('.service-item')
var serviceLayouts  = document.querySelectorAll('.service-layout')

// set id for every serviceItem
for (var i =0; i<serviceItems.length; i++) {
    serviceItems[i].setAttribute('id',`service-item ${i}`)
}

function removeActive(List, name) {
    for (var item of List) {
        if (item.classList.contains(name)) {
            item.classList.remove(name)
            break;
        }
    }
}
serviceItems.forEach(function(serviceItem) {
    serviceItem.onclick = function(e){
        removeActive(serviceItems,'service-item-active')
        this.classList.add('service-item-active')
        var serviceItemId = this.getAttribute('id')
        var index = serviceItemId[serviceItemId.indexOf(' ')+1]
        index = JSON.parse(index)
        removeActive(serviceLayouts,'active')
        serviceLayouts[index].classList.add('active')
        console.log(serviceLayouts[index].getAttribute('class'));
    }
})


