const User = (props)=> {


    console.log('props -->', props);
    return(
        <>
        <div>
            <h2>User name: {props.username}</h2>
            <h3>list of users</h3>
            {/* <p>{username}</p> */}
            {/* {props.num}
            {props.yesno ? "Yes": "No"}
            {
                props.posts.map(item =>{
                    return(
                        <>{item}</>
                    )
                })
            }
            <button onClick={props.handleClick}>Say Hello</button> */}
        </div>
        </>
    )

}

export default User