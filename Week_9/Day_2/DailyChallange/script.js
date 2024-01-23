class Video{
    constructor(title, uploader, time){
        this.title = title;
        this.uploader = uploader;
        this.time = time;
    }
    watch(){
    console.log(`${this.uploader} watched all ${this.time} of ${this.title}!`);
    }
}

const videoOne = new Video('Harry Potter', 'YoutuberOne', 120)
console.log(videoOne);
videoOne.watch()

const videoTwo = new Video("Lord of the Rings", "YoutuberTwo", 60)
videoTwo.watch()


const videoArr = [
    {title: "a", uploader: "aa", time:1},
    {title: "b", uploader: "bb", time:2},
    {title: "c", uploader: "cc", time:3},
    {title: "d", uploader: "dd", time:4},
    {title: "e", uploader: "ee", time:5},
];

videoArr.forEach((item,i,arr) => {
    arr[i] = new Video(item.title,item.uploader,item.time)
})
console.log(videoArr);

const secondmovie = videoArr[3].watch()

// videoArr.forEach(item=>{
//     item.watch()
// })