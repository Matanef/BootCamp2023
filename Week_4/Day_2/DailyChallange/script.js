function wordsInStars(words){
    let astlength = words.length;
    let ast = '';
    let sentenceArray = words
    const split_string = sentenceArray.split(",");
    for (let i = 1; i<=astlength; i++){
        for (let j = 0; j<sentenceArray.split(","); j++){
            if (","){
                
            }

        }
        ast +="*";
        console.log(ast);
        console.log(astlength);

    return split_string;
}
}

let a = wordsInStars("Hello, World, in, a, frame")
console.log(a)