// const fs = require("fs")
// const path = require("path")

// fs.readFile("./files/starter.txt", "utf8", (err,data)=>{
//     // path.join(__dirname, "files", "starter.txt") better way because / may cause issues
//     if(err) throw err;
//     console.log(data)
// })

// // write a new file
// // Replaces the file if the filename already exists
// fs.writeFile(path.join(__dirname, "files", "reply.txt"),"Hello world.", (err)=>{
//     if(err) throw err;
//     console.log("Write complete")
// })

// // Update/append a file
// // creates a file if it already does not exist
// fs.appendFile(path.join(__dirname, "files", "test.txt"),"This is test file.", (err)=>{
//     if(err) throw err;
//     console.log("Write complete")
// })

// // exit on uncaught errors
// process.on("uncaughtException", err=>{
//     console.error(`There was an uncaught error: ${err}`)
//     process.exit(1)
// })

const { format } = require("date-fns")
const { v4: uuid } = require("uuid")

console.log(format(new Date(), "pp"))
console.log(uuid()) 