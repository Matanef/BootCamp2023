// function allThuthy() {
//     for(let i = 0; i<arguments.length ;i++){
//         if(!arguments)
//     }
// }
const result = allTruthy(true, 1, 'hello',);
console.log(result);
const result2 = allTruthy(true, 1, 'hello',0,0,0,0,0,0);
console.log(result2);
const result3 = allTruthy(5, 4, 3, 2, 1, 0);
console.log(result3);

function allTruthy(){
    let result = true;
    const argArray = [...arguments];
    argArray.forEach(element => {
        if(!element){
            result = false;
        }
    });
    return result
}