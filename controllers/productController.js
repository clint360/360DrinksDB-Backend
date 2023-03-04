const db = require('../models');

const Product = db.Product
const Review = db.Review


const addProduct = async (req, res) => {
   let info = {
    title: req.body.title,
    price: req.body.price,
    description: req.body.description,
    published: req.body.published ? req.body.published : false
   }

   const product = await Product.create(info);
   res.status(200).send(Product);
}

const getAllProducts = async (req, res) => {
   const products = await Product.findAll({});
   res.status(200).send(products);
}

const getOneProduct = async (req, res) => {
   const product = await Product.findByPk(req.params.id);
   res.status(200).send(product);
}
	
const updateProduct = async (req, res) => {
   const product = await Product.update(req.body, {where: {id : params.id}});
   res.status(200).send(product);
}

const deleteProduct = async (req, res) => {
   const product = await Product.destroy({where: {id : params.id}});
   res.status(200).send('Product is deleted')  ;
}

const getPublishedProducts = async (req, res) => {
   const products = await Product.findAll({where: {published: true}});
   res.status(200).send(products);
}
	
module.exports = {
   addProduct,
   getAllProducts,
   getOneProduct,
   updateProduct,
   deleteProduct,
   getPublishedProducts
}