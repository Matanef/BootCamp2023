const moment = require('moment')
const currentDate = moment()

//format is from documantation:
//https://momentjs.com/
/**
 * moment().format('MMMM Do YYYY, h:mm:ss a'); // פברואר 12 2024, 2:29:41 אחה"צ
moment().format('dddd');                    // שני
moment().format("MMM Do YY");               // פבר׳ 12 24
moment().format('YYYY [escaped] YYYY');     // 2024 escaped 2024
moment().format();                         
 */

console.log(currentDate.format("MMM Do YY"));
console.log(currentDate.format('MMMM Do YYYY, h:mm:ss a'));