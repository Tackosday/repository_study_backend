// // import fs from 'fs';
// // let hello="hola developer"
// // fs.writeFile("info.txt",hello,"utf-8",(x)=>{
// //     console.log(x);
// // })
// //  import fs from 'fs';
// console.log("nombre")
// let nameD=process.openStdin();
// console.log(nameD);
// // console.log("edad");
// // let old=process.openStdin();
// // console.log(old);
// // console.log("email");
// // let email=process.openStdin();
// // console.log(email);

// // let dataOrder=`
// // {
// //     "data":{
// //         "name"="${nameD}",
// //         "old"="${old}",
// //         "email"="${email}"
// //     }
// // }
// `;
//     // fs.writeFile("./data.json",dataOrder,"utf-8",(err)=>console.log(err));

import fs from 'fs';
process.stdin.setEncoding('utf8');
let nameD=process.openStdin();


let dataP=["edad","email"];
let i=0;
let result=[];


console.log("name");
process.stdin.on("data", (data) => {
    let dat = data.replace('\r\n',"")
    result.push(dat)
    console.log(dataP[i]);
    if(i == 2){
        let json =`
        {
            "data":{
                "name":"${result[0]}",
                "old":"${result[1]}",
                "email":"${result[2]}"
            }
        }`

        fs.writeFile("data.json",json,"utf-8",(err)=>{
            console.log(err)
            console.clear();
            console.log("creacion exitosa")
            process.exit();
        });
    }
    i++
});
