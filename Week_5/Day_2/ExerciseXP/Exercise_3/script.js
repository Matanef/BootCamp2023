let allBoldItems;

function getBoldItems(){
    allBoldItems = document.querySelectorAll('strong')
    for (let i = 0 ; i<allBoldItems.length ; i++)
    return allBoldItems;
}
console.log(getBoldItems());

let strongCell = document.getElementsByTagName('strong');
console.log(strongCell);

function highlight(){

    for (let i =0; i<strongCell.length; i++){
        strongCell[i].style.backgroundColor = "blue"
        strongCell[i].style.color = "white"
    }
}
// highlight()

function returnItemsToDefault(){
    let strongBackToWBlack= getBoldItems()
    for (let i = 0 ; i <strongBackToWBlack.length; i++){
        strongBackToWBlack[i].style.color = 'black'
    }
}
// returnItemsToDefault()

let paragraph = document.querySelector('p')
console.log(paragraph);

paragraph.addEventListener('mouseover',highlight);
paragraph.addEventListener('mouseout', returnItemsToDefault)