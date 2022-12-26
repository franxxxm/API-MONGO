const mongoose = require("mongoose");



async function main(){
    try {
        mongoose.set("strictQuery", true)
        await mongoose.connect(
            "mongodb+srv://root:jY8iIBv27B83bQPr@cluster0.oh9fwba.mongodb.net/?retryWrites=true&w=majority"
        );
    } catch (error) {
        console.log(error)     
    }
}


module.exports = main;