const mongoose = require("mongoose");

const postcommentSchema = new mongoose.Schema({
    id:{type: Number},
    comment: {type: String}
},{
    versionKey: false,
    timestamps: true
})

module.exports = mongoose.model("postcomment", postcommentSchema);