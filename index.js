                                                            //BASIC CLI

// console.log("Welcome to my Notes App!");
// console.log(process);

// const command = process.argv[2];
// const value = process.argv[3];

// if (command === "double"){
//     console.log(value*2);
// }
// else{
//     console.log("unknown command");
// }

                                                            //COMMONJS

// const calculator = require("./calculator");

// console.log(calculator.add(10, 5));
// console.log(calculator.subtract(10, 5));

                                                            //FILE SYSTEM
                                                            //sych
import fs from "node:fs";
import http from "node:http";

// fs.writeFileSync("note.text", "You are learning node.js"); // Write

// const read = fs.readFileSync("note.text", "utf-8");

// console.log(read);

// fs.appendFileSync("note.text", "\n you got this");

                                                            //asych
// console.log("reading")
// fs.readFile("note.text", "utf-8", (err, data)=>{
//     console.log(data);
// });
// console.log("done reading")

                                                              //ROUTING
// const server = http.createServer((req, res)=>{
//     const pathName = req.url;

//     if (pathName==='/' || pathName==='/overview'){
//         res.end("this is overviewwww")
//     }
//     else if(pathName==='/products'){
//         res.end("this is productsss");
//     }
//     else{
//         res.writeHead(404);
//         res.end("page not found");
//     }
// });
// console.log("Listening3");
// server.listen(8000, ()=>{
//     console.log("Listening4");
// })
