const mongoose = require("mongoose");

const userDetailSchema = new mongoose.Schema({
    id:{type: Number},
    firstName: {type: String, required:true},
    lastName: {type: String},
    profilepic:{type: String},
    DOB:{type: String, required:true},
    Bio:{type: String, requird:true},
    website: {type: String},
    hobby:{type: String}
},{
    versionKey: false,
    timestamps: true
})

module.exports = mongoose.model("userdetail", userDetailSchema);