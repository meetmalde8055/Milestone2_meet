const model = require('../../models/trade')
exports.index = (req, res)=>{
    let trades = model.find();
    let categories = model.findCategories();
    res.render('./trade/index', {trades, categories});
};

exports.new = (req, res)=>{
    res.render('./trade/newTrade');
};


exports.show = ((req, res, next) => {
    let id = req.params.id
    let temp = model.findById(id)   
    if(temp) {
        res.render('./trade/show', {item: temp});
    } else {
        let err = new Error("Cannot find story with id " + id)
        err.status = 404;
        next(err)
    }
})

exports.edit = (req, res, next)=>{
    let id = req.params.id;
    let item = model.findById(id);
    if(item) {
        res.render('./trade/edit', {item: item});
    } else {
        let err = new Error("Cannot find item with id " + id)
        err.status = 404;
        next(err)
    }};

exports.update = (req, res, next)=>{
    let item = req.body;
    let id = req.params.id;
    if(model.updateById(id, item)) {
        console.log("in")
        res.redirect('/trades/'+id)
    } else {
        let err = new Error("Cannot find story with id " + id)
        err.status = 404;
        next(err)
    }};


exports.delete = (req, res)=>{
    let id = req.params.id;
    if(model.deleteById(id)) {
        res.redirect('/trades/')
    } else {
        let err = new Error("Cannot find story with id " + id)
        err.status = 404;
        next(err)
}};

exports.create = ((req, res) => {
    let item = req.body;
    model.save(item)
    res.redirect('./')
})
