const Hello = () =>{
    let title = 'My Title'
    let show = true
    let arr = [{ name: 'John' },
                { name: 'Ann' }, 
                { name: 'Dan' }
    ]

    if (show){
        return <>Not Authorized</>
    }
    return (
        <>
            <h1>{title}</h1>
            {show ? <h2>AAA</h2>:<h2>BBB</h2>}
            {
                arr.map((item) => {
                    return (
                        <div>
                            {item.name}
                        </div>
                    )
                })
            }
        </>
    );

};

export default Hello;

/**
 * 1. create a new user component
 * 2. return JSC with all the names and emails from this array
 * [{id: 1, name: "John", email: 'jjj@gmail.com},
 * {id: 2, name: "Marry", email: 'mmm@gmail.com},
 * {id: 3, name: "Anne", email: 'aaa@gmail.com},]
 */

let array2 = [
    {id: 1, name: "John", email: 'jjj@gmail.com'},
    {id: 2, name: "Marry", email: 'mmm@gmail.com'},
    {id: 3, name: "Anne", email: 'aaa@gmail.com'}

]