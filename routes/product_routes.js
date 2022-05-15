const router = require('express').Router();
const productController = require('../controller/product_controllers');

//add items to the products
router.post('/create',productController.productAdd);
//get all item
router.get('/',productController.productsAll);

// get single item
router.get('/:id',productController.productSingle);

// update the product
router.put('/:id/update_quantity',productController.productUpdate);
// delete the product
router.delete('/:id',productController.productDelete);

module.exports = router;