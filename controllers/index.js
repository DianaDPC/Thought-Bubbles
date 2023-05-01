module.exports = {
    index,
    about,
    tech

};

function index(req,res){
    res.render('index', { title: 'Thought Bubbles' });
}
function about(req,res) {
    res.render('about', { title: 'About' });
}

function tech(req,res) {
    res.render('tech', { title: 'Tech' });
}