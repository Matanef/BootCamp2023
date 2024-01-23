// class Video{
//     constructor(title, uploader, time){
//         this.title = title;
//         this.uploader = uploader;
//         this.time = time;
//     }
//     watch(){
//     console.log(`${this.uploader} watched all ${this.time} of ${this.title}!`);
//     }
// }

// const videoOne = new Video('Harry Potter', 'YoutuberOne', 120)
// console.log(videoOne);
// videoOne.watch()

// const videoTwo = new Video("Lord of the Rings", "YoutuberTwo", 60)
// videoTwo.watch()


// const videoArr = [
//     {title: "a", uploader: "aa", time:1},
//     {title: "b", uploader: "bb", time:2},
//     {title: "c", uploader: "cc", time:3},
//     {title: "d", uploader: "dd", time:4},
//     {title: "e", uploader: "ee", time:5},
// ];

// videoArr.forEach((item,i,arr) => {
//     arr[i] = new Video(item.title,item.uploader,item.time)
// })
// console.log(videoArr);

// const secondmovie = videoArr[3].watch()

// // videoArr.forEach(item=>{
// //     item.watch()
// // })



// JSON
const product = `[
    {
        "product_id":2,
        "product_name":"iPhone16",
        "price":12000,
        "description":"The new iPhone 16"
    }
]`

console.log(product);

const productObj = JSON.parse(product)
console.log(productObj[0]);
const {product_id, product_name, price, description} = productObj[0];
document.getElementById('root').innerHTML = `
        <h1>${product_name}</h1>
        <h1>${price}</h1>
        <h1>${description}</h1>
        
`;

let users = [
    {id:1, username:"aaa", creditcard: 45807878787878},
    {id:2, username:"bbb", creditcard: 45807878787878},
    {id:3, username:"ccc", creditcard: 45807878787878},
];

const replacer = (key, value) => {
    if (key === "creditcard"){
        return `xxxxxxxxx`
    }
    return value
};

console.log(JSON.stringify(users,replacer, 2));