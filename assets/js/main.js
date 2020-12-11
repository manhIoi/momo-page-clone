var instructionItemTitle = document.querySelectorAll('.instruction-item__title')
var instructionItemContent = document.querySelectorAll('.instruction-item__content')
for (var i= 0;i <instructionItemTitle.length;i++){
    // console.log(instructionItemTitle[i])
    instructionItemTitle[i].onclick = function (){
        for (var j= 0;j <instructionItemTitle.length;j++){
            if (instructionItemTitle[j].classList.contains('active')===true) {
                instructionItemTitle[j].classList.remove('active')
            }           
        }
        this.classList.add('active')
    }
}