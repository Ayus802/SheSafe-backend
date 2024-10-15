const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://guptayush47:ytU0aRfjmXjGwS5O@cluster727.nlyzewj.mongodb.net/she-safe")

const UserSchema = new mongoose.Schema({
    name:{
        type: String,
        required:true,
        trim:true,
    },
    gender:{
        type: String,
        required:true,
        trim: true
    },
    phone: {
        type: Number,
        required: true,
        trim: true,
        unique: true
    },
    email : {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    password : {
        type: String,
        required: true,
        trim: true,
    },
    aadharNo : {
        type: Number,
        required: true,
        trim:true,
        unique: true
    }
})

// UserSchema.pre("save", async function(next){
//     const hashed_pass = await bcrypt.hash(this.password , 10);
//     this.password = hashed_pass;
//     next();
// })

const UserModel = mongoose.model("User", UserSchema);

module.exports = { UserModel }