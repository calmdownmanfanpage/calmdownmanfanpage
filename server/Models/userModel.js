const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name:{type: String, required: true, minlength: 3, maxlength: 30},
    email:{type: String, required: true, minlength: 3, maxlength: 200, unique: true}, //key값
    password:{type: String, required: true, minlength: 3, maxlength: 1024},
},{
    timestamps: true // createdAt, updatedAt 속성 자동 생성
})

const userModel = mongoose.model("User", userSchema);

module.exports = userModel
