//Chrome Debbuger -> Adding breakpoint

let fruit = "Papayas";

switch (fruit){
    case 'Oranges':
        console.log('Oranges are $0.59 per kilo');
        break
    case 'Mangoes':
    case 'Papayas':
        console.log('Mangoes and Papayas are $2.79 a kilo');
        break;
        default:
            console.log('Sorry we ran out of ' + fruit + ".");
}