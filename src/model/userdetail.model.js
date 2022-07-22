const mongoose = require("mongoose");

const userDetailSchema = new mongoose.Schema({
    id:{type: Number},
    firstName: {type: String},
    lastName: {type: String},
    profilepic:{type: String},
    DOB:{type: String},
    Bio:{type: String},
    website: {type: String},
    hobby:{type: String}
},{
    versionKey: false,
    timestamps: true
})

module.exports = mongoose.model("userdetail", userDetailSchema);