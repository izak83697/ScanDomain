require("dotenv").config();
const mongoose = require("mongoose");
mongoose.connect(process.env.MONGODB_URL,{
})
.then(() => {
    console.log("connected to mongoDB");
}).catch((err) => {
    console.log(err);
})



