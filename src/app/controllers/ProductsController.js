const Product = require('../models/Product');
const { mutipleMongooseToObject } = require('../../util/mongoose');
const { mongooseToObject } = require('../../util/mongoose');

class ProductsController   {
    
    // [GET] /courses/:slug
    show(req, res, next)  {
        Product.findOne( {slug: req.params.slug} )
            .then(product => {
                // res.json(product);
                res.render('products/show', { product: mongooseToObject(product) });
                
            }).catch(next);


    }

    // [GET] /courses/create
    create(req, res, next)  {
        res.send('Prod create');
    }
}


module.exports = new ProductsController;


