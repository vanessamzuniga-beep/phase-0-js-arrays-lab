// Write your code here
// create product inventory array
let products = ["Laptop", "Phone", "Headphones", "Monitor"]


// Access product information
 function logFirstProduct(){
  console.log(products[0])
 }


// Add a product
function addProduct(name) {
  products.push(name)
}
addProduct("mouse")
console.log(products[4])


// Update product information
function updateProductName(index, name){
  products[index] = name
}
updateProductName(0,"computer")
console.log(products)


// Remove last product from array
function removeLastProduct(){
  products.pop()
}
removeLastProduct(products)
console.log(products)



// Export the necessary parts for testing
module.exports = {
  logFirstProduct: typeof logFirstProduct !== 'undefined' ? logFirstProduct : undefined,
  addProduct: typeof addProduct !== 'undefined' ? addProduct : undefined,
  updateProductName: typeof updateProductName !== 'undefined' ? updateProductName : undefined,
  removeLastProduct: typeof removeLastProduct !== 'undefined' ? removeLastProduct : undefined,
  products
};