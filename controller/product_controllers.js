const Product = require('../model/Product');

// get all products
const productsAll = async function(req,res){
    try{
        const data = [];
        const products = await Product.find();
        if(products.length==0){
            res.json({message:"No Products Found"});
            return;
        }
        products.forEach(product =>{
            data.push({
               id:product._id,
               name:product.name,
               quantity:product.quantity 
            });
        })
        res.json({data:{products:data}});
     }
     catch(err){
        res.json({message:error});
     }
}

// single products
const productSingle = async function(req,res){
    console.log(req.params.id);
    if(req.params.id!=null){
        try {
            const product = await Product.findById(req.params.id);
            res.json(product);
          } catch (error) {
            res.json({ message: error });
          }
    }
    else{
        res.json({error:"Invalid Request"});
    }
    
}

// add new products
const productAdd = async function(req,res){
   const product = new Product({
       name:req.body.name,
       quantity:req.body.quantity
   });

   try{
      const addProduct = await product.save();
      res.send({data:{name:addProduct.name,quantity:addProduct.quantity}});
   }
   catch(err){
      res.status(400).send(err);
   }
}

// update product
const productUpdate = async function(req,res){
    try{
        if(req.query.number=='null' || req.query.number==undefined){
           res.json({
               error:'Invalid Input'
           })
           return;
        }

        //get the current product qty
        const product = await Product.findById(req.params.id);
        console.log(product);
        if(product!==null){
            const calQty = parseInt(product.quantity) + parseInt(req.query.number);
            if(calQty >= 0){
                //update the current product qty
                Product.findOneAndUpdate({
                _id:req.params.id
                },
                {quantity:calQty},
                {new:true},
                function(err,data){
                    if(err){console.log(err);}
                        res.json(
                            {data:{product:data},message:'updated successfully'}
                        );
                }); 
            }
            else{
                res.json({error:'Qty cannot be less than 0'}); 
            }
        }
        else{
            res.json({error:'ID NOT FOUND'});
        }       
    }
    catch(err){
       res.json(err);
    }
}

// delete product
const productDelete = async function(req,res){
   try{
       const deleteProduct = await Product.findByIdAndDelete(req.params.id);
       if(deleteProduct!=null){
           res.json({data:{message:"product deleted"}});
       }
       else{
           res.json({error:'ID NOT FOUND'}); 
       }      
   }
   catch(error){
      res.json({message:error});
   }
}

module.exports = {
    productsAll,
    productSingle,
    productAdd,
    productUpdate,
    productDelete
}