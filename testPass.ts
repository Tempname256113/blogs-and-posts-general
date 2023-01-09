// import {compare, genSalt, hash} from "bcrypt";
//
// const password = 'passwordTest123';
//
// async function createPass(){
//     const salt = await genSalt(10);
//     return await hash(password, salt);
// }
//
// async function checkPass(){
//     const pass = await createPass();
//     const check = await compare('passwordTest123', pass);
//     console.log(check)
// }
//
// genSalt(10, 'b', (err, salt) => {
//     console.log(salt);
// })
