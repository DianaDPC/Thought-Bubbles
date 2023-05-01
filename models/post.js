const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const commentSchema = new Schema({
    body: {
        type: String,
        minLength: 1,
        maxLength: 250,
    }
},{
    timestamps: true
})

const postSchema = new Schema({
    title: {
        type: String,
    },
    body: {
        type: String,
        minLength: 1,
        maxLength: 250,
    },
    topics: {
        type: String,
        enum: ["pop","Gaming","Pop-Culture","Anime","Movies","Music","Books","Whatifs","Code","Huh???"]
    },
    comments: [commentSchema]
},{
    timestamps: true
});

module.exports = mongoose.model("Post",postSchema);