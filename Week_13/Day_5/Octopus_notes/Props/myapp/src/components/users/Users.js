import User from "./User";
// uuid
const Users =() =>{
    const users = [
        {id: 1, name: "John", email: 'jjj@gmail.com'},
        {id: 2, name: "Marry", email: 'mmm@gmail.com'},
        {id: 3, name: "Anne", email: 'aaa@gmail.com'},
        {id: 4, name: "Someone", email: 'Some@gmail.com'},     
    ];
    return (
    <div>
        {/* <User name={users[2].name} email={users[2].email}/> */}
        {
            users.map((item, indx) =>{
                return <User userinfo={item} key={item.id}/> 
            })}
    </div>
    )
}

export default Users