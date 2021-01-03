const Books = require('../models/Books');

exports.createBook = async (req, res) => {
	const { name, author } = req.body;
	const book = new Books({ name, author });
    book.save().then((data) => {
        res.json(data)
    }).catch((err) => {
        res.json(err)
    })
}

exports.getBooks = async (req, res) => {
  Books.find().then((data) => {
        res.json(data);
    }).catch((err) => {
        res.json(err)
    })
}

exports.deleteBookById= async (req,res) => {
    const {_id} = req.body;
    //const _id=req.body._id;

    Books.deleteOne({_id:_id}).then((data) => { // aynı isimde olursa _id kalabilir bu _id:_id demek
        res.json(data);
    }).catch((err) => {
        res.json(err)
    })

}

exports.deleteBookByName= async (req,res) => {
    const {name} = req.body;
    //const _id=req.body._id;

    Books.deleteOne({name}).then((data) => { 
        res.json("Silindi: "+ name);
    }).catch((err) => {
        res.json(err)
    })

}