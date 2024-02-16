fetch("http://localhost:3004/all")
.then((res) => res.json())
.then((data) =>{
    const html = data.map(item =>{
        return `${item.name} ${item.price}`
    })
    document.getElementById('root').innerHTML = html
})
.catch((err)=>{
    console.log(err);
    res.status(404).json({msg:'404 no product'})
})