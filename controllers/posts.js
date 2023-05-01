const Posts = require('../models/post')

module.exports = {
    index,
    new: newPost,
    show,
    create,
    delete: deletePost,
    edit,
    update

};

function index(req,res){
    Posts.find({})
    .then(posts=>{
        res.render('posts/index',{ posts, title:"All the Thoughts" })
    }).catch(err=> console.log(err))
}

function newPost(req,res){
    res.render('posts/new', {title:"Adding bubbles..."})
}

function show(req,res){
    Posts.findById(req.params.id)
    .then(post=>{
        res.render('posts/show', {post, title: "Thought Bubbles"})
    })
}

function create(req,res){
    const newPost = new Posts(req.body);
    newPost.save()
    .then(resp => {
        res.redirect('/posts')
    }).catch(err => console.log(err))
}

function deletePost(req,res){
    Posts.findByIdAndDelete(req.params.id)
    .then(() => res.redirect('/posts'))
}
function edit(req, res) {
    Posts.findById(req.params.id)
    .then(post => {
    res.render('posts/edit', {post, title:"Rethinking..."});
    })
}
function update(req, res) {
    Posts.findByIdAndUpdate(req.params.id, req.body)
    .then(()=> {
        res.redirect(`/posts/${req.params.id}`);
    })
}
