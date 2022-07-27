const mongoose = require("mongoose");

const searchSchema = new mongoose.Schema({
    id:{type: Number},
    username: {type: String},
    name: {type: String},
    state:{type: String},
    DOB:{type: String},
    country:{type: String}
},{
    versionKey: false,
    timestamps: true
})

module.exports = mongoose.model("search", searchSchema);