const Posts = require('../models/post');
module.exports = {
    create,
};
function create(req, res) {
   Posts.findById((req.params.id))
   .then(post=>{
    post.save(post.comments.push(req.body));
    res.redirect(`/posts/${post._id}`)
   })
}