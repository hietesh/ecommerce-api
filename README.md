# ecommerce-api
It's an Ecommerce API project where following API request can be done

1) API to add products to the database
2) API to list products
3) API to delete products
4) API to update quantity of a product (can be incremented or decremented)

# Installation steps for the project 

Note:- (MongoDb should be installed on the system inorder to start this project)

1) Clone the project of this repository
2) Open Command Prompt and change the directory to this project path
3) run Command 'npm install'
4) Once all the dependencies get installed run the command 'npm start'
5) As the server start you are ready to hit the API

# Below are the defined API's

1) API to add the products to the database (**POST REQUEST**)(Test this API in Postman or any prefferd REST CLIENT)

  localhost:4000/api/products/create

  Define the below in the body section of POSTMAN (POST REQUEST)  

  TIP:- set the body type as **RAW -> JSON**

  Eg:- 
  {
      "name": "Prod 1",
      "quantity": 3
  }

2) API to list products (**GET REQUEST**)

  localhost:4000/api/products/
  
3) API to delete products (**DELETE REQUEST**)
  localhost:4000/api/products/:id

4) API to update quantity of a product (**PUT REQUEST**)
   (This request will increment and decrement the quantity based on the number provided)
  localhost:4000/api/products/:id/update_quantity/?number=12

