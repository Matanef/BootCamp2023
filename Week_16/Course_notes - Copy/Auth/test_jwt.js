import jwt from 'jsonwebtoken'

// sign( {payload}, secret-code, {expire-time} )

// const token = jwt.sign(
//     {
//         email: 'efratimatan@gmail.com', userid: 16
//     },
//     "1234@334!55$",
//     {expiresIn: "30s"}
// );
// console.log(token);

const myToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImVmcmF0aW1hdGFuQGdtYWlsLmNvbSIsInVzZXJpZCI6MTYsImlhdCI6MTcxMDE3NTcwMiwiZXhwIjoxNzEwMTc1NzMyfQ.RohZ3EXxDqNRjYDsDPwSuURqtHPQzJ5arIIRdrb1axE";

/** 
 * Verify (token, secret, (err, decode) =>{})
 */

jwt.verify(myToken, "1234@334!55$", (err, decode)=>{
    if(err){
        return console.log(err.message);
    }
    console.log(decode);
})
