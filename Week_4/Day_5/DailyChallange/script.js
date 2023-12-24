let userNumber;

do {
    userNumber = parseInt(prompt("With how many bottles would you like to begin"));
 }while (userNumber<=0||isNaN(userNumber));

let counter = 1; 
function song(num){
    for (let i =0 ; i<num; i++){
		let pnoun = '';
		counter === 1 ? pnoun = 'it' : pnoun = 'them';

        
		console.log(`${num} bottles of beer on the wall`);
		console.log(`${num} botles of beer`);
		console.log(`Take ${counter} down, pass ${pnoun} around`);

		num = userNum - counter;
		counter++;

		console.log(`${num} bottles of beer on the wall`);
		console.log('\n');
		
		if (num - counter < 0 && num > 0) {
			console.log(`${num} bottles of beer on the wall`);
			console.log(`${num} botles of beer`);
			counter = num;
			console.log(`Take ${counter} down, pass ${pnoun} around`);
			if (num - counter <= 0)
				console.log("no bottle of beer on the wall");
		}
	}
}

song(userNum);
 //condition ? expression_if_true : expression_if_false;