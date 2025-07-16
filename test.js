console.log("Server starting..."); require("http").createServer((req,res) => res.end("Test")).listen(3000, () => console.log("Server running on 3000"))
