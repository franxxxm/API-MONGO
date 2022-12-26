const express = require("express");
const app = express();
const db = require("./db/conn")


app.use(express.json())

db();

//router
const routes = require("./routes/router");

app.use("/api", routes)

app.listen(3030, ()=>{
    console.log("foi")
})